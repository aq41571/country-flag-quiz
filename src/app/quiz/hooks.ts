import { useQuizStore } from '../state'
import { Menu } from './types'

export const useMenu = () => {
  const { setStep, setLength } = useQuizStore()
  const step1Menu: Menu[] = [
    { id: 1, label: 'Start Quiz', onClick: () => setStep(2) },
    { id: 2, label: 'View Score', disabled: true, onClick: () => setStep(4) },
    { id: 3, label: 'View Flag List', disabled: true, onClick: () => setStep(5) },
    { id: 4, label: 'Settings', disabled: true, onClick: () => setStep(6) },
  ]

  const step2Menu: Menu[] = [
    {
      id: 1,
      label: '1 Question',
      onClick: () => {
        setStep(3)
        setLength(1)
      },
    },
    {
      id: 2,
      label: '5 Questions',
      onClick: () => {
        setStep(3)
        setLength(5)
      },
    },
    {
      id: 3,
      label: '10 Questions',
      onClick: () => {
        setStep(3)
        setLength(10)
      },
    },
    { id: 4, label: 'Back', onClick: () => setStep(1) },
  ]

  return { step1Menu, step2Menu }
}
