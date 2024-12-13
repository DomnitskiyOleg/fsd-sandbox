export { TaskCard } from './ui/TaskCard'
export { default as tasksReducer } from './model/slice'
export {
  addTaskAction,
  deleteTaskAction,
  changeTaskStatusAction,
} from './model/slice'
export { type ITask, TaskStatus } from './model/types'
