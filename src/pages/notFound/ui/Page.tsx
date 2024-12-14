import { Box, Button, Container, Typography } from '@mui/material'

import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone'
import { useTranslation } from 'react-i18next'
import { NavLink } from '@/shared/ui'

export function NotFoundPage() {
  const { t } = useTranslation()
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
          sx={{
            mt: 2,
          }}
          variant='h4'
          textAlign='center'
        >
          {t('pages.notFound.title')}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            mb: 2,
          }}
          textAlign='center'
        >
          {t('pages.notFound.subtitle')}
        </Typography>
        <NavLink to='/'>
          <Button variant='outlined'>{t('pages.notFound.backButton')}</Button>
        </NavLink>
      </Box>
    </Container>
  )
}
