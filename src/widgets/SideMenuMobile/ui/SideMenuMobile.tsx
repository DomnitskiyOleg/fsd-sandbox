import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import { ReactNode } from 'react'
import styles from './styles'
import MenuContent from '@/shared/ui/Layout/MenuContent'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

type Props = {
  contactCard?: ReactNode
  open: boolean | undefined
  toggleDrawer: () => void
}

export function SideMenuMobile(props: Props) {
  const { t } = useTranslation()
  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={props.toggleDrawer}
      sx={styles.drawer}
    >
      <Stack sx={styles.container}>
        <Stack direction='row' sx={styles.header}>
          <Stack direction='row' sx={styles.avatarWrapper}>
            <Avatar
              sizes='small'
              alt={t('developer')}
              src='/assets/ava.png'
              sx={styles.avatar}
            />
            <Typography component='p' variant='body1' fontWeight={500}>
              {t('developer')}
            </Typography>
          </Stack>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
        </Stack>
        <Box>{props.contactCard}</Box>
        <Divider />
        <Stack sx={{ p: 2, px: 1 }}>
          <Button
            variant='outlined'
            sx={{ color: 'white', borderColor: 'white' }}
            fullWidth
            startIcon={<LogoutRoundedIcon />}
          >
            {t('actions.logout')}
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  )
}
