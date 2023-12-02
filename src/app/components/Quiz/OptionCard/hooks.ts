import { Answer, Correct, useQuizStore } from '@/app/state'
import { CheckAnswerQuery, Exact, useCheckAnswerLazyQuery } from '@/generated/graphql'
import { QueryResult } from '@apollo/client'
import { useCallback } from 'react'

const convertToState = (
  response: void | QueryResult<CheckAnswerQuery, Exact<{ quizEmoji: string; answerId: number }>>,
) => {
  if (response && response.data) {
    const { correct, answer: ans } = response.data.checkAnswer
    const { id, name, emoji: correctEmoji } = correct
    const answer: Answer = { id: ans.id, name: ans.name, emoji: ans.emoji }
    const localCorrect: Correct = { id, name, emoji: correctEmoji }
    return { answer, localCorrect }
  }
  throw new Error('response is undefined')
}

export const useCheckAnswer = () => {
  const [fetchCheckAnswer] = useCheckAnswerLazyQuery()
  const { addAnswer, addCorrent } = useQuizStore()
  const checkAnswer = useCallback(
    async (emoji: string, optionId: number) => {
      const response = await fetchCheckAnswer({ variables: { quizEmoji: emoji, answerId: optionId } }).catch(() => {
        throw new Error('fetchCheckAnswer error')
      })
      const { answer, localCorrect } = convertToState(response)
      addAnswer(answer)
      addCorrent(localCorrect)
    },
    [addAnswer, addCorrent, fetchCheckAnswer],
  )
  return checkAnswer
}
