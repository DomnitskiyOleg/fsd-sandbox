import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import { useLocation } from 'react-router-dom'
import { NavLink } from '../..'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.primary.light,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}))

export default function NavbarBreadcrumbs() {
  const { pathname } = useLocation()

  const breadcrumbs = pathname.split('/')
  return (
    <StyledBreadcrumbs
      aria-label='breadcrumb'
      separator={<NavigateNextRoundedIcon fontSize='small' />}
    >
      <NavLink to='/'>
        <Typography fontWeight={500}  variant='body1'>
          Sandbox
        </Typography>
      </NavLink>
      {breadcrumbs
        .filter((v) => v.length)
        .map((v, i) => (
          <NavLink key={`${v}-${i}`} to={`/${v}`}>
            <Typography
              textTransform='capitalize'
              fontWeight={600}
              variant='body1'
              color='white'
            >
              {v}
            </Typography>
          </NavLink>
        ))}
    </StyledBreadcrumbs>
  )
}
