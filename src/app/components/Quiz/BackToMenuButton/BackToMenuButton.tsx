import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export const BackToMenuButton = () => {
  const router = useRouter()
  const toMenu = () => router.push('/menu')
  return <Button onClick={toMenu}>Back to Menu</Button>
}
