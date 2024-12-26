import { Styles } from '@/shared/types'

const styles: Styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    p: 1,
    borderLeftWidth: 10,
    borderLeftStyle: 'solid',
  },
  content: { display: 'flex', flexDirection: 'column', flex: 1 },
  title: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}

export default styles
