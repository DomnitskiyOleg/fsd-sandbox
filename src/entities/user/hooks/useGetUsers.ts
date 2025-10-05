import { useSelector } from 'react-redux'
import { selectUsers } from '../model/slice'

export function useGetUsers() {
    return useSelector(selectUsers)
}
