import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import { tasksReducer } from '@/entities/task'
import { filterReducer } from '@/features/task/filter'
import preloadState from './preloadState'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  preloadedState: preloadState(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
