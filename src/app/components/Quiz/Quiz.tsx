'use client'

import { useQuizStore } from '@/app/state'
import { Alert, Button, CircularProgress, Fade, LinearProgress, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { FC } from 'react'
import { OptionCard } from './OptionCard/OptionCard'
import { Result } from './Result/Result'
import { useQuestions } from './hooks'

export const Quiz: FC = () => {
  const { step, length, questions, answers, resetAll } = useQuizStore()
  const { isLoading, error } = useQuestions()
  const reset = () => resetAll()

  return (
    <Fade in={step === 3} unmountOnExit mountOnEnter exit={false} timeout={500}>
      <Grid2 container alignItems="center" justifyContent="center" direction="column">
        <Grid2 sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <LinearProgress
            variant="determinate"
            value={(answers.length / length) * 100}
            sx={{ height: 4, width: 'calc(100% - 60px)' }}
          />
          <Grid2 textAlign="right">
            <Typography>{`${answers.length} / ${length}`}</Typography>
          </Grid2>
        </Grid2>
        {isLoading && <CircularProgress />}
        {error && <Alert severity="error">{error && error.message}</Alert>}
        {questions.map(({ question, options }, i) => (
          <Fade key={question} in={answers.length === i} unmountOnExit mountOnEnter exit={false} timeout={500}>
            <Grid2 width="100%" textAlign="center">
              <Typography fontSize={36}>{question}</Typography>
              <Grid2 container xs={12} spacing={2}>
                {options.map(({ id, name }) => (
                  <Grid2 key={id} xs={12}>
                    <OptionCard id={id} question={question} option={name} />
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          </Fade>
        ))}
        <Result />
        <Grid2 mt={2}>
          <Button onClick={reset}>Back to Menu</Button>
        </Grid2>
      </Grid2>
    </Fade>
  )
}
