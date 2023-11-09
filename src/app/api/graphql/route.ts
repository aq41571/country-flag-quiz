import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { resolvers } from './resolver/resolvers'

const typeDefs = loadSchemaSync('src/app/api/graphql/schema.graphql', { loaders: [new GraphQLFileLoader()] })
const server = new ApolloServer({ resolvers, typeDefs })
const handler = startServerAndCreateNextHandler(server)

// ts-prune-ignore-next
export const GET = async (request: Request) => handler(request)
// ts-prune-ignore-next
export const POST = async (request: Request) => handler(request)
