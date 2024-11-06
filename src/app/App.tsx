import { ThemeProvider, CssBaseline } from '@mui/material'
import ThemeTest from './ThemeTest'
import theme from '@/shared/ui/theme'

function App() {
  return (
    <ThemeProvider theme={theme} defaultMode='light'>
      <CssBaseline />
      <ThemeTest />
    </ThemeProvider>
  )
}

export default App
