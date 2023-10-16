import { CountryFragment } from '@/generated/graphql'
import { FC } from 'react'

interface CountriesProps {
  countries: CountryFragment[]
}

export const Countries: FC<CountriesProps> = ({ countries }) => (
  <div>
    <h1>Countries</h1>
    {countries.map(({ id, emoji, name }) => (
      <div key={id}>
        <p>
          {emoji}: {name}
        </p>
      </div>
    ))}
  </div>
)
