import { createSlice } from '@reduxjs/toolkit'
import { ITicket } from './types'
import data from './mockData.json'

type TicketsState = {
    tickets: ITicket[]
}

const initialState: TicketsState = data as TicketsState

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        // some added reducers
    },
})

export default ticketsSlice.reducer

export const selectTickets = (state: { tickets: TicketsState }) =>
    state.tickets.tickets
