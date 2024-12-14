import { colors } from '@mui/material'
import { TaskStatus } from '../model/types'

export const getTaskStatusColor = (status: TaskStatus) => {
  switch (status) {
    case TaskStatus.ToDo:
      return colors.blue[200]

    case TaskStatus.InProgress:
      return colors.purple[300]

    default:
      return colors.lime[500]
  }
}
