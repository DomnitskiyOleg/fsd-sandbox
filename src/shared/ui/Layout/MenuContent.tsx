import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NavLink } from '../NavLink/NavLink'


const mainListItems = [
  { path: '/', name: 'home', icon: <HomeRoundedIcon /> },
  { path: '/tasks', name: 'tasks', icon: <AssignmentRoundedIcon /> },
]

const secondaryListItems = [
  { path: '/settings', name: 'settings', icon: <SettingsRoundedIcon /> },
  { path: '/about', name: 'about', icon: <InfoRoundedIcon /> },
]

export default function MenuContent() {
  const { pathname } = useLocation()
  const { t } = useTranslation('common')
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((v, index) => (
          <NavLink key={`${v.path} + ${index}`} to={v.path}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={v.path === pathname}>
                <ListItemIcon>{v.icon}</ListItemIcon>
                <ListItemText primary={t(`Drawer.${v.name}`)} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((v, index) => (
          <NavLink key={`${v.path} + ${index}`} to={v.path}>
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={v.path === pathname}>
                <ListItemIcon>{v.icon}</ListItemIcon>
                <ListItemText primary={t(`Drawer.${v.name}`)} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Stack>
  )
}
