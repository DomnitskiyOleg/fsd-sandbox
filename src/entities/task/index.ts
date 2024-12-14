export { TaskCard } from './ui/TaskCard'
export { default as tasksReducer } from './model/slice'
export { type ITask, TaskStatus } from './model/types'
export { getTaskStatusColor } from './lib/getTaskStatusColor'
export {
  addTaskAction,
  deleteTaskAction,
  changeTaskStatusAction,
} from './model/slice'
