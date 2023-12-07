import { ReactNode } from 'react'

export interface Menu {
  id: number
  label: string
  icon?: ReactNode
  onClick: () => void
  disabled?: boolean
}
