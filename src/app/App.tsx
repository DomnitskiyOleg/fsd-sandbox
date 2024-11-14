import { ThemeProvider, CssBaseline } from '@mui/material'
import { THEME } from '@/shared/ui'
import { RouterProvider } from 'react-router-dom'
import router from './Router'

function App() {
  return (
    <ThemeProvider theme={THEME} defaultMode='light'>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
