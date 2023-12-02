'use client'

import { Menu } from '@/app/quiz/types'
import InboxIcon from '@mui/icons-material/Inbox'

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { FC } from 'react'

interface QuizMenuProps {
  menu: Menu[]
}

export const QuizMenu: FC<QuizMenuProps> = ({ menu }) => (
  <List>
    {menu.map(({ id, onClick, disabled, label }) => (
      <ListItem key={id}>
        <ListItemButton component={Paper} onClick={onClick} disabled={disabled}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
)
