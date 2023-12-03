'use client'

import { Quiz } from '../components/Quiz/Quiz'
import { TitleWithMenu } from '../components/TitleWithMenu/TitleWithMenu'
import { useQuizStore } from '../state'
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
