import { ComponentType, useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

import { useAuth } from "@/hooks/useAuth";
import { Loader } from "@/components/Loader";

export function withPublicOnly<T extends object>(Component: ComponentType<T>) {
  return function PublicOnlyComponent(props: T) {
    const { loading, user } = useAuth();

    const router = useRouter();

    useEffect(() => {
      if (!loading && user) {
        router.navigate({ to: "/vocabulary" });
      }
    }, [user, loading, router]);

    if (loading || user) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <Loader size="lg" />
        </div>
      );
    }

    return <Component {...props} />;
  };
}
