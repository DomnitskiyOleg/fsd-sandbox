import {
    DRAWER_BORDER_WIDTH,
    DRAWER_WIDTH,
    DRAWER_HEADER_HEIGHT,
} from '@/shared/config'
import { Styles } from '@/shared/types'

const styles: Styles = {
    container: (theme) => ({
        display: { xs: 'none', md: 'block' },
        position: 'fixed',
        // to adjust  header container size and make standart 8px spacing between
        left: DRAWER_WIDTH - DRAWER_BORDER_WIDTH * 2,
        top: theme.spacing(1),
        right: 0,
        zIndex: 999,
        borderRadius: 2,
        borderWidth: DRAWER_BORDER_WIDTH,
        borderStyle: 'solid',
        borderColor: theme.palette.grey[600],
        backgroundColor: theme.palette.secondary.main,
    }),
    content: {
        display: { xs: 'none', md: 'flex' },
        height: DRAWER_HEADER_HEIGHT,
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
    },
}
export default styles
