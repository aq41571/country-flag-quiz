'use client'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Menu } from '@/app/quiz/types'

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { FC } from 'react'

interface QuizMenuProps {
  menu: Menu[]
}

export const MenuList: FC<QuizMenuProps> = ({ menu }) => (
  <List>
    {menu.map(({ id, onClick, disabled, label, icon }) => (
      <ListItem key={id}>
        <ListItemButton component={Paper} onClick={onClick} disabled={disabled}>
          <ListItemIcon sx={{ minWidth: 40 }}>{icon ?? <ArrowRightIcon />}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
)
