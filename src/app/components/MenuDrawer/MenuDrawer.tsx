'use client'

import MenuIcon from '@mui/icons-material/Menu'

import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

interface MenuOption {
  label: string
  href: string
}

export const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const menuOptions: MenuOption[] = [
    { label: 'Home', href: '/' },
    { label: 'Quiz', href: '/quiz' },
  ]
  return (
    <>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggle}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={toggle}>
        <List>
          {menuOptions.map(({ label, href }) => (
            <ListItem key={href} sx={{ '> a': { textDecoration: 'none', color: 'inherit' } }} onClick={toggle}>
              <Link href={href}>
                <ListItemButton>
                  <ListItemIcon>
                    <MenuIcon />
                  </ListItemIcon>
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
