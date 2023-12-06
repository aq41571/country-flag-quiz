'use client'

import CloseIcon from '@mui/icons-material/Close'
import { Alert, LinearProgress, Snackbar } from '@mui/material'
import IconButton from '@mui/material/IconButton'

import { ReactNode } from 'react'
import { Foundation } from './components/Foundation/Foundation'
import { useUtilsStore } from './globalState/utils/state'

const Template = ({ children }: { children: ReactNode }) => {
  const { loading, snackbar } = useUtilsStore()
  const { hideSnackbar } = useUtilsStore()
  return (
    <>
      <LinearProgress sx={{ visibility: loading ? 'visible' : 'hidden', height: 4 }} />
      <Foundation>
        {children}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          sx={{ display: snackbar.open ? 'inherit' : 'none' }}
          onClose={hideSnackbar}
          action={
            <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={hideSnackbar}>
              <CloseIcon />
            </IconButton>
          }
        >
          <Alert elevation={6} variant="filled" severity={snackbar.severity} onClose={hideSnackbar}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Foundation>
    </>
  )
}

// ts-prune-ignore-next
export default Template
