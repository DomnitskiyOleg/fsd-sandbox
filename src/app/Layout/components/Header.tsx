import Stack from '@mui/material/Stack'
import NavbarBreadcrumbs from './NavbarBreadcrumbs'
import { Box, Container, Divider, Paper } from '@mui/material'

export default function Header() {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        pt: 1,
        left: 280,
        right: 0,
        position: 'fixed',
        zIndex: 999,
      }}
    >
      <Paper
        sx={(theme) => ({
          backgroundColor: '#CD5434',
          borderRadius: 2,
          border: '1px solid',
          borderColor: theme.palette.grey[700],
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
      </Paper>
    </Box>
  )
}
