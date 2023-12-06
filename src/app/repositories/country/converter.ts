import { LocalCountry } from '@/app/models/country/type'
import { CountriesQuery, CountryFragment } from '@/generated/graphql'

export const convertCountry = ({ id, name, emoji }: CountryFragment): LocalCountry => ({
  id,
  name,
  emoji,
})

export const convertCountries = (data: CountriesQuery | undefined): LocalCountry[] =>
  (data?.countries || []).map(convertCountry)
