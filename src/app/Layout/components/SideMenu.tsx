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

const DRAWER_WIDTH = 280

export default function SideMenu() {
  const [isOpened, setIsOpened] = useState(true)
  const { t } = useTranslation('common')
  return (
    <Drawer
      open={isOpened}
      variant='persistent'
      sx={(theme) => ({
        p: 1,
        pr: 2,
        width: DRAWER_WIDTH,
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          position: 'static',
          backgroundColor: '#CD5434',
          borderRadius: 2,
          border: '1px solid',
          borderColor: theme.palette.grey[700],
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
          src='./src/shared/ui/assets/ava.png'
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
      <Stack direction='row' alignItems='center' spacing={1}>
        <Box
          sx={{
            width: '2.5rem',
            height: '2.5rem',
            bgcolor: 'black',
            borderRadius: '999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundImage: 'linear-gradient(135deg, #004400 0%, #259254 80%)',
            color: 'hsla(210, 100%, 95%, 0.9)',
            border: '1px solid',
            borderColor: '#259254',
            boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
          }}
        >
          <ExtensionIcon color='inherit' sx={{ fontSize: '1.5rem' }} />
        </Box>
        <Typography variant='h4' fontWeight={600} textTransform='uppercase'>
          sandbox
        </Typography>
      </Stack>
    </MenuLink>
  )
}
