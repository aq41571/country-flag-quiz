import { getCountries, getCountryById } from './boundaries'

export const listCountries = () => getCountries()
export const fetchCountryById = (id: number) => getCountryById(id)
