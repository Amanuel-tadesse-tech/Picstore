import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";

export function useAuth() {
  const { data: user, isLoading: loading, error } = trpc.auth.me.useQuery();
  const { mutate: logout } = trpc.auth.logout.useMutation();

  const isAuthenticated = !!user;

  return {
    user,
    loading,
    error,
    isAuthenticated,
    logout: () => logout(undefined, { onSuccess: () => window.location.reload() }),
    loginUrl: getLoginUrl(),
  };
}
