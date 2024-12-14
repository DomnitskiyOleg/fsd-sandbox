export enum TaskStatus {
  ToDo = 'todo',
  InProgress = 'inProgress',
  Done = 'done',
} 

export interface ITask {
  id: string
  name: string
  description: string | null
  status: TaskStatus
  completeBy: string | null
  position: number
}
