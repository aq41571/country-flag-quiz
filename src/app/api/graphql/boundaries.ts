import { Country } from '@/generated/graphql'
import sample from './data/countries.json'
import { SmapleData } from './data/types'

const {
  data: { countries },
}: SmapleData = sample

export const getCountries = (): Country[] => countries

export const getCountryById = (id: number): Country | null => countries.find(country => country.id === id) ?? null
