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

      return {
        message: `User ${user.name} created successfully`,
        interests: user.interests,
        email: user.email,
        name: user.name,
        verified: false,
      };
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

      return {
        message: 'User logged in successfully',
        interests: user.interests,
        email: user.email,
        name: user.name,
        verified: user.verified,
      };
    }),

  saveUserInterests: publicProcedure
    .input(
      z.object({
        email: z.string(),
        interests: z.array(z.string()),
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

      const userInterests = await ctx.db.user.update({
        where: {
          email: input.email,
        },
        data: {
          interests: {
            set: input.interests,
          },
        },
      });

      console.log('User interests saved successfully', userInterests);

      return { message: 'User interests saved successfully' };
    }),

  getUserInterests: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      return { interests: user.interests };
    }),

  emailVerified: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      const updatedUser = await ctx.db.user.update({
        where: {
          email: input.email,
        },
        data: {
          verified: true,
        },
      });

      return { message: `Email verified successfully for ${input.email}` };
    }),
});
