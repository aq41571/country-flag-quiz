import { LocalCountry } from '@/app/models/country/type'
import { LocalQuestion } from '@/app/models/question/type'
import { CheckAnswerQuery, Exact, QuestionsQuery } from '@/generated/graphql'
import { QueryResult } from '@apollo/client'

export const convertQuestions = (data: QuestionsQuery | undefined): LocalQuestion[] =>
  (data?.questions || []).map(({ question, options }) => ({
    question: question.emoji,
    options: (options || []).map(({ id, name }) => ({ id, name })),
  }))

export const convertState = (
  response: void | QueryResult<CheckAnswerQuery, Exact<{ quizEmoji: string; answerId: number }>>,
) => {
  if (response && response.data) {
    const { correct: cor, answer: ans } = response.data.checkAnswer
    const answer: LocalCountry = { id: ans.id, name: ans.name, emoji: ans.emoji }
    const correct: LocalCountry = { id: cor.id, name: cor.name, emoji: cor.emoji }
    return { answer, correct }
  }
  throw new Error('response is undefined')
}
