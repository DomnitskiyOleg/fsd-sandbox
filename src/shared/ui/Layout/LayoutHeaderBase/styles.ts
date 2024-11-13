import { Styles } from '@/shared/types'

const styles: Styles = {
  container: (theme) => ({
    display: { xs: 'none', md: 'block' },
    position: 'fixed',
    left: 276,
    top: 8,
    right: 0,
    zIndex: 999,
    borderRadius: 2,
    border: '2px solid',
    borderColor: theme.palette.grey[600],
    backgroundColor: theme.palette.secondary.main,
  }),
  content: {
    display: { xs: 'none', md: 'flex' },
    height: 60,
    alignItems: { xs: 'flex-start', md: 'center' },
    justifyContent: 'space-between',
  },
}
export default styles
