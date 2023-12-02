export interface Menu {
  id: number
  label: string
  onClick: () => void
  disabled?: boolean
}
