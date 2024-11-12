import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Avatar, Drawer, Link, Stack, Typography } from '@mui/material'
import { drawerClasses } from '@mui/material/Drawer'
import CardAlert from './CardAlert'
import MenuContent from './MenuContent'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import ExtensionIcon from '@mui/icons-material/Extension'
import MenuLink from './MenuLink'
import { PofileAvatar } from '@/shared/ui'

const DRAWER_WIDTH = 280
const BORDER_WIDTH = 2
const BASE_SPACING = 8

export default function SideMenu() {
  const [isOpened, setIsOpened] = useState(true)
  const { t } = useTranslation('common')
  return (
    <Drawer
      open={isOpened}
      variant='persistent'
      sx={(theme) => ({
        position: 'fixed',
        pl: 1,
        pr: theme.spacing(1.5),
        top: 8,
        bottom: 8,
        width: DRAWER_WIDTH,
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          position: 'static',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 2,
          border: `${BORDER_WIDTH}px solid`,
          borderColor: theme.palette.grey[600],
        },
      })}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 60,
          pl: 2,
        }}
      >
        <CustomIcon />
      </Box>
      <Divider />
      <MenuContent />
      <CardAlert />
      <Stack
        direction='row'
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar
          sizes='small'
          alt='Riley Carter'
          src={PofileAvatar}
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: 'auto' }}>
          <Typography
            variant='body2'
            sx={{ fontWeight: 500, lineHeight: '16px' }}
          >
            {t('about')}
          </Typography>
          <Link href='mailto:domnitskiy.oleg@mail.ru'>
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

export function CustomIcon() {
  return (
    <MenuLink to='/'>
      <Stack direction='row' alignItems='center' spacing={2}>
        <Box
          sx={(theme) => ({
            width: '2.5rem',
            height: '2.5rem',
            bgcolor: 'black',
            borderRadius: '999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundImage: `linear-gradient(135deg, #004400 0%, ${theme.palette.primary.main} 80%)`,
            color: 'hsla(210, 100%, 95%, 0.9)',
            border: '1px solid',
            borderColor: '#259254',
            boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
          })}
        >
          <ExtensionIcon color='inherit' sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Typography
          fontSize='1.6rem'
          fontWeight={600}
          textTransform='uppercase'
        >
          sandbox
        </Typography>
      </Stack>
    </MenuLink>
  )
}
