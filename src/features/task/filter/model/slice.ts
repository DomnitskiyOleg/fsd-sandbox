import { TaskStatus } from '@/entities/task'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Filter = TaskStatus | 'all'

type FilterState = {
  filter: Filter
}

const initialState: FilterState = {
  filter: 'all',
}

const filterSlice = createSlice({
  name: 'featureName',
  initialState,
  reducers: {
    setTaskFilter(state, action: PayloadAction<{ filter: Filter }>) {
      state.filter = action.payload.filter
    },
  },
})

export const selectFilter = (state: { filter: FilterState }) =>
  state.filter.filter
export const { setTaskFilter } = filterSlice.actions
export default filterSlice.reducer
