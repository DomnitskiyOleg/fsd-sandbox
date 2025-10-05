import { DataGrid, GridPaginationModel } from '@mui/x-data-grid'
import { Container, IconButton, Paper, Stack } from '@mui/material'
import { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { useGetUsers } from '@/entities/user'
import { useColumns } from './columns'

import { styles, tableStyles } from './styles'
import { DeleteModal, ManageUserModal, ManageUserModalRef } from '@/features/user'

const PAGE_SIZE_OPTIONS = [5, 10, 15]

export function UsersTable() {
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        page: 0,
        pageSize: 5,
    })

    const users = useGetUsers()
    const columns = useColumns()
    return (
        <Container sx={{ marginTop: 4 }} maxWidth='xl'>
            <Paper variant='elevation' sx={styles.container}>
                <Stack flexDirection='column' display='flex' flex={1}>
                    <Paper sx={styles.header}>
                        <Stack bgcolor='background.card' justifyContent='end' flexDirection='row' flex={1}>
                            <IconButton
                                aria-label='add'
                                onClick={() => ManageUserModalRef.current?.open()}
                                color='primary'
                            >
                                <PersonAddIcon fontSize='large' />
                            </IconButton>
                        </Stack>
                    </Paper>
                    <DataGrid
                        style={tableStyles}
                        rows={users}
                        columns={columns}
                        showColumnVerticalBorder
                        showCellVerticalBorder
                        paginationModel={paginationModel}
                        onPaginationModelChange={setPaginationModel}
                        pageSizeOptions={PAGE_SIZE_OPTIONS}
                        disableRowSelectionOnClick
                    />
                </Stack>
            </Paper>
            <ManageUserModal />
            <DeleteModal />
        </Container>
    )
}
