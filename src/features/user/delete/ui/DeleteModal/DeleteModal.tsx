import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { createRef, useCallback, useImperativeHandle, useState } from 'react'
import { Box, Button, Paper, Stack } from '@mui/material'
import Slide from '@mui/material/Slide'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'
import { useGetUserActions } from '@/entities/user/hooks'
import { useSnackbar } from 'notistack'

export const DeleteModalRef = createRef<{ open: (_id: number) => void }>()

export function DeleteModal() {
    const [open, setOpen] = useState(false)
    const { t: commonT } = useTranslation('common')
    const { t } = useTranslation('users')

    const { enqueueSnackbar } = useSnackbar()

    const [userId, setUserId] = useState<number | null>(null)
    const openHandler = useCallback((id: number) => {
        setOpen(true)
        setUserId(id)
    }, [])
    const closeHandler = useCallback(() => {
        setOpen(false)
        setUserId(null)
    }, [])

    const { deleteUser } = useGetUserActions()
    useImperativeHandle(DeleteModalRef, () => ({
        open: openHandler,
    }))

    const deleteHandler = useCallback(() => {
        if (!userId) return
        deleteUser(userId)
        enqueueSnackbar(t('DeleteModal.successMessage', { id: userId }), { variant: 'success' })
        closeHandler()
    }, [userId, closeHandler])

    return (
        <div>
            <Modal
                aria-labelledby={t('DeleteModal.title')}
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
                            <Stack flexDirection='column' gap={3}>
                                <Typography id='transition-modal-title' variant='h6' component='h2'>
                                    {t('DeleteModal.title')}
                                </Typography>
                                <Typography id='transition-modal-description'>
                                    {t('DeleteModal.text')}
                                </Typography>
                                <Stack flexDirection='row' gap={2} justifyContent='end'>
                                    <Button fullWidth onClick={deleteHandler} variant='contained'>
                                        {commonT('actions.affirm')}
                                    </Button>
                                    <Button onClick={closeHandler} fullWidth variant='outlined'>
                                        {commonT('actions.cancel')}
                                    </Button>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Slide>
                </Box>
            </Modal>
        </div>
    )
}
