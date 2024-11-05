import { useState } from 'react'
import reactLogo from '@/shared/ui/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AcUnit } from '@mui/icons-material'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

const theme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme} defaultMode='light'>
      <div>
        <AcUnit fontSize='large' />
        <div>
          <a href='https://vite.dev' target='_blank' rel='noreferrer'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </ThemeProvider>
  )
}

export default App
