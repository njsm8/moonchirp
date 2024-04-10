import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { hashPassword, comparePassword } from '~/server/api/utils/auth';

export const userRouter = createTRPCRouter({
  signup: publicProcedure
    .input(
      z.object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existingUser = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (existingUser) {
        throw new Error('User already exists');
      }
      const hashedPassword = await hashPassword(input.password);

      const user = await ctx.db.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashedPassword,
        },
      });

      return { message: `User ${user.name} created successfully` };
    }),
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      const passwordMatch = await comparePassword(
        input.password,
        user.password,
      );

      if (!passwordMatch) {
        throw new Error('Invalid password');
      }

      return { message: 'User logged in successfully' };
    }),
});
