import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import tasksReducer from './slices/tasksSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
