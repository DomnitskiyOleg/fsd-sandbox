import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TelegramIcon from '@mui/icons-material/Telegram'
import { useTranslation } from 'react-i18next'
export default function CardAlert() {
  const { i18n } = useTranslation()
  return (
    <Card variant='outlined' sx={{ m: 1.5, p: 1.5 }}>
      <CardContent>
        <TelegramIcon color='primary' fontSize='medium' />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Plan about to expire
        </Typography>
        <Typography variant='body2' sx={{ mb: 2, color: 'text.secondary' }}>
          Enjoy 10% off when renewing your plan today.
        </Typography>
        <Button
          onClick={() => {
            void i18n.changeLanguage('en')
          }}
          variant='contained'
          size='small'
          fullWidth
        >
          Get ENG
        </Button>
        <Button
          sx={{ marginTop: 1 }}
          onClick={() => {
            void i18n.changeLanguage('ru')
          }}
          variant='outlined'
          size='small'
          fullWidth
        >
          Get RU
        </Button>
      </CardContent>
    </Card>
  )
}
