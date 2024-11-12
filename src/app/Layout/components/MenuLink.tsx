import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { ReactNode } from 'react'

type Props = {
  to: string
  children: ReactNode
}

export default function MenuLink(props: Props) {
  const { to, children } = props
  return (
    <Link component={RouterLink} to={to} color='white' underline='none'>
      {children}
    </Link>
  )
}
