import { ThemeProvider, CssBaseline } from '@mui/material'
import { THEME } from '@/shared/ui'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './Store'

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={THEME} defaultMode='light'>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
