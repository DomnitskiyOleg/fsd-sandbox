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
import NavLink from '../NavLink/NavLink'
import { useTranslation } from 'react-i18next'

const mainListItems = [
  { path: '/', name: 'Home', icon: <HomeRoundedIcon /> },
  { path: '/tasks', name: 'Tasks', icon: <AssignmentRoundedIcon /> },
]

const secondaryListItems = [
  { path: '/settings', name: 'Settings', icon: <SettingsRoundedIcon /> },
  { path: '/about', name: 'About', icon: <InfoRoundedIcon /> },
]

export default function MenuContent() {
  const { pathname } = useLocation()
  const {  t } = useTranslation()

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <NavLink key={item.path} to={item.path}>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={item.path === pathname}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <NavLink key={item.path} to={item.path}>
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={item.path === pathname}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Stack>
  )
}
