import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import { tasksReducer } from '@/entities/task'
import { ticketsReducer } from '@/entities/ticket'
import { filterReducer as tasksFilter } from '@/features/task/filter'
import preloadState from './preloadState'
import { ticketSettingsReducer } from '@/features/ticket/settings'

export const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        ticketsSettings: ticketSettingsReducer,
        tasks: tasksReducer,
        tasksfilter: tasksFilter,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
    preloadedState: preloadState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
