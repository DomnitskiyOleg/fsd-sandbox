import Stack from '@mui/material/Stack'
import NavbarBreadcrumbs from './NavbarBreadcrumbs'
import { Box, Container } from '@mui/material'

export default function Header() {
  return (
    <Box
      sx={(theme) => ({
        display: { xs: 'none', md: 'block' },
        position: 'fixed',
        left: 276,
        top: 8,
        right: 0,
        zIndex: 999,
        borderRadius: 2,
        border: '2px solid',
        borderColor: theme.palette.grey[600],
        backgroundColor: theme.palette.secondary.main,
      })}
    >
      <Container maxWidth='xl'>
        <Stack
          direction='row'
          sx={{
            display: { xs: 'none', md: 'flex' },
            height: 60,
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
          }}
        >
          <NavbarBreadcrumbs />
        </Stack>
      </Container>
    </Box>
  )
}
