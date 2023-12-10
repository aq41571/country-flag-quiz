import { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

export const middlewares = <T>(f: StateCreator<T>) => devtools(f)
