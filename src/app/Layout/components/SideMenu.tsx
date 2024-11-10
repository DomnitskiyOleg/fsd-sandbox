import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { Avatar, Link, Stack, styled, Typography } from '@mui/material'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import CardAlert from './CardAlert'
import MenuContent from './MenuContent'
import { useState } from 'react'

const drawerWidth = 240

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
})

export default function SideMenu() {
  const [isOpened, setIsOpened] = useState(true)

  return (
    <Drawer
      open={isOpened}
      variant='persistent'
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1.5,
        }}
      >
        {/* <SelectContent /> */}
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
            Domnitskiy Oleg
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
