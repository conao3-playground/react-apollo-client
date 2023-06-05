'use client';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { LaunchesList } from './components/LaunchesList';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <main>
        <div>
          <p className="font-bold underline">Hello, world!</p>
        </div>
        <LaunchesList />
      </main>
    </ApolloProvider>
  )
}
