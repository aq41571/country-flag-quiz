'use client'

import { Fade, Typography } from '@mui/material'

import { FC } from 'react'

import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { MenuList } from '../MenuList/MenuList'
import { Menu } from '../../quiz/types'

interface TitleWithMenuProps {
  show: boolean
  title: string
  menu: Menu[]
}

export const TitleWithMenu: FC<TitleWithMenuProps> = ({ show, title, menu }) => (
  <Fade in={show} unmountOnExit mountOnEnter exit={false} timeout={500}>
    <Grid2>
      <Typography variant="h5" component="h1" fontWeight={700}>
        {title}
      </Typography>
      <MenuList menu={menu} />
    </Grid2>
  </Fade>
)
