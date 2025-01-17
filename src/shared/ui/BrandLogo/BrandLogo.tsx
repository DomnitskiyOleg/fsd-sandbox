import { Stack, Box, Typography } from '@mui/material'
import ExtensionIcon from '@mui/icons-material/Extension'
import styles from './styles'
import { NavLink } from '../NavLink/NavLink'

export function BrandLogo() {
  return (
    <NavLink to='/'>
      <Stack direction='row' alignItems='center' spacing={{ xs: 1, md: 2 }}>
        <Box sx={styles.logo}>
          <ExtensionIcon color='inherit' sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Typography
          fontSize={{ xs: '1.2rem', md: '1.6rem' }}
          fontWeight={600}
          textTransform='uppercase'
        >
          sandbox
        </Typography>
      </Stack>
    </NavLink>
  )
}
