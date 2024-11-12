import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import { useLocation } from 'react-router-dom'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.primary.main,
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
      <Typography fontWeight={400} color='white' variant='body1'>
        Sanbox
      </Typography>
      {breadcrumbs
        .filter((v) => v.length)
        .map((v, i) => (
          <Typography
            textTransform='capitalize'
            key={`${v}-${i}`}
            fontWeight={600}
            variant='body1'
            color='white'
          >
            {v}
          </Typography>
        ))}
    </StyledBreadcrumbs>
  )
}
