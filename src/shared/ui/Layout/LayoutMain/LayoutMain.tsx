import { Box, Stack } from '@mui/material'
import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './styles'

type Props = {
  headerSlot?: ReactNode
  mobileDrawer?: ReactNode
  sideMenuSlot?: ReactNode
}

export function LayoutMain(props: Props) {
  return (
    <Box sx={styles.container}>
      {props.headerSlot}
      {props.sideMenuSlot}
      {/* <AppNavbar /> */}

      <Box component='main' sx={styles.main}>
        <Stack sx={styles.content}>
          {/* Main content */}
          <Outlet />
          {/* Main content */}
        </Stack>
      </Box>
    </Box>
  )
}
