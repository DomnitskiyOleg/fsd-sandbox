import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material'

import { useSelector } from 'react-redux'

import dayjs from 'dayjs'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { selectTasks } from '@/app/Store/slices/tasksSlice'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

import { DEVELOPER_CONTACTS } from '@/shared/config'
import { green } from '@mui/material/colors'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

export function TasksKanban() {
  const tasks = useSelector(selectTasks)

  return (
    <Container sx={{ mt: 4 }} maxWidth='xl'>
      <Box display='flex' mt={5} gap={1} flexDirection='row'>
        {tasks.map((v) => (
          <Card
            elevation={10}
            sx={{
              p: 1,
              borderLeftWidth: 10,
              borderLeftStyle: 'solid',
              borderColor: green[200],
            }}
            key={v.id}
          >
            <CardContent>
              <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
              >
                <Typography gutterBottom variant='h6' component='div'>
                  {v.name}
                </Typography>

                {v.completeBefore && (
                  <Stack flexDirection='row' alignItems='center' gap={1}>
                    <NotificationsOutlinedIcon fontSize='small' />
                    <Typography gutterBottom variant='body2' mb={0}>
                      {dayjs(v.completeBefore).format('DD/MM/YYYY')}
                    </Typography>
                  </Stack>
                )}
              </Stack>
              <Divider />
              <Stack gap={2} py={2}>
                <Stack gap={1} alignItems='center' flexDirection='row'>
                  <PersonOutlineOutlinedIcon color='primary' />
                  <Link underline='none' href='mailto:domnitskiy.oleg@mail.ru'>
                    <Typography
                      variant='body2'
                      mb={0}
                      sx={{ color: 'text.secondary' }}
                      component='div'
                    >
                      {DEVELOPER_CONTACTS.email}
                    </Typography>
                  </Link>
                </Stack>
                <Typography
                  variant='body2'
                  sx={{ color: 'text.secondary' }}
                  lineHeight={1.6}
                  component='div'
                >
                  {v.description}
                </Typography>
              </Stack>

              <Divider />
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 1,
              }}
            >
              <Button
                fullWidth
                variant='outlined'
                endIcon={<RadioButtonUncheckedIcon />}
                size='small'
              >
                Завершить
              </Button>
              <Button
                fullWidth
                variant='contained'
                endIcon={<DeleteOutlineOutlinedIcon />}
                size='small'
              >
                Удалить
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  )
}
