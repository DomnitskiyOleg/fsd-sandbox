import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'

import Stack from '@mui/material/Stack'
import MuiToolbar from '@mui/material/Toolbar'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

import MenuButton from '../MenuButton'
import { BrandLogo } from '../../../BrandLogo/BrandLogo'
import { styles } from './styles'
import { ReactNode } from 'react'

const Toolbar = styled(MuiToolbar)()

type Props = {
  switchThemeSlot?: ReactNode
  switchLanguageSlot?: ReactNode
  sideMenuMobileSlot?: ReactNode
  toggleDrawer?: (newState: boolean) => () => void
}

export function AppNavbarBase(props: Props) {
  return (
    <AppBar position='fixed' sx={styles.appBar}>
      <Toolbar variant='regular'>
        <Stack direction='row' sx={styles.toolbar}>
          <Stack
            direction='row'
            spacing={1}
            sx={{ justifyContent: 'center', mr: 'auto' }}
          >
            <BrandLogo />
          </Stack>
          {props.switchLanguageSlot}
          {props.switchThemeSlot}
          <MenuButton
            aria-label='menu'
            onClick={props.toggleDrawer && props.toggleDrawer(true)}
          >
            <MenuRoundedIcon />
          </MenuButton>
          {props.sideMenuMobileSlot}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
