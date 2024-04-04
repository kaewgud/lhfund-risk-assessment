import { z } from "zod";

import {
  adminOnlyProcedure,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
export const portfolioRouter = createTRPCRouter({

  getAllRiskLevel: publicProcedure.query(async ({ ctx }) => {
    const riskLevels = await ctx.db.riskLevel.findMany({});
    return riskLevels;
  }),

  getAllRatio: publicProcedure.query(async ({ ctx }) => {
    const ratios = await ctx.db.ratio.findMany({});
    return ratios;
  }),

  getAllFund: publicProcedure.query(async ({ ctx }) => {
    const funds = await ctx.db.fund.findMany({});
    return funds;
  }),

  getAllMutualFund: publicProcedure.query(async ({ ctx }) => {
    const mutualFunds = await ctx.db.mutualFund.findMany({});
    return mutualFunds;
  }),

  getAllMonthlyPrice: publicProcedure.query(async ({ ctx }) => {
    const monthlyPrices = await ctx.db.monthlyPrice.findMany({});
    return monthlyPrices;
  }),

  getAllRatioByRiskLevel: publicProcedure
    .input(z.object({ riskLevel: z.number() }))
    .query(async ({ ctx, input }) => {
      const riskLevel = await ctx.db.riskLevel.findFirst({
        where: {
          level: input.riskLevel,
        },
      });

      if (!riskLevel) {
        throw new Error("Risk Level not found");
      }

      const ratios = await ctx.db.ratio.findMany({
        where: {
          riskLevelId: riskLevel.id,
        },
      });

      return ratios;
    }),

  getAllFundByRatio: publicProcedure
    .input(z.object({ ratioId: z.string() }))
    .query(async ({ ctx, input }) => {
      const fund = await ctx.db.fund.findMany({
        where: {
          Ratio: {
            some: {
              id: input.ratioId,
            },
          },
        },
      });

      return fund;
    }),

  getAllMutualFundByRiskLevel: publicProcedure
    .input(z.object({ riskLevel: z.number() }))
    .query(async ({ ctx, input }) => {
      const riskLevel = await ctx.db.riskLevel.findFirst({
        where: {
          level: input.riskLevel,
        },
      });

      if (!riskLevel) {
        throw new Error("Risk Level not found");
      }

      const mutualFunds = await ctx.db.mutualFund.findMany({
        where: {
          riskLevelId: riskLevel.id,
        },
      });

      return mutualFunds;
    }),

  getAllMonthlyPriceByMutualFund: publicProcedure
    .input(z.object({ mutualFundId: z.string() }))
    .query(async ({ ctx, input }) => {
      const monthlyPrices = await ctx.db.monthlyPrice.findMany({
        where: {
          mutualFundId: input.mutualFundId,
        },
      });

      return monthlyPrices;
    }),

  getAllRiskLevelInAssessmentGroupByRiskLevelName: publicProcedure
    .query(async ({ ctx }) => {
      const riskLevelGroup = await ctx.db.assessment.groupBy(
        {
          by: ["riskLevelId"],
          _count: {
            id: true,
          },
        },
      );

      const riskLevels = await ctx.db.riskLevel.findMany({
        select: {
          id: true,
          level: true,
        },
      });

      return riskLevelGroup.map((riskLevel) => {
        return {
          level: riskLevels.find((lv) => lv.id === riskLevel.riskLevelId)?.level,
          riskLevelId: riskLevel.riskLevelId,
          count: riskLevel._count.id,
          percentage: (riskLevel._count.id / riskLevelGroup.length) * 100,
        };
      });
    }),


  createRatio: adminOnlyProcedure
    .input(z.object({
      riskLevel: z.number(),
      fundId: z.string(),
      percentage: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {

      const riskLevel = await ctx.db.riskLevel.findFirst({
        where: {
          level: input.riskLevel,
        },
      });

      if (!riskLevel) {
        throw new Error("Risk Level not found");
      }

      const fund = await ctx.db.fund.findUnique({
        where: {
          id: input.fundId,
        },
      });

      if (!fund) {
        throw new Error("Fund not found");
      }

      return ctx.db.ratio.create({
        data: {
          name: fund.name as string,
          riskLevelId: riskLevel.id as string,
          fundId: input.fundId as string,
          percentage: input.percentage as number,
        },
      });
    }),

  updateRatio: adminOnlyProcedure
    .input(z.object({
      id: z.string(),
      percentage: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {

      return ctx.db.ratio.update({
        where: {
          id: input.id,
        },
        data: {
          percentage: input.percentage as number,
        },
      });
    }),
})

