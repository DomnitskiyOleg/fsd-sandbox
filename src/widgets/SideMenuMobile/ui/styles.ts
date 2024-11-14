import { Styles } from '@/shared/types'
import { drawerClasses } from '@mui/material'

const styles: Styles = {
  drawer: {
    zIndex: (theme) => theme.zIndex.drawer + 1,
    [`& .${drawerClasses.paper}`]: {
      backgroundImage: 'none',
      backgroundColor: (theme) => theme.palette.secondary.main,
    },
  },
  container: {
    maxWidth: '65dvw',
    height: '100%',
  },
  header: { gap: 1 },
  avatarWrapper: {
    gap: 2,
    alignItems: 'center',
    flexGrow: 1,
    height: '56px',
    px: 2,
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
