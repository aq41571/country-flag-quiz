'use client'

import { useQuizStore } from '@/app/globalState/quiz/state'
import { Fade, LinearProgress, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { BackToMenuButton } from './BackToMenuButton/BackToMenuButton'
import { OptionButton } from './OptionButton/OptionButton'
import { useQuestions } from './hooks'

export const Quiz: FC = () => {
  const { length, questions, answers } = useQuizStore()
  useQuestions()
  const router = useRouter()
  useEffect(() => {
    if (answers.length === length) router.push('/quiz/result')
  }, [answers, length, router])
  const questionLength = questions.length
  const answerLength = answers.length

  return (
    <Fade in={length !== null} unmountOnExit mountOnEnter exit={false} timeout={500}>
      <Grid2 container alignItems="center" justifyContent="center" direction="column">
        <Grid2 sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <LinearProgress
            variant="determinate"
            value={(answerLength / questionLength) * 100}
            sx={{ height: 4, width: 'calc(100% - 60px)' }}
          />
          <Grid2 textAlign="right">
            <Typography>{`${answerLength} / ${questionLength}`}</Typography>
          </Grid2>
        </Grid2>
        {questions.map(({ question, options }, i) => (
          <Fade key={question} in={answerLength === i} unmountOnExit mountOnEnter exit={false} timeout={500}>
            <Grid2 width="100%" textAlign="center">
              <Typography fontSize={36}>{question}</Typography>
              <Grid2 container xs={12} spacing={2}>
                {options.map(({ id, name }) => (
                  <Grid2 key={id} xs={12}>
                    <OptionButton id={id} question={question} option={name} />
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          </Fade>
        ))}
        <Grid2 mt={2}>
          <BackToMenuButton />
        </Grid2>
      </Grid2>
    </Fade>
  )
}
