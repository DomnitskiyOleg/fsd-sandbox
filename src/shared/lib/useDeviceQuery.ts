import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

export const useDeviceQuery = () => {
  const theme = useTheme()
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'))
  return { isMobile, isMedium }
}
