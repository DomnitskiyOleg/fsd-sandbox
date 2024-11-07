import { Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import ThemeTest from '../ThemeTest'

export default function Layout() {
  return (
    <Paper sx={{ width: 300, height: 300 }} elevation={3}>
      <ThemeTest />
      <Outlet />
    </Paper>
  )
}
