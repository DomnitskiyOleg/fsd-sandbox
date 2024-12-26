import { Styles } from '@/shared/types'
import { colors } from '@mui/material'

const styles: Styles = {
    card: (theme) => ({
        p: 2,
        position: { xs: 'relative', lg: 'sticky' },
        top: { xs: 0, lg: 82 },
        backgroundColor: {
            xs:
                theme.palette.mode === 'dark'
                    ? colors.grey[700]
                    : colors.orange[100],
            lg: theme.palette.background.default,
        },
    }),
    form: {
        display: 'flex',
        flexDirection: {
            xs: 'row',
            lg: 'column',
        },
    },
}

export default styles
