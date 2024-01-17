import { create } from 'zustand'

import { LocalQuestion } from '@/app/models/question/type'
import { LocalCountry } from '@/app/models/country/type'
import { middlewares } from '../middlewares'

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
  resetAll: () => void
}

type QuizStore = QuizState & QuizAction

const defaultQuizState: QuizState = {
  length: null,
  questions: [],
  answers: [],
  corrects: [],
}

export const useQuizStore = create<QuizStore>()(
  middlewares(set => ({
    ...defaultQuizState,
    setLength: num => set(() => ({ length: num })),
    setQuestions: (questions: LocalQuestion[]) => set(() => ({ questions })),
    addAnswer: (answer: LocalCountry) => set(prev => ({ answers: [...prev.answers, answer] })),
    addCorrent: (correct: LocalCountry) => set(prev => ({ corrects: [...prev.corrects, correct] })),
    resetQuestions: () => set(() => ({ questions: [] })),
    resetAll: () => set(() => ({ ...defaultQuizState })),
  })),
)
