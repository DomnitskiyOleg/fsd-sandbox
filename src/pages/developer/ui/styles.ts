import { Styles } from '@/shared/types'
import { grey } from '@mui/material/colors'

const styles: Styles = {
    header: (theme) => ({
        p: 2,
        borderRadius: 0,
        my: 5,
    }),
    download: {
        position: 'sticky',
        top: 90,
        marginLeft: 'auto',
        right: { xs: 20, sm: 24 },
    },
    container: {
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
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
