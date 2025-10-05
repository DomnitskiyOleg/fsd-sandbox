import { ThemeProvider, CssBaseline } from '@mui/material'
import { THEME } from '@/shared/ui'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store'
import { SnackbarProvider } from './providers'

function App() {
    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={THEME} defaultMode='light'>
                <SnackbarProvider>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </SnackbarProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App
