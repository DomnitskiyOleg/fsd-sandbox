import { AddTaskForm } from '@/features/task/add'
import { TasksFilter } from '@/features/task/filter'
import { TasksGrid } from '@/widgets/TasksGrid'

export function TasksPage() {
  return (
    <>
      <AddTaskForm />
      <TasksGrid />
    </>
  )
}
