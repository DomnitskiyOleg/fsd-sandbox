import { Button } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { useDispatch } from 'react-redux'
import { deleteTaskAction } from '@/entities/task'

export function DeleteTaskButton({ id }: { id: string }) {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() => {
        dispatch(deleteTaskAction({ id }))
      }}
      fullWidth
      variant='outlined'
      endIcon={<DeleteOutlineOutlinedIcon />}
      size='small'
    >
      Удалить
    </Button>
  )
}
