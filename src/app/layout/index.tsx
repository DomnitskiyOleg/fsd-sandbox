import { LayoutMain } from '@/shared/ui'

import AppNavbar from './components/AppNavbar'
import { LayoutHeader, SideMenu } from '@/widgets/layouts'
import { ContactCard } from '@/widgets/developer'

export default (
    <LayoutMain
        headerSlot={LayoutHeader}
        sideMenuSlot={<SideMenu contactCardSlot={<ContactCard />} />}
        appNavbarSlot={<AppNavbar />}
    />
)
