import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TelegramIcon from '@mui/icons-material/Telegram'
import { useTranslation } from 'react-i18next'

export function ContactCard() {
  const { t } = useTranslation()
  return (
    <Card elevation={14} sx={{ m: 1, p: 1.5 }}>
      <CardContent>
        <TelegramIcon color='primary' fontSize='medium' />
        <Typography mb={1} sx={{ fontWeight: 600 }}>
          {t('components.ContactCard.title')}
        </Typography>
        <Typography
          lineHeight={1.5}
          variant='body2'
          sx={{ mb: 2, color: 'text.secondary' }}
        >
          {t('components.ContactCard.subtitle')}
        </Typography>
        <Button
          component='a'
          href='https://t.me/domnitskiy_oleg'
          target='_blank'
          variant='contained'
          size='small'
          fullWidth
        >
          {t('components.ContactCard.button')}
        </Button>
      </CardContent>
    </Card>
  )
}
