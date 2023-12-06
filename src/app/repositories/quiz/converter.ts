import { LocalOption, LocalQuestion } from '@/app/models/question/type'
import { CheckAnswerQuery, Exact, OptionFragment, QuestionFragment, QuestionsQuery } from '@/generated/graphql'
import { QueryResult } from '@apollo/client'
import { convertCountry } from '../country/converter'

const convertOption = ({ id, name }: OptionFragment): LocalOption => ({ id, name })

const convertQuestion = ({ question, options }: QuestionFragment): LocalQuestion => ({
  question: question.emoji,
  options: (options || []).map(convertOption),
})

export const convertQuestions = (data: QuestionsQuery | undefined): LocalQuestion[] =>
  (data?.questions || []).map(convertQuestion)

export const convertState = (
  response: void | QueryResult<CheckAnswerQuery, Exact<{ quizEmoji: string; answerId: number }>>,
) => {
  if (response && response.data) {
    const { correct: cor, answer: ans } = response.data.checkAnswer
    const [correct, answer] = [cor, ans].map(convertCountry)
    return { answer, correct }
  }
  throw new Error('response is undefined')
}
