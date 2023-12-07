'use client'

import { TitleWithMenu } from '../components/TitleWithMenu/TitleWithMenu'
import { useMainMenu } from './hooks'

const MenuPage = () => {
  const mainMenu = useMainMenu()

  return (
    <main>
      <TitleWithMenu show title="Main Menu" menu={mainMenu} />
    </main>
  )
}

export default MenuPage
