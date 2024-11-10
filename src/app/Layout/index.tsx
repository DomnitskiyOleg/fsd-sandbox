import { Box, Paper, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import ThemeTest from '../ThemeTest'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import { green } from '@mui/material/colors'
import AppNavbar from './components/AppNavbar'

export default function Layout() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component='main'
          sx={(theme) => ({
            flexGrow: 1,
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 1,
              mt: { xs: 8, md: 0 },
              backgroundColor: green[100],
            }}
          >
            <Header />
            <Outlet />
          </Stack>
        </Box>
        {/* Main content */}
      </Box>
    </>
  )
}
