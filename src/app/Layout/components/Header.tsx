import Stack from '@mui/material/Stack'
import NavbarBreadcrumbs from './NavbarBreadcrumbs'


export default function Header() {
  return (
    <Stack
      direction='row'
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
        backgroundColor: 'red',
      }}
      spacing={3}
    >
      <NavbarBreadcrumbs />
      <Stack direction='row' sx={{ gap: 1 }}>
    
      </Stack>
    </Stack>
  )
}
