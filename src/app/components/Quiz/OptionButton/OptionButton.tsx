'use client'

import { Button, Card, Typography } from '@mui/material'
import { FC } from 'react'
import { useCheckAnswer } from './hooks'

interface OptionButtonProps {
  id: number
  question: string
  option: string
}

export const OptionButton: FC<OptionButtonProps> = ({ id, question, option }) => {
  const [checkAnswer, { loading }] = useCheckAnswer(question, id)

  return (
    <Button onClick={checkAnswer} component={Card} disabled={loading} fullWidth>
      <Typography sx={{ py: 2, color: '#fff' }}>{option}</Typography>
    </Button>
  )
}
