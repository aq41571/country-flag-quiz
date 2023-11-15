import { Button, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Link from 'next/link'

const Home = () => (
  <main>
    <Grid2 container justifyContent="center">
      <Grid2 container m={2} maxWidth={800}>
        <Grid2 xs={12}>
          <Typography fontSize={120} textAlign="center">
            🌎
          </Typography>
        </Grid2>
        <Grid2 xs={12} my={4} container justifyContent="center">
          <Typography variant="h3" component="h1" fontWeight={700}>
            Welcome to the Flag Quiz!
          </Typography>
        </Grid2>
        <Grid2 xs={12} container justifyContent="center">
          <Typography>
            Welcome to the Flag Quiz! Test your knowledge of world flags in this fun quiz. Identify countries and their
            flags - it&rsquo;s time for flag-tastic fun!
          </Typography>
        </Grid2>
        <Grid2 xs={12} my={4} container justifyContent="center">
          <Link href="/quiz" passHref style={{ width: '100%', maxWidth: 600 }}>
            <Button variant="contained" fullWidth>
              Dive In!
            </Button>
          </Link>
        </Grid2>
      </Grid2>
    </Grid2>
  </main>
)

export default Home
