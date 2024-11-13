import { ChangeTheme } from '@/features/theme/changeTheme'
import { LayoutHeaderBase } from '@/shared/ui/Layout'

export const LayoutHeader = (
  <LayoutHeaderBase
    switchLanguageSlot={null}
    switchThemeSlot={<ChangeTheme />}
  />
)
