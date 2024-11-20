import { Box, Button, Container, Typography } from '@mui/material'

import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone'
import { useTranslation } from 'react-i18next'
import { NavLink } from '@/shared/ui'

export function NotFoundPage() {
  const { t } = useTranslation('not-found')
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
        <NewReleasesTwoToneIcon
          sx={(theme) => ({ color: theme.palette.primary.main, fontSize: 200 })}
        />
        <Typography
          textTransform='uppercase'
          sx={(theme) => ({
            mt: theme.spacing(2),
          })}
          variant='h3'
          textAlign='center'
        >
          {t('title')}
        </Typography>
        <Typography
          sx={(theme) => ({
            mt: theme.spacing(2),
            mb: theme.spacing(2),
          })}
          textAlign='center'
        >
          {t('subtitle')}
        </Typography>
        <NavLink to='/'>
          <Button variant='outlined'>{t('backButton')}</Button>
        </NavLink>
      </Box>
    </Container>
  )
}
