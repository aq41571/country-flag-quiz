'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'
import { PropsWithChildren } from 'react'

const makeClient = () => {
  const httpLink = new HttpLink({ uri: '/api/graphql' })
  const cache = new NextSSRInMemoryCache()
  const link =
    typeof window === 'undefined' ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), httpLink]) : httpLink
  return new NextSSRApolloClient({ cache, link })
}
export const ApolloWrapper = ({ children }: PropsWithChildren): JSX.Element => (
  <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
)
