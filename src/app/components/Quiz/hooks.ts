import { useQuizStore } from '@/app/globalState/quiz/state'
import { useCheckAnswerUsecase, useQuestionsUsecase } from '@/app/usecases/quiz/usecase'
import { ApolloError } from '@apollo/client'
import { useEffect } from 'react'

interface UseQuestionsReturn {
  isLoading: boolean
  error: ApolloError | undefined
}

export const useQuestions = (): UseQuestionsReturn => {
  const { length, setQuestions, resetQuestions } = useQuizStore()
  const { questions, loading, error: err } = useQuestionsUsecase(length)
  const { loading: isLoadingfetchCheckAnswer, error: errorFetchCheckAnswer } = useCheckAnswerUsecase()
  useEffect(() => {
    setQuestions(questions)
    return () => resetQuestions()
  }, [questions, resetQuestions, setQuestions])
  const isLoading = loading || isLoadingfetchCheckAnswer
  const error = err || errorFetchCheckAnswer
  return { isLoading, error }
}
