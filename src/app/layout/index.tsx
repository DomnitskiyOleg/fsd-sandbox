import { LayoutMain } from '@/shared/ui'
import { SideMenu } from '@/widgets/SideMenu'
import { ContactCard } from '@/widgets/ContactCard'
import { LayoutHeader } from '@/widgets/LayoutHeader'
import AppNavbar from './components/AppNavbar'

export default (
  <LayoutMain
    headerSlot={LayoutHeader}
    sideMenuSlot={<SideMenu contactCardSlot={<ContactCard />} />}
    appNavbarSlot={<AppNavbar />}
  />
)
