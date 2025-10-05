import { IUser, UserRole } from '@/entities/user'
import { GridActionsCellItem, GridColDef, GridDeleteIcon } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useTranslation } from 'react-i18next'
import { DeleteModalRef, ManageUserModalRef } from '@/features/user'
import { formatPhoneForGrid } from '../helpers'
import { Badge, Chip, type ChipOwnProps, colors } from '@mui/material'

const chipColors: Record<UserRole, ChipOwnProps['color']> = {
    [UserRole.Admin]: 'info',
    [UserRole.User]: 'default',
    [UserRole.Manager]: 'warning',
}

export const useColumns = () => {
    const { t } = useTranslation('users-common')
    const columns: GridColDef<IUser>[] = [
        { field: 'id', headerAlign: 'center', align: 'center', headerName: t('fields.id'), width: 100 },
        {
            field: 'name',
            headerName: t('fields.name'),
            width: 270,
        },
        {
            field: 'email',
            headerName: t('fields.email'),
            width: 280,
        },
        {
            field: 'role',
            align: 'center',
            headerAlign: 'center',
            headerName: t('fields.role'),
            width: 180,
            renderCell: (params) => <Chip color={chipColors[params.row.role]} label={params.row.role} />,
        },
        {
            field: 'phone',
            headerName: t('fields.phone'),
            flex: 1,
            resizable: false,
            minWidth: 200,
            valueGetter: (value, row) => formatPhoneForGrid(row.phone),
        },
        {
            field: 'actions',
            sortable: false,
            type: 'actions',
            align: 'center',
            headerAlign: 'center',
            width: 120,
            resizable: false,
            pinnable: true,
            hideable: false,
            hideSortIcons: true,
            getActions: (v) => [
                <GridActionsCellItem
                    color='primary'
                    showInMenu={false}
                    key='read'
                    icon={<RemoveRedEyeIcon fontSize='small' />}
                    label='read'
                    onClick={() => {
                        console.log(v)
                    }}
                />,
                <GridActionsCellItem
                    color='primary'
                    showInMenu={false}
                    key='update'
                    icon={<EditIcon fontSize='small' />}
                    label='update'
                    onClick={() => ManageUserModalRef.current?.open(v.row)}
                />,
                <GridActionsCellItem
                    key='delete'
                    icon={<GridDeleteIcon color='error' fontSize='small' />}
                    label='delete'
                    onClick={() => DeleteModalRef.current?.open(v.row.id)}
                />,
            ],
        },
    ]
    return columns
}
