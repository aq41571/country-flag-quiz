import { ApolloError } from '@apollo/client'
import { useEffect } from 'react'
import { useUtilsStore } from './globalState/utils/state'

const useSetLoading = (loading: boolean) => {
  const { setLoading } = useUtilsStore()
  useEffect(() => {
    if (loading) setLoading(loading)
    return () => setLoading(false)
  }, [setLoading, loading])
}

const useSetError = (error: ApolloError | undefined) => {
  const { setSnackbar, hideSnackbar } = useUtilsStore()
  useEffect(() => {
    if (error) {
      setSnackbar(error.message, 'error')
      throw error
    }
    return () => hideSnackbar()
  }, [error, setSnackbar, hideSnackbar])
}

export const useSetFetchState = (loading: boolean, error: ApolloError | undefined) => {
  useSetLoading(loading)
  useSetError(error)
}
