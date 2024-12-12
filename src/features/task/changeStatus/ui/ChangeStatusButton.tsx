import { changeTaskStatusAction, TaskStatus } from '@/entities/task'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Button } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
  id: string
  currentStatus: TaskStatus
}
export function ChangeStatusButton(props: Props) {
  const { id, currentStatus } = props
  const dispatch = useDispatch()

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
            endIcon={<RadioButtonUncheckedIcon />}
            size='small'
          >
            Начать
          </Button>
        )

      case TaskStatus.InProgress:
        return (
          <Button
            onClick={() => onChangeStatus(TaskStatus.Done)}
            fullWidth
            variant='outlined'
            endIcon={<RadioButtonUncheckedIcon />}
            size='small'
          >
            Завершить
          </Button>
        )

      default:
        return null
    }
  }
  return <>{renderButton()}</>
}
