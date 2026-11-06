import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const isProd = import.meta.env.PROD;

export const graphqlBaseURL = isProd ? "/graphql" : "http://localhost:5000/graphql";

const httpLink = createHttpLink({
  uri: graphqlBaseURL, // graphql endpoint
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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
