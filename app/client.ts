import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const httpUri = `${process.env.SERVER_ENDPOINT}/graphql`;

const httpLink = new HttpLink({
  uri: httpUri,
  credentials: 'include',
});

const link = ApolloLink.from([httpLink]);

const inMemoryCache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache: inMemoryCache,
});
