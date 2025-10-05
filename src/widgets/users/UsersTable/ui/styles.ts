import { Styles } from '@/shared/types/styles'
import { grey } from '@mui/material/colors'
import { CSSProperties } from 'react'

export const styles: Styles = {
    container: (theme) => ({
        borderColor: theme.palette.mode === 'dark' ? grey[700] : grey[400],
        borderWidth: 1,
        borderStyle: 'solid',
    }),
    header: (theme) => ({
        p: 1,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: 1,
        borderBottomColor: theme.palette.mode === 'dark' ? grey[700] : grey[300],
        borderBottomWidth: 0.5,
    }),
    table: {
        border: 'none',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
    },
}

export const tableStyles: CSSProperties = {
    border: 'none',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
}
