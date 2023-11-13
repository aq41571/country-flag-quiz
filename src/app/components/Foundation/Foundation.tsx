import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { ReactNode } from 'react'

export const Foundation = ({ children }: { children: ReactNode }) => (
  <Grid2 container sx={{ height: 'calc(100svh - 56px)', p: 2 }}>
    <Grid2 xs={12} sx={{ height: '100%', overflow: 'scroll' }}>
      {children}
    </Grid2>
  </Grid2>
)
