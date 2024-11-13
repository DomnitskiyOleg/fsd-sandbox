import { DRAWER_WIDTH, DRAWER_BORDER_WIDTH } from '@/shared/config'
import { Styles } from '@/shared/types'
import { drawerClasses } from '@mui/material'


const styles: Styles = {
  drawer: (theme) => ({
    position: 'fixed',
    pl: 1,
    // calculate
    pr: theme.spacing(1.5),
    top: 8,
    bottom: 8,
    width: DRAWER_WIDTH,
    display: { xs: 'none', md: 'block' },
    [`& .${drawerClasses.paper}`]: {
      position: 'static',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 2,
      border: `${DRAWER_BORDER_WIDTH}px solid`,
      borderColor: theme.palette.grey[600],
    },
  }),
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    pl: 2,
  },
  avatarContainer: {
    p: 2,
    gap: 1,
    alignItems: 'center',
    borderTop: '1px solid',
    borderColor: 'divider',
  },
  avatar: (theme) => ({
    width: '2.5rem',
    height: '2.5rem',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[600],
  }),
}

export default styles
