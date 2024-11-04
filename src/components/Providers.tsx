import { ReactNode } from "react"
import { ApolloProvider as BaseApolloProvider } from '@apollo/client';

import { Toaster } from "./ui/toaster";
import { client } from '../lib/apollo-client';

type ProvidersProps = {
  children: ReactNode;
}

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return (
    <BaseApolloProvider client={client}>
      {children}
    </BaseApolloProvider>
  );
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ApolloProvider>
      {children}
      <Toaster />
    </ApolloProvider>
  )
}