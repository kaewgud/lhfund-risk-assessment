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
})

