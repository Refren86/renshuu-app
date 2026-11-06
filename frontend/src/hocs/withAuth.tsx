import { ComponentType, useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

import { useAuth } from "@/hooks/useAuth";
import { Loader } from "@/components/Loader";

export function withAuth<T extends object>(Component: ComponentType<T>) {
  return function AuthenticatedComponent(props: T) {
    const { loading, user } = useAuth();

    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.navigate({ to: "/" });
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Loader size="lg" />
        </div>
      );
    }

    return <Component {...props} />;
  };
}
