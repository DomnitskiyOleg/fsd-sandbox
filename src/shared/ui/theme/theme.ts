import { createTheme } from '@mui/material/styles'

export const THEME = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data',
    },
    colorSchemes: {
        dark: {
            palette: {
                text: {
                    primary: '#FFF',
                },
                background: {
                    default: '#2E282A',
                    paper: '#2E282A',
                },
                primary: {
                    light: '#98DAB5',
                    main: '#69BF8E',
                    dark: '#43A46D',
                    contrastText: '#FFF',
                },
                secondary: {
                    light: '#F9A68E',
                    main: '#F56840',
                    dark: '#E9461C',
                    contrastText: '#000',
                },
            },
        },
        light: {
            palette: {
                background: {
                    default: '#FFFAF0',
                    paper: '#FFFAF0',
                },
                text: {
                    primary: '#030101',
                },
                primary: {
                    light: '#69BF8E',
                    main: '#0DA560',
                    dark: '#00844A',
                    contrastText: '#FFF',
                },
                secondary: {
                    light: '#FF7961',
                    main: '#B24B2E',
                    dark: '#902F13',
                    contrastText: '#000',
                },
            },
        },
    },
    typography: {
        h3: {
            fontSize: '3rem',
            '@media (max-width:800px)': {
                fontSize: '2rem',
            },
            '@media (max-width:400px)': {
                fontSize: '1.8rem',
            },
        },
        h4: {
            fontSize: '2.125rem',
            '@media (max-width:800px)': {
                fontSize: '1.8rem',
            },
            '@media (max-width:400px)': {
                fontSize: '1.5rem',
            },
        },
    },
})
