import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { resolvers } from './resolver/resolvers'
import typeDefs from './schema'

const server = new ApolloServer({ resolvers, typeDefs })
const handler = startServerAndCreateNextHandler(server)

// ts-prune-ignore-next
export const GET = async (request: Request) => handler(request)
// ts-prune-ignore-next
export const POST = async (request: Request) => handler(request)
