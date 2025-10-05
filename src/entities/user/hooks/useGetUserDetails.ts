import { useSelector } from 'react-redux'
import { selectUsers } from '../model/slice'
import { getUserById } from '../helpers/getUserById'

export function useGetUserDetails({ id }: { id: number }) {
    const user = getUserById(useSelector(selectUsers), id)
    return user
}
