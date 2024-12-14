import { createSlice, createAction, nanoid } from '@reduxjs/toolkit'
import { ITask, TaskStatus } from './types'

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
      state.tasks.unshift({ id: nanoid(), ...action.payload })
    })
    builder.addCase(deleteTaskAction, (state, action) => {
      state.tasks = state.tasks.filter((v) => v.id !== action.payload.id)
    })
    builder.addCase(changeTaskStatusAction, (state, action) => {
      const { id, status } = action.payload
      state.tasks = state.tasks.map((v) => (v.id === id ? { ...v, status } : v))
    })
  },
})

export default tasksSlice.reducer

export const selectTasks = (state: { tasks: TasksState }) => state.tasks.tasks

export const addTaskAction = createAction<Omit<ITask, 'id'>>('addTask')
export const changeTaskStatusAction = createAction<{
  id: string
  status: TaskStatus
}>('changeTaskStatus')
export const deleteTaskAction = createAction<{
  id: string
}>('deleteTask')
