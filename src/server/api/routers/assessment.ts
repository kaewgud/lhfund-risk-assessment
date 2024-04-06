
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

  submitAssessment: publicProcedure
    .input(z.object({
      point: z.number(),
      userId: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const riskLevel = await ctx.db.riskLevel.findMany();
      if (!riskLevel) throw new Error("Risk Level not found")

      if (input.point < 15) {
        return ctx.db.assessment.create({
          data: {
            point: input.point,
            userId: input.userId,
            riskLevelId: riskLevel?.find((r) => r.level === 1)?.id as string,
          },

        });
      } else if (input.point <= 21) {
        return ctx.db.assessment.create({
          data: {
            point: input.point,
            userId: input.userId,
            riskLevelId: riskLevel?.find((r) => r.level === 2)?.id as string,
          },
        });
      } else if (input.point <= 29) {
        return ctx.db.assessment.create({
          data: {
            point: input.point,
            userId: input.userId,
            riskLevelId: riskLevel?.find((r) => r.level === 3)?.id as string,
          },
        });

      } else if (input.point <= 36) {
        return ctx.db.assessment.create({
          data: {
            point: input.point,
            userId: input.userId,
            riskLevelId: riskLevel?.find((r) => r.level === 4)?.id as string,
          },
        });

      } else if (input.point >= 37) {
        return ctx.db.assessment.create({
          data: {
            point: input.point,
            userId: input.userId,
            riskLevelId: riskLevel?.find((r) => r.level === 5)?.id as string,
          },
        });
      }
    }),
});
