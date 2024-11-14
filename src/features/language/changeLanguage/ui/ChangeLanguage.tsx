import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import getCssStyles from './styles'
import { useTranslation } from 'react-i18next'
import { Paper } from '@mui/material'

const CustomSwitch = styled(Switch)(getCssStyles)

export function ChangeLanguage() {
  const { i18n } = useTranslation()
  const locale = i18n.language
  return (
    <Paper sx={{ backgroundColor: 'transparent', borderRadius: 4 }}>
      <CustomSwitch
        checked={locale === 'ru'}
        onClick={() => {
          void i18n.changeLanguage(locale === 'ru' ? 'en' : 'ru')
        }}
      />
    </Paper>
  )
}
