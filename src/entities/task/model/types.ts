export enum TaskStatus {
  ToDo = 'todo',
  InProgress = 'in progress',
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
