
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

})
