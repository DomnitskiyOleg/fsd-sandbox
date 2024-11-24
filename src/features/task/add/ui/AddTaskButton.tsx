import { useMobileQuery } from '@/shared/lib'
import { Button } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

export function AddTaskButton() {
  const isMobile = useMobileQuery()

  return (
    <Button
      type='submit'
      fullWidth={isMobile}
      endIcon={<AddBoxOutlinedIcon />}
      variant='contained'
    >
      Добавить
    </Button>
  )
}
