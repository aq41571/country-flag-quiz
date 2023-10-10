import { QueryResolvers, Resolvers } from '@/generated/graphql'
import { fetchCountryById, listCountries } from './useCases'

const countries: QueryResolvers['countries'] = () => listCountries()
const countryById: QueryResolvers['countryById'] = (_, { id }) => fetchCountryById(id)

const Query: QueryResolvers = {
  countries,
  countryById,
}

export const resolvers: Resolvers = { Query }
