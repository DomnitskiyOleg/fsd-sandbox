import { DRAWER_WIDTH } from '@/shared/config'
import { Styles } from '@/shared/types'

const styles: Styles = {
  container: { display: 'block', width: '100%' },
  main: {
    display: 'block',
    width: '100%',
    height: '100dvh',
  },
  content: {
    pl: { xs: 0, md: `${DRAWER_WIDTH}px` },
    pb: 2,
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    pt: { xs: 9, md: 10 },
  },
}

export default styles
