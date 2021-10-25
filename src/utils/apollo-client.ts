import {ApolloClient, InMemoryCache, ApolloLink, HttpLink} from '@apollo/client/core'
import {errorLink} from '~/utils/error'

type ApolloClients = {
  [P: string]: any
}

const apolloClients: ApolloClients = {}

// eslint-disable-next-line
export default function useApolloClient (arg?: string | object) {
  if (!arg) {
    return apolloClients
  }
  if (typeof arg === 'string') {
    return apolloClients[arg]
  }
  if (typeof arg === 'object') {
    Object.assign(apolloClients, arg)
  }
}

export function setApolloClient (name: string, uri: string, onError = null) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      onError || errorLink,
      new HttpLink({
        uri: uri || '/graphql',
        includeExtensions: true,
        credentials: 'include',
      }),
    ]),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
      query: {
        fetchPolicy: 'network-only',
      },
    },
  })

  useApolloClient({
    [name]: client,
  })

  return client
}
