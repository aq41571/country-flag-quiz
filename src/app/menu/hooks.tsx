import GradeIcon from '@mui/icons-material/Grade'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import SettingsIcon from '@mui/icons-material/Settings'

import QuizIcon from '@mui/icons-material/Quiz'
import { useRouter } from 'next/navigation'

import { Menu } from '../quiz/types'

export const useMainMenu = () => {
  const router = useRouter()

  const mainMenu: Menu[] = [
    {
      id: 1,
      label: 'Start Quiz',
      icon: <QuizIcon />,
      onClick: () => router.push('/quiz'),
    },
    { id: 2, label: 'View Score', icon: <GradeIcon />, disabled: true, onClick: () => ({}) },
    { id: 3, label: 'View Flag List', icon: <MenuBookIcon />, disabled: false, onClick: () => router.push('/flags') },
    { id: 4, label: 'Settings', icon: <SettingsIcon />, disabled: true, onClick: () => () => ({}) },
  ]

  return mainMenu
}
