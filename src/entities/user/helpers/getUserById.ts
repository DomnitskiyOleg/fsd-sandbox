import { IUser } from '../model/types'

export const getUserById = (users: IUser[], id: number) => {
    const found = users.find((v) => v.id === id)
    return found ?? null
}
