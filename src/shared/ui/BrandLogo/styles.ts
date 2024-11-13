import { Styles } from '@/shared/types'

const styles: Styles = {
  logo: (theme) => ({
    width: '2.5rem',
    height: '2.5rem',
    bgcolor: 'black',
    borderRadius: '999px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundImage: `linear-gradient(135deg, #004400 0%, ${theme.palette.primary.main} 80%)`,
    color: 'hsla(210, 100%, 95%, 0.9)',
    border: '1px solid',
    borderColor: '#259254',
    boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
  }),
}

export default styles
