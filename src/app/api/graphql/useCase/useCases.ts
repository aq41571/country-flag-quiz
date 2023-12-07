import { CheckAnswerResult, InputMaybe, Question } from '@/generated/graphql'
import {
  getCountries,
  getCountryByEmoji,
  getCountryById,
  getCountryEmojis,
  getCountryIds,
} from '../boundary/boundaries'
import { validateEmoji, validateId, validateLimit } from '../validator/validators'
import { createQuestions, getAnswerWithCorrect } from './questions'

export const listCountries = () => getCountries()
export const fetchCountryById = (id: number) => getCountryById(id)
export const fetchCountryByEmoji = (emoji: string) => getCountryByEmoji(emoji)
export const listQuestions = (limit: number, doneIds: InputMaybe<number[]> | undefined): Question[] => {
  const done = doneIds ?? []
  const validLength = validateLimit(limit, getCountryIds())
  return createQuestions(validLength, done)
}
export const fetchCorrect = (emoji: string, id: number): CheckAnswerResult => {
  const validEmoji = validateEmoji(emoji, getCountryEmojis())
  const validId = validateId(id, getCountryIds())
  return getAnswerWithCorrect(validEmoji, validId)
}
