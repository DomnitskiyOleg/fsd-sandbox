import { RootState } from './configure'

export default () => {
  try {
    const serializedState = localStorage.getItem('redux-state')
    if (!serializedState) return undefined
    const state = JSON.parse(serializedState) as object
    return state
  } catch (error) {
    return undefined
  }
}
