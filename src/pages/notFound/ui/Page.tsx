import { Box, Button, Container, Typography } from '@mui/material'
import NotFoundImage from './image.svg'

export function NotFoundPage() {
  return (
    <Container>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Box component='img' src={NotFoundImage} />
        <Typography variant='h3' textAlign='center'>
          Oops! We can&apos;t seem to find the page you&lsquo;re looking for.
        </Typography>
        <Typography textAlign='center'>125</Typography>
        <Button>123</Button>
      </Box>
    </Container>
  )
}
