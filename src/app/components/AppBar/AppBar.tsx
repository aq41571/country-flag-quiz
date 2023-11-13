import Link from 'next/link'

import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material'
import { MenuDrawer } from '../MenuDrawer/MenuDrawer'

export const AppBar = () => (
  <MuiAppBar position="sticky" enableColorOnDark color="primary">
    <Toolbar>
      <MenuDrawer />
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, '> a': { textDecoration: 'none', color: 'inherit' } }}
      >
        <Link href="/">Country Flag Quiz</Link>
      </Typography>
    </Toolbar>
  </MuiAppBar>
)
