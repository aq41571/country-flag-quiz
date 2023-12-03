import {
  CheckAnswerQuery,
  Exact,
  QuestionsQuery,
  QuestionsQueryVariables,
  useCheckAnswerLazyQuery,
  useQuestionsQuery,
} from '@/generated/graphql'
import { LazyQueryExecFunction, QueryHookOptions } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { convertQuestions, convertState } from './converter'

export type QuestionsOptions = QueryHookOptions<QuestionsQuery, QuestionsQueryVariables>

type QuestionsRepositoryReturn = {
  questions: ReturnType<typeof convertQuestions>
} & ReturnType<typeof useQuestionsQuery>

export const useQuestionsRepository = (options: QuestionsOptions): QuestionsRepositoryReturn => {
  const questionsQuery = useQuestionsQuery(options)
  const questions = useMemo(() => convertQuestions(questionsQuery.data), [questionsQuery.data])
  return { ...questionsQuery, questions }
}

const fetchCheckAnswer = async (
  checkAnswer: LazyQueryExecFunction<CheckAnswerQuery, Exact<{ quizEmoji: string; answerId: number }>>,
  emoji: string,
  optionId: number,
) => {
  const response = await checkAnswer({ variables: { quizEmoji: emoji, answerId: optionId } }).catch(() => {
    throw new Error('fetchCheckAnswer error')
  })
  const { answer, correct } = convertState(response)
  return { answer, correct }
}

export const useCheckAnswerRepository = () => {
  const [checkAnswerQuery, { loading, refetch, error }] = useCheckAnswerLazyQuery()
  const checkAnswer = useCallback(
    async (emoji: string, optionId: number) => fetchCheckAnswer(checkAnswerQuery, emoji, optionId),
    [checkAnswerQuery],
  )
  return { checkAnswerQuery, checkAnswer, loading, refetch, error }
}
