import { CheckAnswerResult, Country, Option, Question } from '@/generated/graphql'
import { filterOutSelectedCountries, getCountries, getCountryByEmoji, getCountryById } from '../boundary/boundaries'
import { shuffle } from './utils'

const expectCorrect = (countries: Country[], correct: Country): Country[] => countries.filter(c => c.id !== correct.id)

const createOptions = (correct: Country): Option[] => {
  const shuffledCountries = shuffle(getCountries())
  const rawOptions = expectCorrect(shuffledCountries, correct).slice(0, 3)
  return shuffle(rawOptions.concat(correct)).map(({ id, name }) => ({ id, name }))
}
const createQuestion = (correct: Country): Question => {
  const options = createOptions(correct)
  return { question: { emoji: correct.emoji }, options }
}

export const createQuestions = (length: number, done: number[]): Question[] => {
  const countriesExceptDone = filterOutSelectedCountries(done)
  const correctCountries = shuffle(countriesExceptDone).slice(0, length)
  const questions = correctCountries.map(correct => createQuestion(correct))
  return questions
}

export const getAnswerWithCorrect = (emoji: string, id: number): CheckAnswerResult => {
  const answer = getCountryById(id)
  const correct = getCountryByEmoji(emoji)
  return { correct, answer }
}
