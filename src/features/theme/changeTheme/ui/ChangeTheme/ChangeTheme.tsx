import { styled, useColorScheme } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import getCssStyles from './styles'

const CustomSwitch = styled(Switch)(getCssStyles)

export function ChangeTheme() {
  const { mode, setMode } = useColorScheme()
  return (
    <CustomSwitch
      checked={mode === 'dark'}
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    />
  )
}
