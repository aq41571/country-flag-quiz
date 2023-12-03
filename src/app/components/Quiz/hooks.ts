import { useQuizStore } from '@/app/state'
import { useCheckAnswerUsecase, useQuestionsUsecase } from '@/app/usecases/quiz/usecase'
import { ApolloError } from '@apollo/client'
import { useEffect } from 'react'

interface UseQuestionsReturn {
  isLoading: boolean
  error: ApolloError | undefined
}

export const useQuestions = (): UseQuestionsReturn => {
  const { length, setQuestions, resetAnswers, resetQuestions } = useQuizStore()
  const { questions, loading, error: err } = useQuestionsUsecase(length ?? 1)
  const { loading: isLoadingfetchCheckAnswer, error: errorFetchCheckAnswer } = useCheckAnswerUsecase()
  useEffect(() => {
    setQuestions(questions)
    return () => {
      resetAnswers()
      resetQuestions()
    }
  }, [questions, resetAnswers, resetQuestions, setQuestions])
  const isLoading = loading || isLoadingfetchCheckAnswer
  const error = err || errorFetchCheckAnswer
  return { isLoading, error }
}
