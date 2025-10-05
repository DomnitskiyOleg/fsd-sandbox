import { ReactNode } from 'react'
import {
  SnackbarProvider as DefaultSnackbarProvider,
  SnackbarKey,
  useSnackbar,
} from 'notistack'
import { IconButton } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'

const CloseButton = (key: SnackbarKey): ReactNode => {
  const { closeSnackbar } = useSnackbar()
  return (
    <IconButton onClick={() => closeSnackbar(key)}>
      <CloseIcon fontSize='small' />
    </IconButton>
  )
}

export function SnackbarProvider({ children }: { children: ReactNode }) {
  return (
    <DefaultSnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      action={CloseButton}
    >
      {children}
    </DefaultSnackbarProvider>
  )
}
