import { AddTaskForm } from '@/widgets/AddTaskForm/ui/AddTaskForm'
import { TasksKanban } from '@/widgets/TasksKanban'

export function TasksPage() {
  return (
    <>
      <AddTaskForm />
      <TasksKanban />
    </>
  )
}
