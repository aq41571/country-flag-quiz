'use client'

import { useQuizStore } from '@/app/state'
import { useCheckAnswerUsecase } from '@/app/usecases/quiz/usecase'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { FC } from 'react'

interface OptionCardProps {
  id: number
  question: string
  option: string
}

export const OptionCard: FC<OptionCardProps> = ({ id, question, option }) => {
  const { checkAnswer } = useCheckAnswerUsecase()
  const { addAnswer, addCorrent } = useQuizStore()
  const check = async (emoji: string, optionId: number) => {
    const { answer, correct } = await checkAnswer(emoji, optionId)
    addAnswer(answer)
    addCorrent(correct)
  }
  return (
    <Card
      onClick={() => {
        // TODO: add Snackbar
        // eslint-disable-next-line no-console
        check(question, id).catch(console.error)
      }}
      component={Button}
      fullWidth
    >
      <CardContent>
        <Typography>{option}</Typography>
      </CardContent>
    </Card>
  )
}
