import { ComponentType, useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

import { useAuth } from "@/hooks/useAuth";
import { Loader } from "@/components/Loader";

export function withAdmin<T extends object>(Component: ComponentType<T>) {
  return function AdminComponent(props: T) {
    const { loading, user, isAdmin } = useAuth();

    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.navigate({ to: "/" });
        } else if (!isAdmin) {
          router.navigate({ to: "/vocabulary" });
        }
      }
    }, [user, loading, router, isAdmin]);

    if (loading || !user || !isAdmin) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Loader size="lg" />
        </div>
      );
    }

    return <Component {...props} />;
  };
}
