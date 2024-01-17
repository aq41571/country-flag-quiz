'use client'

import { BackToMenuButton } from '@/app/components/Quiz/BackToMenuButton/BackToMenuButton'
import { Result } from '@/app/components/Quiz/Result/Result'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const ResultPage = () => (
  <main>
    <Grid2 container alignItems="center" justifyContent="center" direction="column">
      <Result />
      <Grid2 mt={2}>
        <BackToMenuButton />
      </Grid2>
    </Grid2>
  </main>
)

export default ResultPage
