import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

function MenuLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link component={RouterLink} to={to} color='white' underline='none'>
      {children}
    </Link>
  )
}

export default MenuLink
