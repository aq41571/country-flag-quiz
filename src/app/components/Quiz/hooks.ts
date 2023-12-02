import { LocalQuestion, useQuizStore } from '@/app/state'
import { QuestionsQuery, useCheckAnswerLazyQuery, useQuestionsQuery } from '@/generated/graphql'
import { ApolloError } from '@apollo/client'
import { useEffect } from 'react'

const convertToQuestions = (data: QuestionsQuery | undefined): LocalQuestion[] =>
  (data?.questions || []).map(({ question, options }) => ({
    question: question.emoji,
    options: (options || []).map(({ id, name }) => ({ id, name })),
  }))

interface UseQuestionsReturn {
  isLoading: boolean
  error: ApolloError | undefined
}

export const useQuestions = (): UseQuestionsReturn => {
  const { step, length, setQuestions, resetAnswers, resetQuestions } = useQuizStore()
  const {
    data,
    loading,
    error: err,
  } = useQuestionsQuery({
    variables: { limit: length },
    skip: step !== 3,
    fetchPolicy: 'network-only',
  })
  useEffect(() => {
    setQuestions(convertToQuestions(data))
    return () => {
      resetAnswers()
      resetQuestions()
    }
  }, [data, resetAnswers, resetQuestions, setQuestions])
  const [, { loading: isLoadingfetchCheckAnswer, error: errorFetchCheckAnswer }] = useCheckAnswerLazyQuery()
  const isLoading = loading || isLoadingfetchCheckAnswer
  const error = err || errorFetchCheckAnswer
  return { isLoading, error }
}
