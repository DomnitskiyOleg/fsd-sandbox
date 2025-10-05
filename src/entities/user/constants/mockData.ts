import { IUser, UserRole } from '../model/types'

export const MOCK_USERS: IUser[] = [
    {
        id: 1,
        name: 'Алексей Иванов',
        email: 'alexey.ivanov@example.com',
        phone: '+79160000001',
        role: UserRole.Admin,
    },
    {
        id: 2,
        name: 'Мария Петрова',
        email: 'maria.petrova@example.com',
        phone: '+79160000002',
        role: UserRole.User,
    },
    {
        id: 3,
        name: 'Иван Сидоров',
        email: 'ivan.sidorov@example.com',
        phone: '+79160000003',
        role: UserRole.Manager,
    },
    {
        id: 4,
        name: 'Екатерина Смирнова',
        email: 'ekaterina.smirnova@example.com',
        phone: '+79160000004',
        role: UserRole.User,
    },
    {
        id: 5,
        name: 'Дмитрий Кузнецов',
        email: 'dmitry.kuznetsov@example.com',
        phone: '+79160000005',
        role: UserRole.Admin,
    },
    {
        id: 6,
        name: 'Ольга Новикова',
        email: 'olga.novikova@example.com',
        phone: '+79160000006',
        role: UserRole.User,
    },
    {
        id: 7,
        name: 'Сергей Морозов',
        email: 'sergey.morozov@example.com',
        phone: '+79160000007',
        role: UserRole.Manager,
    },
    {
        id: 8,
        name: 'Анна Федорова',
        email: 'anna.fedorova@example.com',
        phone: '+79160000008',
        role: UserRole.User,
    },
    {
        id: 9,
        name: 'Николай Васильев',
        email: 'nikolay.vasilev@example.com',
        phone: '+79160000009',
        role: UserRole.Admin,
    },
    {
        id: 10,
        name: 'Татьяна Козлова',
        email: 'tatyana.kozlova@example.com',
        phone: '+79160000010',
        role: UserRole.User,
    },
]
