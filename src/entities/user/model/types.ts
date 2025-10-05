export enum UserRole {
    Admin = 'admin',
    User = 'user',
    Manager = 'manager',
}

export interface IUser {
    id: number
    name: string
    email: string
    phone: string
    role: UserRole
}
