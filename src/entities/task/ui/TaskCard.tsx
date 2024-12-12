import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material'

import dayjs from 'dayjs'

import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { DEVELOPER_CONTACTS } from '@/shared/config'

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

import { useTranslation } from 'react-i18next'
import styles from './styles'
import { ITask } from '../model/types'
import { ReactNode } from 'react'

type Props = {
  task: ITask
  deleteTaskSlot?: ReactNode
  changeStatusSlot?: ReactNode
}

export function TaskCard(props: Props) {
  const { t } = useTranslation('tasks')
  const { task, deleteTaskSlot, changeStatusSlot } = props

  return (
    <Card elevation={10} sx={{ ...styles.card }}>
      <CardContent sx={styles.content}>
        <Stack
          gap={1}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          mb={1}
        >
          <Typography variant='h6' fontSize={16} sx={styles.title}>
            {task.name}
          </Typography>
          {task.completeBy && (
            <Stack flexDirection='row' alignItems='center' gap={1}>
              <NotificationsOutlinedIcon fontSize='small' />
              <Typography variant='body2' component='div'>
                {dayjs(task.completeBy).format('DD/MM/YYYY')}
              </Typography>
            </Stack>
          )}
        </Stack>
        <Divider />
        <Stack flexGrow={1} gap={2} py={2}>
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
            fontStyle={task.description ? 'normal' : 'italic'}
          >
            {task.description ? task.description : t('TaskCard.noDescription')}
          </Typography>
        </Stack>
        <Stack gap={1} alignItems='center' mb={1} flexDirection='row'>
          <AutoAwesomeMosaicOutlinedIcon color='primary' />
          <Typography textTransform='uppercase' variant='body2' component='div'>
            {task.status}
          </Typography>
        </Stack>
        <Divider />
      </CardContent>
      <CardActions sx={styles.actions}>
        {changeStatusSlot}
        {deleteTaskSlot}
      </CardActions>
    </Card>
  )
}
