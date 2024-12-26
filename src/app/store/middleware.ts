import { Middleware } from 'redux'

const saveStateToLocalStorage: Middleware<object, object> =
  (store) => (next) => (action) => {
    const result = next(action)
    const state = store.getState()
    localStorage.setItem('redux-state', JSON.stringify(state))
    return result
  }

export default saveStateToLocalStorage
