import { useAuth } from "./useAuth";

export function useRequireAdmin() {
  const { user, isAdmin, loading } = useAuth();

  if (loading) return { isAdmin: false };

  if (!user || !isAdmin) {
    throw new Error("Admin access required");
  }

  return { isAdmin: true };
}
