import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import { useLocation } from 'react-router-dom'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: 'grey',
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}))

export default function NavbarBreadcrumbs() {
  const location = useLocation()
  console.log(location)
  return (
    <StyledBreadcrumbs
      aria-label='breadcrumb'
      separator={<NavigateNextRoundedIcon fontSize='small' />}
    >
      <Typography variant='body1'>Dashboard</Typography>
      <Typography
        variant='body1'
        sx={{ color: 'text.primary', fontWeight: 600 }}
      >
        Home
      </Typography>
    </StyledBreadcrumbs>
  )
}