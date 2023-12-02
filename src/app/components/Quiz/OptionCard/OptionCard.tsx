'use client'

import { Button, Card, CardContent, Typography } from '@mui/material'
import { FC } from 'react'
import { useCheckAnswer } from './hooks'

interface OptionCardProps {
  id: number
  question: string
  option: string
}

export const OptionCard: FC<OptionCardProps> = ({ id, question, option }) => {
  const checkAnswer = useCheckAnswer()
  return (
    <Card
      onClick={() => {
        // TODO: add Snackbar
        // eslint-disable-next-line no-console
        checkAnswer(question, id).catch(console.error)
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
