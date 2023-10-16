'use client'

import { useCountriesQuery } from '@/generated/graphql'
import { Countries } from './components/Countries'

const Home = () => {
  const { data } = useCountriesQuery()
  return (
    <main>
      <Countries countries={data?.countries ?? []} />
    </main>
  )
}

export default Home
