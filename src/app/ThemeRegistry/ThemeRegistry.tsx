'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { createTheme } from '@mui/material'

import { blue, grey } from '@mui/material/colors'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'
import { roboto } from './font'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: grey[900], paper: grey[800] },
    primary: { main: blue[500] },
    secondary: { main: blue.A400 },
  },
  typography: { fontFamily: roboto.style.fontFamily },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && { backgroundColor: blue[700] }),
        }),
      },
    },
  },
})

export const ThemeRegistry = ({ children }: { children: React.ReactNode }) => (
  <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </NextAppDirEmotionCacheProvider>
)
