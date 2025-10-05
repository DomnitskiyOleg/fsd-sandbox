import { AddTaskForm } from '@/features/task/add'
import { TasksGrid } from '@/widgets/tasks'

export function TasksPage() {
    return (
        <>
            <AddTaskForm />
            <TasksGrid />
            {/* <TasksKanban /> */}
        </>
    )
}
