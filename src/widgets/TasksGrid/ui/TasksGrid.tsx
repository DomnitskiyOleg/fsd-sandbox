import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useSelector } from 'react-redux'
import { TaskCard } from '@/entities/task'
import { selectTasks } from '@/entities/task/model/slice'
import { DeleteTaskButton } from '@/features/task/delete'
import { ChangeStatusButton } from '@/features/task/changeStatus'
import { selectFilter, TasksFilter } from '@/features/task/filter'
import { useMemo } from 'react'

export function TasksGrid() {
  const tasks = useSelector(selectTasks)
  const filter = useSelector(selectFilter)

  const filteredTasks = useMemo(() => {
    if (filter === 'all') return tasks
    return tasks.filter((v) => v.status === filter)
  }, [tasks, filter])

  return (
    <Container sx={{ mt: 4 }} maxWidth='xl'>
      <TasksFilter />
      <Grid sx={{ mt: 1 }} container spacing={2}>
        {filteredTasks.map((v) => (
          <Grid key={v.id} size={{ xs: 12, lg: 6, xl: 4 }}>
            <TaskCard
              task={v}
              deleteTaskSlot={<DeleteTaskButton id={v.id} />}
              changeStatusSlot={
                <ChangeStatusButton id={v.id} currentStatus={v.status} />
              }
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
