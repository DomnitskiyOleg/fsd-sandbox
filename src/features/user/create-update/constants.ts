import { UserRole } from '@/entities/user'
import { FormValues } from './types'

export const DEFAULT_VALUES: FormValues = { email: '', phone: '', name: '', role: UserRole.User }
