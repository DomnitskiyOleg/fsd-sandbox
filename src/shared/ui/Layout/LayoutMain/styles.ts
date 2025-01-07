import { DRAWER_WIDTH } from '@/shared/config'
import { Styles } from '@/shared/types'

const styles: Styles = {
    container: { display: 'flex' },
    main: {
        display: 'flex',
        flexGrow: 1,
        pl: { xs: 0, md: `${DRAWER_WIDTH}px` },
        pb: 2,
        minHeight: '100dvh',
    },
    content: {
        flexGrow: 1,
        alignItems: 'center',
        mt: { xs: 9, md: 10 },
    },
}

export default styles
