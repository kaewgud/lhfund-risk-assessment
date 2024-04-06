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

  getAllFundType: publicProcedure.query(async ({ ctx }) => {
    const fundTypes = await ctx.db.fundType.findMany({});
    return fundTypes;
  }),

  getAllMutualFund: publicProcedure.query(async ({ ctx }) => {
    const mutualFunds = await ctx.db.mutualFund.findMany({});
    return mutualFunds;
  }),

  getAllMonthlyPrice: publicProcedure.query(async ({ ctx }) => {
    const monthlyPrices = await ctx.db.monthlyPrice.findMany({});
    return monthlyPrices;
  }),

  updateMutualFundRatio: adminOnlyProcedure
    .input(z.object({
      mutualFundId: z.string(),
      percentage: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      const ratio = await ctx.db.ratio.findFirst({
        where: {
          mutualFundId: input.mutualFundId,
        },
      });

      if (!ratio) {
        throw new Error("Ratio not found");
      }

      return ctx.db.ratio.update({
        where: {
          id: ratio.id,
        },
        data: {
          percentage: input.percentage as number,
        },
      });
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
          Ratio: {
            some: {
              riskLevelId: riskLevel.id,
            },
          },
        },
      });

      return mutualFunds;
    }),

  getAllRatioGroupByFundTypeInRiskLevel: publicProcedure
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
        select: {
          id: true,
          percentage: true,
        },
        where: {
          riskLevelId: riskLevel.id,
        },
      });

      const fundTypes = await ctx.db.fundType.groupBy({
        by: ["name"],
        _count: {
          id: true,
        },
      });

      return fundTypes.map((fundType) => {
        return {
          name: fundType.name,
          count: fundType._count.id,
          sum_percentage: ratios.reduce((acc, ratio) => {
            return acc + ratio.percentage;
          }, 0),
        };
      });
    }),

  createMutualFundRatio: adminOnlyProcedure
    .input(z.object({
      riskLevel: z.number(),
      mutualFundId: z.string(),
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

      const mutualFund = await ctx.db.mutualFund.findUnique({
        where: {
          id: input.mutualFundId as string,
        },
      });

      if (!mutualFund) {
        throw new Error("mutualFund not found");
      }

      return ctx.db.ratio.create({
        data: {
          name: mutualFund.name as string,
          riskLevelId: riskLevel.id as string,
          mutualFundId: input.mutualFundId as string,
          percentage: input.percentage as number,
        },
      });
    }),

  getAllMutualFundByFundType: publicProcedure
    .input(z.object({ fundTypeId: z.string() }))
    .query(async ({ ctx, input }) => {
      const mutualFunds = await ctx.db.mutualFund.findMany({
        where: {
          fundTypeId: input.fundTypeId,
        },
      });

      return mutualFunds;
    }),

  getAllFundTypeByRiskLevel: publicProcedure
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

      const fundTypes = await ctx.db.fundType.findMany({
        where: {
          mutualFunds: {
            some: {
              Ratio: {
                some: {
                  riskLevelId: riskLevel.id,
                },
              },
            },
          },
        },
      });

      return fundTypes;
    }),

  getAllMonthlyPriceByMutualFundInFundType: publicProcedure
    .input(z.object({
      mutualFundId: z.string(),
      fundTypeId: z.string(),
    }))
    .query(async ({ ctx, input }) => {
      const monthlyPrices = await ctx.db.monthlyPrice.findMany({
        where: {
          mutualFundId: input.mutualFundId,
          mutualFund: {
            fundTypeId: input.fundTypeId,
          }
        },
      });

      return monthlyPrices;
    }),

  updateRepresentMap: adminOnlyProcedure
    .input(z.object({
      fundTypeId: z.string(),
      mutualFundId: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const representMap = await ctx.db.representMap.findUnique({
        where: {
          id: input.fundTypeId,
        },
      });

      if (!representMap) {
        throw new Error("MutualFund not found");
      }

      return ctx.db.representMap.update({
        where: {
          id: input.fundTypeId,
        },
        data: {
          mutualFundId: input.mutualFundId as string,
        },
      });
    }),

  getRepresentMapByFundType: publicProcedure
    .input(z.object({ fundTypeId: z.string() }))
    .query(async ({ ctx, input }) => {
      const representMap = await ctx.db.representMap.findFirst({
        where: {
          fundTypeId: input.fundTypeId,
        },
      });

      return representMap;
    }),

  // Todo: fix

  getAllRiskLevelGroupByRiskLevelNameInAssessment: publicProcedure
    .query(async ({ ctx }) => {
      const riskLevels = await ctx.db.riskLevel.findMany({
        select: {
          level: true,
          name: true,
          id: true,
        },
      });

      const riskLevelAnalysis = await ctx.db.assessment.groupBy({
        by: ["riskLevelId"],
        _count: {
          riskLevelId: true,
        },
      });
      
      return riskLevels.map((item) => {
        return {
          level: item.level,
          riskLevelId: item.id,
          count: riskLevelAnalysis.find((analysis) => analysis.riskLevelId === item.id)?._count.riskLevelId || 0,
          name: item.name,
        };
      });
    }),
});





