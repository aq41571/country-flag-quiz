'use client'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import ListIcon from '@mui/icons-material/List'
import QuizIcon from '@mui/icons-material/Quiz'

import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

interface MenuOption {
  label: string
  href: string
  icon: ReactNode
}

export const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const menuOptions: MenuOption[] = [
    { label: 'Home', href: '/', icon: <HomeIcon /> },
    { label: 'Main Menu', href: '/menu', icon: <ListIcon /> },
    { label: 'Quiz', href: '/quiz', icon: <QuizIcon /> },
  ]
  return (
    <>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggle}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={toggle}>
        <List>
          {menuOptions.map(({ label, href, icon }) => (
            <ListItem key={href} sx={{ '> a': { textDecoration: 'none', color: 'inherit' } }} onClick={toggle}>
              <Link href={href}>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
