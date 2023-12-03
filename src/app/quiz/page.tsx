'use client'

import { Quiz } from '../components/Quiz/Quiz'
import { useQuizStore } from '../state'
import { TitleWithMenu } from '../components/TitleWithMenu/TitleWithMenu'
import { useMenu } from './hooks'

const QuizPage = () => {
  const { length } = useQuizStore()
  const { questionLengthMenu } = useMenu()

  return (
    <main>
      <TitleWithMenu show={length === null} title="Choose Questions" menu={questionLengthMenu} />
      {length !== null && <Quiz />}
    </main>
  )
}

export default QuizPage
