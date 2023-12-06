import { useQuizStore } from '@/app/globalState/quiz/state'
import { useUtilsStore } from '@/app/globalState/utils/state'
import { useCheckAnswerUsecase } from '@/app/usecases/quiz/usecase'
import { ApolloError } from '@apollo/client'
import { useCallback } from 'react'

type UseCheckAnswerReturn = [() => void, { loading: boolean; error: ApolloError | undefined }]

export const useCheckAnswer = (question: string, id: number): UseCheckAnswerReturn => {
  const { checkAnswer: check, loading, error } = useCheckAnswerUsecase()
  const { setSnackbar } = useUtilsStore()
  const { addAnswer, addCorrent } = useQuizStore()
  const fetchCheckAnswer = useCallback(
    async (emoji: string, optionId: number) => {
      const { answer, correct } = await check(emoji, optionId)
      addAnswer(answer)
      addCorrent(correct)
    },
    [addAnswer, addCorrent, check],
  )
  const checkAnswer = useCallback(() => {
    fetchCheckAnswer(question, id).catch((e: Error) => {
      setSnackbar(e.message, 'error')
      throw e
    })
  }, [fetchCheckAnswer, id, question, setSnackbar])

  return [checkAnswer, { loading, error }]
}
