'use client'

import Button from '@mui/material/Button'

import { useCountriesQuery } from '@/generated/graphql'
import { Countries } from './components/Countries'

const Home = () => {
  const { data } = useCountriesQuery()
  return (
    <main>
      <Button variant="contained">Hello world</Button>
      <Countries countries={data?.countries ?? []} />
    </main>
  )
}

export default Home
