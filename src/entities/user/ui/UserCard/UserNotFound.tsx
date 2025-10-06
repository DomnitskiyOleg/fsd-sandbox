import { Box, Button, Container, Typography } from '@mui/material'

import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone'
import { useTranslation } from 'react-i18next'
import { NavLink } from '@/shared/ui'

export function UserNotFound() {
    const { t: commonT } = useTranslation('common')
    const { t } = useTranslation('user-details')
    return (
        <Container
            maxWidth='xl'
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box flex={1} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <NewReleasesTwoToneIcon
                    sx={(theme) => ({ color: theme.palette.primary.main, fontSize: 200 })}
                />
                <Typography
                    textTransform='uppercase'
                    sx={{
                        mt: 2,
                    }}
                    variant='h4'
                    textAlign='center'
                >
                    {t('UserCard.notFound')}
                </Typography>
                <Typography
                    sx={{
                        mt: 2,
                        mb: 2,
                    }}
                    textAlign='center'
                >
                    {commonT('pages.notFound.subtitle')}
                </Typography>
                <NavLink to='/users'>
                    <Button variant='outlined'>{t('UserCard.backButton')}</Button>
                </NavLink>
            </Box>
        </Container>
    )
}
