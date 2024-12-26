import { AddTaskForm } from '@/features/task/add'
import { TasksGrid } from '@/widgets/TasksGrid'
import { TasksKanban } from '@/widgets/TasksKanban/ui/TasksKanban'

export function TasksPage() {
    return (
        <>
            <AddTaskForm />
            <TasksGrid />
            {/* <TasksKanban /> */}
        </>
    )
}
