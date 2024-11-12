import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  to: string
  children: ReactNode
  color?: string
}

export default function NavLink({ color = 'white', ...restProps }: Props) {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const { to, children } = restProps
  return (
    <Link
      component={RouterLink}
      lang={locale}
      to={to}
      color={color}
      underline='none'
    >
      {children}
    </Link>
  )
}
