import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '@/shared/ui/theme'
import { RouterProvider } from 'react-router-dom'
import router from './Router'

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode='dark'>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
