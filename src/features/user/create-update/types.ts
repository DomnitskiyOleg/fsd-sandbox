import { UserRole } from '@/entities/user'
import { TFunctionNonStrict } from 'i18next'
import { z } from 'zod'

const PHONE_REGEX = /^\+7\s\((9\d{2})\)\s\d{3}-\d{2}-\d{2}$/

export const formValuesSchema = (t: TFunctionNonStrict<'common', undefined>) =>
    z.object({
        name: z.string().min(2, t('validation.minLength', { count: 2 })),
        email: z.email(t('validation.invalid')),
        phone: z.string().regex(PHONE_REGEX, t('validation.invalid')),
        role: z.enum(UserRole),
    })

export type FormValues = z.infer<ReturnType<typeof formValuesSchema>>
