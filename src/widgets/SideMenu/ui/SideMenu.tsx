import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Avatar, Drawer, Link, Stack, Typography } from '@mui/material'

import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { BrandLogo, PofileAvatar } from '@/shared/ui'
import MenuContent from '@/shared/ui/Layout/MenuContent'
import styles from './styles'

type Props = {
  contactCardSlot?: ReactNode
}

export function SideMenu(props: Props) {
  //   next feature to add
  //   const [isOpened, setIsOpened] = useState(true)
  const { t } = useTranslation('common')
  return (
    <Drawer open variant='persistent' sx={styles.drawer}>
      <Box sx={styles.logoContainer}>
        <BrandLogo />
      </Box>
      <Divider />
      <MenuContent />
      {props.contactCardSlot}
      <Stack direction='row' sx={styles.avatarContainer}>
        <Avatar
          sizes='small'
          alt={t('developer')}
          src={PofileAvatar}
          sx={styles.avatar}
        />
        <Box sx={{ mr: 'auto' }}>
          <Typography
            variant='body2'
            sx={{ fontWeight: 500, lineHeight: '16px' }}
          >
            {t('developer')}
          </Typography>
          <Link underline='none' href='mailto:domnitskiy.oleg@mail.ru'>
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              domnitskiy.oleg@mail.ru
            </Typography>
          </Link>
        </Box>
        {/* <OptionsMenu /> */}
      </Stack>
    </Drawer>
  )
}
