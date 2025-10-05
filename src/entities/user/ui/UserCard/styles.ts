import { Styles } from '@/shared/types'
import { grey } from '@mui/material/colors'

export const styles: Styles = {
    avatar: (theme) => ({
        width: '10rem',
        height: '10rem',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.grey[600],
    }),
    table: (theme) => ({
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.mode === 'dark' ? grey[700] : grey[400],
    }),
    leftCol: (theme) => ({
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.mode === 'dark' ? grey[700] : grey[400],
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: theme.palette.mode === 'dark' ? grey[700] : grey[400],
    }),
    rightCol: (theme) => ({
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.mode === 'dark' ? grey[700] : grey[400],
    }),
    row: (theme) => ({
        '&:last-child td, &:last-child th': {
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: theme.palette.mode === 'dark' ? grey[700] : grey[200],
        },
    }),
}
