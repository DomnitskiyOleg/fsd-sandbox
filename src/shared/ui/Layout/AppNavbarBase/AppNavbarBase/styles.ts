import { getCssFunction, Styles } from '@/shared/types'
import { tabsClasses } from '@mui/material'

export const getCssStyles: getCssFunction = () => ({
    width: '100%',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: '12px',
    flexShrink: 0,
    [`& ${tabsClasses.flexContainer}`]: {
        gap: '8px',
        p: '8px',
        pb: 0,
    },
})

export const styles: Styles = {
    appBar: (theme) => ({
        display: { xs: 'auto', md: 'none' },
        boxShadow: 0,
        bgcolor: `${theme.palette.secondary.main} !important`,
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 'var(--template-frame-height, 0px)',
    }),
    toolbar: {
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        gap: 1,
    },
}
