import { useRouter } from 'next/navigation'
import { useQuizStore } from '../state'
import { Menu } from './types'

export const useMenu = () => {
  const { setLength } = useQuizStore()
  const router = useRouter()

  const mainMenu: Menu[] = [
    {
      id: 1,
      label: 'Start Quiz',
      onClick: () => router.push('/quiz'),
    },
    { id: 2, label: 'View Score', disabled: true, onClick: () => ({}) },
    { id: 3, label: 'View Flag List', disabled: true, onClick: () => ({}) },
    { id: 4, label: 'Settings', disabled: true, onClick: () => () => ({}) },
  ]

  const questionLengthMenu: Menu[] = [
    {
      id: 1,
      label: '1 Question',
      onClick: () => setLength(1),
    },
    {
      id: 2,
      label: '5 Questions',
      onClick: () => setLength(5),
    },
    {
      id: 3,
      label: '10 Questions',
      onClick: () => setLength(10),
    },
    {
      id: 4,
      label: 'Back',
      onClick: () => router.push('/menu'),
    },
  ]

  return { mainMenu, questionLengthMenu }
}
