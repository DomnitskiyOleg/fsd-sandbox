import { createSlice, createAction, nanoid } from '@reduxjs/toolkit'
import { Dayjs } from 'dayjs'

export enum TaskStatus {
  ToDo = 'todo',
  InProgress = 'inProgress',
  Done = 'done',
}

interface ITask {
  id: string
  name: string
  description: string | null
  status: TaskStatus
  completeBefore: string | null
}

type TasksState = {
  tasks: ITask[]
}

const initialState: TasksState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTaskAction, (state, action) => {
      state.tasks.push({ id: nanoid(), ...action.payload })
    })
  },
})

export const selectTasks = (state: { tasks: TasksState }) => state.tasks.tasks
export const addTaskAction = createAction<Omit<ITask, 'id'>>('addTask')
export default tasksSlice.reducer
