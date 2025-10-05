import { ChangeLanguage } from '@/features/language/changeLanguage'
import { ChangeTheme } from '@/features/theme/changeTheme'
import { AppNavbarBase } from '@/shared/ui'
import { ContactCard } from '@/widgets/developer'
import { SideMenuMobile } from '@/widgets/layouts'

import { useState } from 'react'

export default function AppNavbar() {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <AppNavbarBase
            toggleDrawer={toggleDrawer}
            switchLanguageSlot={<ChangeLanguage />}
            switchThemeSlot={<ChangeTheme />}
            sideMenuMobileSlot={
                <SideMenuMobile
                    open={open}
                    contactCard={<ContactCard />}
                    toggleDrawer={toggleDrawer(false)}
                />
            }
        />
    )
}
