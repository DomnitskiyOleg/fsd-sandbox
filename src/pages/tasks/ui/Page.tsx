import { AddTaskForm } from '@/features/task/add'
import { TasksGrid } from '@/widgets/TasksGrid'


export function TasksPage() {
  return (
    <>
      <AddTaskForm />
      <TasksGrid />
    </>
  )
}
