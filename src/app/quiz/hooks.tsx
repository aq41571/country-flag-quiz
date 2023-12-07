import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import { useRouter } from 'next/navigation'

import { useQuizStore } from '../globalState/quiz/state'
import { Menu } from './types'

export const useQuestionLengthMenu = () => {
  const { setLength } = useQuizStore()
  const router = useRouter()

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
      icon: <ArrowBackIosIcon />,
      onClick: () => router.push('/menu'),
    },
  ]

  return questionLengthMenu
}
