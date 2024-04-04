
import { z } from "zod";

import {
  adminOnlyProcedure,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const assessmentRouter = createTRPCRouter({
  getAllQuestion: publicProcedure.query(async ({ ctx }) => {
    const questions = await ctx.db.question.findMany();
    return questions;
  }),

  getQuestionById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const question = await ctx.db.question.findUnique({
        where: {
          id: input.id,
        },
      });
      return question;
    }),

  getAllChoice: publicProcedure.query(async ({ ctx }) => {
    const choices = await ctx.db.choice.findMany();
    return choices;
  }),

  createQuestion: adminOnlyProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.question.create({
        data: {
          text: input.text,
        },
      });
    }),
});
