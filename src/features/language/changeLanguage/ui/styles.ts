import { Theme } from '@mui/material'
import { CSSObject } from '@mui/system'

const getCssStyles = ({ theme }: { theme: Theme }): CSSObject => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('/src/shared/ui/assets/flag-ru.svg')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.background.default,
        ...theme.applyStyles('dark', {
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.light,
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('/src/shared/ui/assets/flag-en.svg')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.primary.dark,
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.background.default,
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.background.default,
    }),
  },
})

export default getCssStyles
