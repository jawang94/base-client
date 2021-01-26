import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { MockedResponse, MockLink } from 'apollo-link-mock';

const mockApolloClient = (
  mocks: readonly MockedResponse[]
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks),
  });
};

export default mockApolloClient;
