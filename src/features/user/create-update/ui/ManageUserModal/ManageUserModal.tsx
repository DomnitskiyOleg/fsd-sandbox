import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'

import { createRef, useCallback, useImperativeHandle, useState } from 'react'
import { Box, Button, MenuItem, Paper, TextField, Stack, Typography } from '@mui/material'
import Slide from '@mui/material/Slide'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'
import { useGetUserActions } from '@/entities/user/hooks'
import { useSnackbar } from 'notistack'
import { IUser, UserRole } from '@/entities/user'
import { useForm, Controller } from 'react-hook-form'
import { FormValues, formValuesSchema } from '../../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { PatternFormat, patternFormatter } from 'react-number-format'
import { cleanPhone } from '../../helpers'
import { DEFAULT_VALUES } from '../../constants'

export const ManageUserModalRef = createRef<{ open: (_user?: IUser) => void }>()

export function ManageUserModal() {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation('users')
    const { t: commonT } = useTranslation('common')
    const { t: usersCommon } = useTranslation('users-common')

    const { enqueueSnackbar } = useSnackbar()
    const { control, handleSubmit, reset } = useForm<FormValues>({
        resolver: zodResolver(formValuesSchema(commonT)),
        defaultValues: DEFAULT_VALUES,
    })

    const [selectedUser, setSelectedUser] = useState<IUser | null>(null)

    const openHandler = useCallback((user?: IUser) => {
        if (user) {
            setSelectedUser(user)
            const cleanedPhone = cleanPhone(user.phone)
            const formattedPhone = patternFormatter(cleanedPhone, {
                format: '+7 (###) ###-##-##',
                placeholder: '_',
            })
            reset({
                ...user,
                phone: formattedPhone,
            })
        }
        setOpen(true)
    }, [])

    const closeHandler = useCallback(() => {
        reset(DEFAULT_VALUES)
        setOpen(false)
        setSelectedUser(null)
    }, [])

    const { updateUser, createUser } = useGetUserActions()

    useImperativeHandle(ManageUserModalRef, () => ({
        open: openHandler,
    }))

    const onSubmit = useCallback(
        (data: FormValues) => {
            if (!selectedUser) {
                createUser(data)
                enqueueSnackbar(t('ManageUserModal.createSuccessMessage'), { variant: 'success' })
                closeHandler()
            } else {
                updateUser({ id: selectedUser.id, ...data })
                enqueueSnackbar(t('ManageUserModal.updateSuccessMessage'), { variant: 'success' })
                closeHandler()
            }
        },
        [selectedUser, createUser, updateUser, closeHandler],
    )

    return (
        <div>
            <Modal
                aria-labelledby={
                    selectedUser ? t('ManageUserModal.updateTitle') : t('ManageUserModal.createTitle')
                }
                open={open}
                onClose={closeHandler}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 550,
                    },
                }}
            >
                <Box display='flex' justifyContent='center' height='100%'>
                    <Slide direction='up' in={open} mountOnEnter unmountOnExit>
                        <Paper variant='elevation' sx={styles.modal}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack flexDirection='column' gap={3}>
                                    <Typography id='transition-modal-title' variant='h6' component='h2'>
                                        {selectedUser
                                            ? t('ManageUserModal.updateTitle')
                                            : t('ManageUserModal.createTitle')}
                                    </Typography>
                                    <Controller
                                        name='name'
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                size='small'
                                                label={usersCommon('fields.name')}
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name='email'
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                size='small'
                                                label={usersCommon('fields.email')}
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name='role'
                                        control={control}
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                {...field}
                                                size='small'
                                                select
                                                label={usersCommon('fields.role')}
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message}
                                            >
                                                {Object.entries(UserRole).map(([name, value]) => (
                                                    <MenuItem key={value} value={value}>
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )}
                                    />
                                    <Controller
                                        name='phone'
                                        control={control}
                                        render={({ field: { ref: _ref, ...rest }, fieldState }) => (
                                            <PatternFormat
                                                {...rest}
                                                customInput={TextField}
                                                format='+7 (###) ###-##-##'
                                                mask='_'
                                                size='small'
                                                allowEmptyFormatting
                                                label={usersCommon('fields.phone')}
                                                error={!!fieldState.error}
                                                helperText={fieldState.error?.message}
                                                fullWidth
                                            />
                                        )}
                                    />
                                    <Stack flexDirection='row' gap={2}>
                                        <Button fullWidth type='submit' variant='contained'>
                                            {commonT('actions.save')}
                                        </Button>
                                        <Button variant='outlined' fullWidth onClick={closeHandler}>
                                            {commonT('actions.cancel')}
                                        </Button>
                                    </Stack>
                                </Stack>
                            </form>
                        </Paper>
                    </Slide>
                </Box>
            </Modal>
        </div>
    )
}
