import {
    Avatar,
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
import { useTranslation } from 'react-i18next'
import styles from './styles'
import { ITask } from '../model/types'
import { ReactNode } from 'react'
import { getTaskStatusColor } from '../lib/getTaskStatusColor'

type Props = {
    task: ITask
    deleteTaskSlot?: ReactNode
    changeStatusSlot?: ReactNode
}

export function TaskCard(props: Props) {
    const { t } = useTranslation('tasks')
    const { task, deleteTaskSlot, changeStatusSlot } = props

    return (
        <Card
            elevation={4}
            sx={{
                ...styles.card,
                borderColor: getTaskStatusColor(task.status),
            }}
            className='task-card'
        >
            <CardContent sx={styles.content}>
                <Stack
                    gap={1}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                    mb={1}
                >
                    <Stack gap={1} alignItems='center' flexDirection='row'>
                        <AutoAwesomeMosaicOutlinedIcon
                            sx={{ color: getTaskStatusColor(task.status) }}
                        />
                        <Typography
                            textTransform='uppercase'
                            variant='body1'
                            fontWeight={500}
                            component='div'
                            color={getTaskStatusColor(task.status)}
                        >
                            {t(`TaskCard.${task.status}`)}
                        </Typography>
                    </Stack>

                    {task.completeBy && (
                        <Stack flexDirection='row' alignItems='center' gap={1}>
                            <NotificationsOutlinedIcon
                                sx={{ color: getTaskStatusColor(task.status) }}
                            />
                            <Typography
                                variant='body2'
                                color={getTaskStatusColor(task.status)}
                                component='div'
                            >
                                {dayjs(task.completeBy).format('DD/MM/YYYY')}
                            </Typography>
                        </Stack>
                    )}
                </Stack>
                <Divider />
                <Stack
                    flexGrow={1}
                    gap={1}
                    py={1}
                    justifyContent='space-between'
                >
                    <Typography textAlign='center' variant='h6' component='div'>
                        {task.name}
                    </Typography>

                    <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary' }}
                        lineHeight={1.6}
                        component='div'
                        fontStyle={task.description ? 'normal' : 'italic'}
                    >
                        {task.description
                            ? task.description
                            : t('TaskCard.noDescription')}
                    </Typography>
                    <Stack
                        gap={1}
                        alignItems='center'
                        mt={1}
                        flexDirection='row'
                    >
                        <Avatar
                            sx={{ width: 24, height: 24 }}
                            src='/broken-image.jpg'
                        />
                        <Link
                            underline='none'
                            href='mailto:domnitskiy.oleg@mail.ru'
                        >
                            <Typography
                                variant='caption'
                                mb={0}
                                sx={{ color: 'text.secondary' }}
                                component='div'
                            >
                                {DEVELOPER_CONTACTS.email}
                            </Typography>
                        </Link>
                    </Stack>
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
