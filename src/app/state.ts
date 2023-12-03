import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { LocalCountry } from './models/country/type'
import { LocalQuestion } from './models/question/type'

const middlewares = <T>(f: StateCreator<T>, name: string) =>
  devtools(persist(f, { name, skipHydration: process.env.NODE_ENV === 'development' }))

interface QuizState {
  length: number | null
  questions: LocalQuestion[]
  answers: LocalCountry[]
  corrects: LocalCountry[]
}

interface QuizAction {
  setLength: (num: number | null) => void
  setQuestions: (questions: LocalQuestion[]) => void
  addAnswer: (answer: LocalCountry) => void
  addCorrent: (correct: LocalCountry) => void
  resetQuestions: () => void
  resetAnswers: () => void
  resetAll: () => void
}

type QuizStore = QuizState & QuizAction

export const useQuizStore = create<QuizStore>()(
  middlewares(
    set => ({
      length: null,
      questions: [],
      answers: [],
      corrects: [],
      setLength: num => set(() => ({ length: num })),
      setQuestions: (questions: LocalQuestion[]) => set(() => ({ questions })),
      addAnswer: (answer: LocalCountry) => set(prev => ({ answers: [...prev.answers, answer] })),
      addCorrent: (correct: LocalCountry) => set(prev => ({ corrects: [...prev.corrects, correct] })),
      resetQuestions: () => set(() => ({ questions: [] })),
      resetAnswers: () => set(() => ({ answers: [] })),
      resetAll: () => set(() => ({ length: null, questions: [], answers: [], corrects: [] })),
    }),
    'quizStore',
  ),
)
