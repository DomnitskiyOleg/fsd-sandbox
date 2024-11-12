import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import ThemeTest from '../ThemeTest'
import Header from './components/Header'
import SideMenu from './components/SideMenu'

import AppNavbar from './components/AppNavbar'
import CardAlert from './components/CardAlert'

export default function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppNavbar />
      <SideMenu />
      <Header />
      {/* Main content */}
      <Box
        component='main'
        sx={() => ({
          flexGrow: 1,
          pl: { xs: 0, md: '280px' },
          minHeight: '100dvh',
        })}
      >
        <Stack
          sx={{
            flexGrow: 1,
            alignItems: 'center',
            mt: { xs: 9, md: 10 },
          }}
        >
          <Outlet />
          <ThemeTest />
          <CardAlert />
          <CardAlert />
        </Stack>
      </Box>
      {/* Main content */}
    </Box>
  )
}
