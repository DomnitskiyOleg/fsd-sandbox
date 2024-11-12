import { createTheme } from '@mui/material/styles'

export default createTheme({
  colorSchemes: {
    dark: {
      palette: {
        text: {
          primary: '#ffff',
        },
        background: {
          default: '#2E282A',
          paper: '#2E282A',
        },
        primary: {
          light: '#69BF8E',
          main: '#259254',
          dark: '#015D29',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    },
    light: {
      palette: {
        text: {
          primary: '#030101',
        },
        primary: {
          light: '#69BF8E',
          main: '#259254',
          dark: '#015D29',
          contrastText: '#fff',
        },
      },
    },
  },
})
