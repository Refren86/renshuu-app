import { ReactNode } from "react";
import { AxiosError } from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ApolloProvider as BaseApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ENV } from "@/lib/const";
import { Toaster } from "./ui/toaster";
import { client } from "../lib/apolloClient";
import { AuthProvider } from "./AuthProvider";

type ProvidersProps = {
  children: ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 min
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: Error) => {
        // Don't retry on 401/403 errors
        if (error instanceof AxiosError && (error?.response?.status === 401 || error?.response?.status === 403)) {
          return false;
        }

        return failureCount < 3; // Retry up to 3 times for other errors
      },
    },
  },
});

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return <BaseApolloProvider client={client}>{children}</BaseApolloProvider>;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID}>
        <ApolloProvider>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ApolloProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};
