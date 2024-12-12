import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useSelector } from 'react-redux'
import { selectTasks } from '@/app/Store/slices/tasksSlice'
import { TaskCard } from '@/entities/task'



export function TasksGrid() {
  const tasks = useSelector(selectTasks)

  return (
    <Container maxWidth='xl'>
      <Grid sx={{ mt: 4 }} container spacing={2}>
        {tasks.map((v) => (
          <Grid key={v.id} size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}>
            <TaskCard task={v} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
