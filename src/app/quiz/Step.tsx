'use client'

import { Fade, Typography } from '@mui/material'

import { FC } from 'react'

import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { QuizMenu } from '../components/QuizMenu/QuizMenu'
import { Menu } from './types'

interface StepProps {
  current: number
  stepNo: number
  title: string
  menu: Menu[]
}

export const Step: FC<StepProps> = ({ current, stepNo, title, menu }) => (
  <Fade in={stepNo === current} unmountOnExit mountOnEnter exit={false} timeout={500}>
    <Grid2>
      <Typography variant="h5" component="h1" fontWeight={700}>
        {title}
      </Typography>
      <QuizMenu menu={menu} />
    </Grid2>
  </Fade>
)
