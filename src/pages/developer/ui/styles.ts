import { Styles } from '@/shared/types'
import { grey } from '@mui/material/colors'

const styles: Styles = {
    container: {
        borderRadius: 3,
        overflow: 'hidden',
        p: 2,
        borderLeftWidth: 20,
        borderBottomWidth: 35,
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        borderBottomColor: 'primary.main',
        borderLeftColor: 'primary.main',
    },
    column: (theme) => ({
        borderRight: `1px solid ${
            theme.palette.mode === 'dark' ? grey[700] : grey[300]
        }`,
    }),
    block: (theme) => ({
        borderBottom: `1px solid ${
            theme.palette.mode === 'dark' ? grey[700] : grey[300]
        }`,
    }),
}

export default styles
