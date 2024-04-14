import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const interestsRouter = createTRPCRouter({
  getInterests: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.interests.findFirst();
  }),
  updateInterests: publicProcedure
    .input(
      z.object({
        interests: z.array(z.string()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      console.log('Updating interests', input.interests);
      return ctx.db.interests.create({
        data: {
          interests: input.interests,
        },
      });
    }),
  createInterests: publicProcedure
    .input(
      z.object({
        interests: z.array(z.string()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.interests.create({
        data: {
          interests: input.interests,
        },
      });
    }),
});
