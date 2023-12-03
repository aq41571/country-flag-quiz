'use client'

import { useEffect } from 'react'
import { TitleWithMenu } from '../components/TitleWithMenu/TitleWithMenu'
import { useMenu } from '../quiz/hooks'
import { useQuizStore } from '../state'

const MenuPage = () => {
  const { mainMenu } = useMenu()
  const { resetAll } = useQuizStore()
  useEffect(() => {
    resetAll()
  }, [resetAll])

  return (
    <main>
      <TitleWithMenu show title="Main Menu" menu={mainMenu} />
    </main>
  )
}

export default MenuPage
