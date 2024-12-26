import { Box, Button, Container, Typography } from '@mui/material'

import WebhookIcon from '@mui/icons-material/Webhook'
import { useTranslation } from 'react-i18next'
import { NavLink } from '@/shared/ui'
import { useLocation } from 'react-router-dom'

export function DevelopingPage() {
    const { t } = useTranslation()
    const { pathname } = useLocation()

    return (
        <Container
            maxWidth='xl'
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                flex={1}
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <WebhookIcon
                    sx={(theme) => ({
                        color: theme.palette.primary.main,
                        fontSize: 200,
                    })}
                />
                <Typography
                    textTransform='uppercase'
                    sx={{
                        mt: 2,
                    }}
                    variant='h4'
                    textAlign='center'
                >
                    {t('pages.developing.title')}
                </Typography>
                <Typography
                    sx={{
                        mt: 2,
                        mb: 2,
                    }}
                    textAlign='center'
                >
                    {t('pages.developing.subtitle')}
                </Typography>
                {pathname !== '/' && (
                    <NavLink to='/'>
                        <Button variant='outlined'>
                            {t('pages.developing.backButton')}
                        </Button>
                    </NavLink>
                )}
            </Box>
        </Container>
    )
}
