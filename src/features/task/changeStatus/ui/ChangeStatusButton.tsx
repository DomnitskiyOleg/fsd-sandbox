import { changeTaskStatusAction, TaskStatus } from '@/entities/task'

import SportsScoreOutlinedIcon from '@mui/icons-material/SportsScoreOutlined'
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined'
import { Button } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

type Props = {
  id: string
  currentStatus: TaskStatus
}
export function ChangeStatusButton(props: Props) {
  const { id, currentStatus } = props
  const dispatch = useDispatch()
  const { t } = useTranslation('tasks')

  const onChangeStatus = useCallback(
    (status: TaskStatus) => {
      dispatch(changeTaskStatusAction({ id, status }))
    },
    [dispatch],
  )
  const renderButton = () => {
    switch (currentStatus) {
      case TaskStatus.ToDo:
        return (
          <Button
            onClick={() => onChangeStatus(TaskStatus.InProgress)}
            fullWidth
            variant='outlined'
            endIcon={<NotStartedOutlinedIcon />}
            size='small'
          >
           {t('TaskCard.startButton')}
          </Button>
        )

      case TaskStatus.InProgress:
        return (
          <Button
            onClick={() => onChangeStatus(TaskStatus.Done)}
            fullWidth
            variant='outlined'
            endIcon={<SportsScoreOutlinedIcon />}
            size='small'
          >
            {t('TaskCard.completeButton')}
          </Button>
        )

      default:
        return null
    }
  }
  return <>{renderButton()}</>
}
