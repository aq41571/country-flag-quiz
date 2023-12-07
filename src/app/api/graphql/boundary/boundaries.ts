import { Country } from '@/generated/graphql'
import sample from '../data/countries.json'
import { SmapleData } from '../data/types'

const {
  data: { countries },
}: SmapleData = sample

export const getCountries = (): Country[] => countries
export const getCountryIds = (): Country['id'][] => countries.map(c => c.id)
export const getCountryEmojis = (): Country['emoji'][] => countries.map(c => c.emoji)
export const filterOutSelectedCountries = (doneIds: number[]): Country[] =>
  countries.filter(c => !doneIds.includes(c.id))

export const getCountryById = (id: number): Country => {
  const result = countries.find(country => country.id === id) ?? null
  if (result === null) throw new Error('Invalid id')
  return result
}
export const getCountryByEmoji = (emoji: string): Country => {
  const result = countries.find(country => country.emoji === emoji) ?? null
  if (result === null) throw new Error('Invalid emoji')
  return result
}
