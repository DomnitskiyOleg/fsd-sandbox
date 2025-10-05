import { Link, useParams } from 'react-router-dom'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Avatar, Container, Stack, Typography } from '@mui/material'
import { useGetUserDetails } from '../../hooks'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export function UserCard() {
    const { id } = useParams<{ id: string }>()
    const { t: commonT } = useTranslation('common')
    const { t: usersT } = useTranslation('users-common')
    const { t } = useTranslation('user-details')

    if (!id) return null
    const user = useGetUserDetails({ id: parseInt(id, 10) })
    if (!user) return <div>Пользователь не найден</div>

    return (
        <Container sx={{ mt: 4 }} maxWidth='xl'>
            <Stack flexDirection='row' alignItems='center' mb={4} gap={3}>
                <Avatar src='/assets/users/logo.jpg' sx={styles.avatar} />
                <Stack>
                    <Link to='/users' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Stack flexDirection='row' gap={1}>
                            <KeyboardBackspaceIcon />
                            <Typography>{commonT('actions.back')}</Typography>
                        </Stack>
                    </Link>
                    <Typography variant='h4' component='h2'>
                        {t('UserCard.title', { id })}
                    </Typography>
                </Stack>
            </Stack>

            <TableContainer component={Paper}>
                <Table aria-label='field-value table' sx={styles.table}>
                    <TableBody>
                        {Object.entries(user).map(([field, value]) => (
                            <TableRow key={field} sx={styles.row}>
                                <TableCell component='th' scope='row' sx={styles.leftCol}>
                                    {usersT(`fields.${field}`)}
                                </TableCell>
                                <TableCell align='right' sx={styles.rightCol}>
                                    {value}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}
