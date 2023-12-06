import { useCountriesRepository } from '@/app/repositories/country/repository'

export const useCountriesUsecase = () => {
  const countries = useCountriesRepository()
  return countries
}
