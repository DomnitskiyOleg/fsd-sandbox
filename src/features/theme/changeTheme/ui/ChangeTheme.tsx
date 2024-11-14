import { styled, useColorScheme } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import getCssStyles from './styles'
import { Paper } from '@mui/material'

const CustomSwitch = styled(Switch)(getCssStyles)

export function ChangeTheme() {
  const { mode, setMode } = useColorScheme()

  return (
    <Paper sx={{ backgroundColor: 'transparent', borderRadius: 4 }}>
      <CustomSwitch
        checked={mode === 'dark'}
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light')
        }}
      />
    </Paper>
  )
}
