interface LocalOption {
  id: number
  name: string
}

export interface LocalQuestion {
  question: string
  options: LocalOption[]
}
