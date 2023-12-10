import { create } from 'zustand'
import { AlertColor } from '@mui/material'

import { middlewares } from '../middlewares'

interface SnackbarState {
  open: boolean
  message: string
  severity: AlertColor
}

interface UtilsState {
  loading: boolean
  snackbar: SnackbarState
}

interface UtilsAction {
  setLoading: (bool: boolean) => void
  setSnackbar: (message: string, severity: AlertColor, open?: boolean) => void
  hideSnackbar: () => void
}

type UtilsStore = UtilsState & UtilsAction

export const useUtilsStore = create<UtilsStore>()(
  middlewares(set => ({
    loading: false,
    error: null,
    snackbar: {
      open: false,
      message: '',
      severity: 'success' as SnackbarState['severity'],
    },
    setLoading: bool => set(() => ({ loading: bool })),
    setSnackbar: (message, severity, open = true) => set(() => ({ snackbar: { open, message, severity } })),
    hideSnackbar: () => set(() => ({ snackbar: { open: false, message: '', severity: 'success' } })),
  })),
)
