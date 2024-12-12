import { AddTaskForm } from '@/features/task/add'
import { TasksGrid } from '@/widgets/TasksGrid'
import { TasksKanban } from '@/widgets/TasksKanban'

export function TasksPage() {
  return (
    <>
      <AddTaskForm />
      <TasksGrid />
    </>
  )
}
