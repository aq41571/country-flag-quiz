import { StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const middlewares = <T>(f: StateCreator<T>, name: string) =>
  devtools(persist(f, { name, skipHydration: process.env.NODE_ENV === 'development' }))
