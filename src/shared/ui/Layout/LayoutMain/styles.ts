import { Styles } from '@/shared/types'

const styles: Styles = {
  container: { display: 'flex' },
  main: {
    flexGrow: 1,
    pl: { xs: 0, md: '280px' },
    minHeight: '100dvh',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    mt: { xs: 9, md: 10 },
  },
}

export default styles
