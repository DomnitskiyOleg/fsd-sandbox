import { useParams } from 'react-router-dom'

export function UserCard() {
    const { id } = useParams<{ id: string }>()
    return <div>{id}</div>
}
