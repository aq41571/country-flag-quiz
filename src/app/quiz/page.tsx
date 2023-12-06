'use client'

import { Quiz } from '../components/Quiz/Quiz'
import { TitleWithMenu } from '../components/TitleWithMenu/TitleWithMenu'
import { useQuizStore } from '../globalState/quiz/state'
import { useQuestionLengthMenu } from './hooks'

const QuizPage = () => {
  const { length } = useQuizStore()
  const questionLengthMenu = useQuestionLengthMenu()

  return (
    <main>
      <TitleWithMenu show={length === null} title="Choose Questions" menu={questionLengthMenu} />
      <Quiz />
    </main>
  )
}

export default QuizPage
