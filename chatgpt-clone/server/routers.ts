import { COOKIE_NAME } from "@shared/const";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      ctx.res.clearCookie(COOKIE_NAME, {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        path: "/",
      });
      return {
        success: true,
      } as const;
    }),
  }),

  chat: router({
    // TODO: Add chat endpoints
  }),
});

export type AppRouter = typeof appRouter;
