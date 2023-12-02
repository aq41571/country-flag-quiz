import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const middlewares = <T>(f: StateCreator<T>, name: string) =>
  devtools(persist(f, { name, skipHydration: process.env.NODE_ENV === 'development' }))

interface LocalCountry {
  id: number
  name: string
  emoji: string
}

interface LocalOption {
  id: number
  name: string
}

export interface LocalQuestion {
  question: string
  options: LocalOption[]
}

export type Correct = LocalCountry
export type Answer = LocalCountry

interface QuizState {
  step: number
  length: number
  questions: LocalQuestion[]
  answers: Answer[]
  corrects: Correct[]
}

interface QuizAction {
  setStep: (by: number) => void
  setLength: (num: number) => void
  setQuestions: (questions: LocalQuestion[]) => void
  addAnswer: (answer: Answer) => void
  addCorrent: (correct: Correct) => void
  resetQuestions: () => void
  resetAnswers: () => void
  resetAll: () => void
}

type QuizStore = QuizState & QuizAction

export const useQuizStore = create<QuizStore>()(
  middlewares(
    set => ({
      step: 1,
      length: 1,
      questions: [],
      answers: [],
      corrects: [],
      setStep: num => set(() => ({ step: num })),
      setLength: num => set(() => ({ length: num })),
      setQuestions: (questions: LocalQuestion[]) => set(() => ({ questions })),
      addAnswer: (answer: Answer) => set(prev => ({ answers: [...prev.answers, answer] })),
      addCorrent: (correct: Correct) => set(prev => ({ corrects: [...prev.corrects, correct] })),
      resetQuestions: () => set(() => ({ questions: [] })),
      resetAnswers: () => set(() => ({ answers: [] })),
      resetAll: () => set(() => ({ step: 1, length: 1, questions: [], answers: [], corrects: [] })),
    }),
    'stepStore',
  ),
)
