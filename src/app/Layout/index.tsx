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
      <SideMenu />
      <AppNavbar />
      <Header />
      {/* Main content */}
      <Box
        component='main'
        sx={(theme) => ({
          display: 'flex',
          flexGrow: 1,
          minHeight: '100dvh',
        })}
      >
        <Stack
          sx={{
            paddingTop: { xs: 1, md: 9 },
            flexGrow: 1,
            alignItems: 'center',
            mt: { xs: 8, md: 0 },
            overflow: 'auto',
          }}
        >
          <Outlet />
          <ThemeTest />
          <CardAlert />

          <ThemeTest />
          <ThemeTest />
          <ThemeTest />
          <ThemeTest />
          <ThemeTest />
          <ThemeTest />
        </Stack>
      </Box>
      {/* Main content */}
    </Box>
  )
}
