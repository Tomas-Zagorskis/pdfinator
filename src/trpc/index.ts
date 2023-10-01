import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';

export const appRouter = router({
	authCallBack: publicProcedure.query(() => {
		const { getUser } = getKindeServerSession();
		const user = getUser();
		if (!user.email || !user.id) throw new TRPCError({ code: 'UNAUTHORIZED' });

		// check if the user is in the database

		return { success: true };
	}),
});

export type AppRouter = typeof appRouter;
