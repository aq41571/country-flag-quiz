import { QueryResolvers, Resolvers } from '@/generated/graphql'
import { fetchCorrect, fetchCountryByEmoji, fetchCountryById, listCountries, listQuestions } from '../useCase/useCases'

const countries: QueryResolvers['countries'] = () => listCountries()
const countryById: QueryResolvers['countryById'] = (_, { id }) => fetchCountryById(id)
const countryByEmoji: QueryResolvers['countryByEmoji'] = (_, { emoji }) => fetchCountryByEmoji(emoji)
const questions: QueryResolvers['questions'] = (_, { limit, doneIds }) => listQuestions(limit, doneIds)
const checkAnswer: QueryResolvers['checkAnswer'] = (_, { quizEmoji, answerId }) => fetchCorrect(quizEmoji, answerId)

const Query: QueryResolvers = {
  countries,
  countryById,
  countryByEmoji,
  questions,
  checkAnswer,
}

export const resolvers: Resolvers = { Query }
