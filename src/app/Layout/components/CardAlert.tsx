import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TelegramIcon from '@mui/icons-material/Telegram'

export default function CardAlert() {
  return (
    <Card elevation={14} sx={{ m: 1.5, p: 1.5 }}>
      <CardContent>
        <TelegramIcon color='primary' fontSize='medium' />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          Задать вопрос
        </Typography>
        <Typography variant='body2' sx={{ mb: 2, color: 'text.secondary' }}>
          По любым вопросам и предложениям напишите разработчику в Telegram!
        </Typography>

        <Button
          component='a'
          href='https://t.me/domnitskiy_oleg'
          target='_blank'
          variant='contained'
          size='small'
          fullWidth
        >
          Связаться
        </Button>
      </CardContent>
    </Card>
  )
}
