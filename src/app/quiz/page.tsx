'use client'

import { useEffect } from 'react'

import { Quiz } from '../components/Quiz/Quiz'
import { useQuizStore } from '../state'
import { Step } from './Step'
import { useMenu } from './hooks'

const QuizPage = () => {
  const { step, setStep } = useQuizStore()
  const { step1Menu, step2Menu } = useMenu()
  useEffect(() => () => setStep(1), [setStep])
  return (
    <main>
      <Step current={step} stepNo={1} title="Menu" menu={step1Menu} />
      <Step current={step} stepNo={2} title="Choose Questions" menu={step2Menu} />
      {step === 3 && <Quiz step={step} />}
    </main>
  )
}

export default QuizPage
