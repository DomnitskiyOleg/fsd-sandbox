import { useDispatch } from 'react-redux'
import { createUserAction, deleteUserAction, IUser, updateUserAction } from '../model'
import { useCallback } from 'react'

export const useGetUserActions = () => {
    const dispatch = useDispatch()

    const deleteUser = useCallback(
        (id: number) => {
            dispatch(deleteUserAction({ id }))
        },
        [dispatch],
    )

    const createUser = useCallback(
        (payload: Omit<IUser, 'id'>) => {
            dispatch(createUserAction(payload))
        },
        [dispatch],
    )

    const updateUser = useCallback(
        (payload: IUser) => {
            dispatch(updateUserAction(payload))
        },
        [dispatch],
    )
    return { deleteUser, createUser, updateUser }
}
