import { createSlice, createAction, nanoid } from '@reduxjs/toolkit'
import { ITicket } from './types'
import data from './mockData.json'

type TicketsState = {
    tickets: ITicket[]
}

const initialState: TicketsState = data as TicketsState

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(addTaskAction, (state, action) => {
    //         state.tasks.unshift({ id: nanoid(), ...action.payload })
    //     })
    //     builder.addCase(deleteTaskAction, (state, action) => {
    //         state.tasks = state.tasks.filter((v) => v.id !== action.payload.id)
    //     })
    //     builder.addCase(changeTaskStatusAction, (state, action) => {
    //         const { id, status } = action.payload
    //         state.tasks = state.tasks.map((v) =>
    //             v.id === id ? { ...v, status } : v,
    //         )
    //     })
    // },
})

export default ticketsSlice.reducer

export const selectTickets = (state: { tickets: TicketsState }) =>
    state.tickets.tickets

// export const addTaskAction = createAction<Omit<ITask, 'id'>>('addTask')
// export const changeTaskStatusAction = createAction<{
//     id: string
//     status: TaskStatus
// }>('changeTaskStatus')
// export const deleteTaskAction = createAction<{
//     id: string
// }>('deleteTask')
