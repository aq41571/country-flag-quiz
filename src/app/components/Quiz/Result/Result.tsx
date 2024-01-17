import { useQuizStore } from '@/app/globalState/quiz/state'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { FC } from 'react'

export const Result: FC = () => {
  const { answers, corrects } = useQuizStore()
  const results = answers.map((answer, i) => ({
    answer,
    correct: corrects[i],
    isCorrect: answer.id === corrects[i].id,
  }))
  const correctLength = results.filter(({ isCorrect }) => isCorrect).length
  const incorrectLength = results.length - correctLength
  return (
    <Grid2 sx={{ width: '100%' }}>
      <Grid2 textAlign="center" my={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" fontWeight={700} mr={2}>
          ✅ {correctLength}
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          ❌ {incorrectLength}
        </Typography>
      </Grid2>
      <TableContainer component={Paper} sx={{ overflowX: 'auto', width: '100%', my: 2 }}>
        <Toolbar>
          <Typography variant="h5" fontWeight={700}>
            Result
          </Typography>
        </Toolbar>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow sx={{ '> th': { p: 1 } }}>
              <TableCell align="right" width={60}>
                No.
              </TableCell>
              <TableCell align="center" width={100}>
                Result
              </TableCell>
              <TableCell width={200}>Correct</TableCell>
              <TableCell>Your Answer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map(({ answer, correct, isCorrect }, i) => (
              <TableRow key={correct.id} sx={{ '> td': { p: 1 } }}>
                <TableCell align="right">{i + 1}</TableCell>
                <TableCell align="center">{isCorrect ? '✅' : '❌'}</TableCell>
                <TableCell>{`${correct.emoji} ${correct.name}`}</TableCell>
                <TableCell>{`${answer.emoji} ${answer.name}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid2>
  )
}
