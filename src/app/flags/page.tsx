'use client'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useCountriesUsecase } from '../usecases/country/usecase'

const Flags = () => {
  const { countries, loading } = useCountriesUsecase()
  if (loading) return null
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Flag</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map(({ id, name, emoji }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{emoji}</TableCell>
              <TableCell>{name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Flags
