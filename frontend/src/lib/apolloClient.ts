import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const isProd = import.meta.env.PROD;

export const graphqlBaseURL = isProd ? "/graphql" : "http://localhost:5000/graphql";

const httpLink = createHttpLink({
  uri: graphqlBaseURL, // graphql endpoint
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});
