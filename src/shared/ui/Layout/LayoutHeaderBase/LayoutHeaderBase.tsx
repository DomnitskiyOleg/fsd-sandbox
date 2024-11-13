import Stack from '@mui/material/Stack'

import { Box, Container } from '@mui/material'
import NavbarBreadcrumbs from '../BreadCrumbs/BreadCrumbs'
import styles from './styles'
import { ReactNode } from 'react'

type Props = {
  switchThemeSlot?: ReactNode
  switchLanguageSlot?: ReactNode
}

export function LayoutHeaderBase(props: Props) {
  return (
    <Box sx={styles.container}>
      <Container maxWidth='xl'>
        <Stack direction='row' sx={styles.content}>
          <NavbarBreadcrumbs />
          <Stack direction='row' alignItems='center' gap={5}>
            {props.switchLanguageSlot}
            {props.switchThemeSlot}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
