import { useSetFetchState } from '@/app/hooks'
import { CountriesQuery, CountriesQueryVariables, useCountriesQuery } from '@/generated/graphql'
import { QueryHookOptions } from '@apollo/client'
import { useMemo } from 'react'
import { convertCountries } from './converter'

type CountriesOptions = QueryHookOptions<CountriesQuery, CountriesQueryVariables>

export const useCountriesRepository = (options?: CountriesOptions) => {
  const countriesQuery = useCountriesQuery(options)
  const countries = useMemo(() => convertCountries(countriesQuery.data), [countriesQuery.data])
  useSetFetchState(countriesQuery.loading, countriesQuery.error)
  return { ...countriesQuery, countries }
}
