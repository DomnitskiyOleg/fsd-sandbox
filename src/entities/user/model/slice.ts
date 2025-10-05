import { createSlice, createAction, nanoid } from '@reduxjs/toolkit'
import { IUser, UserRole } from './types'
import { uniqId } from '@/shared/lib'
import { MOCK_USERS } from '../constants'
type UsersState = {
    users: IUser[]
}

const initialState: UsersState = {
    users: MOCK_USERS,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // create
        builder.addCase(createUserAction, (state, action) => {
            state.users.unshift({ id: uniqId(state.users), ...action.payload })
        })

        // delete
        builder.addCase(deleteUserAction, (state, action) => {
            state.users = state.users.filter((u) => u.id !== action.payload.id)
        })
        // update
        builder.addCase(updateUserAction, (state, action) => {
            const found = state.users.find((v) => v.id === action.payload.id)
            if (found) {
                Object.assign(found, action.payload)
            }
        })
    },
})

export const reducer = usersSlice.reducer

export const selectUsers = (state: { users: UsersState }) => state.users.users

export const createUserAction = createAction<Omit<IUser, 'id'>>('createUser')
export const deleteUserAction = createAction<{
    id: number
}>('deleteUser')
export const updateUserAction = createAction<IUser>('updateUser')
