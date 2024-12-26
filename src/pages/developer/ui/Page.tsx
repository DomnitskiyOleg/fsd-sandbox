import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const SOCIALS = [
    {
        name: 'linkedin.com/in/domnitskiy-oleg',
        link: 'https://www.linkedin.com/in/domnitskiy-oleg/',
    },
]

export function DeveloperPage() {
    const { t } = useTranslation()
    const { pathname } = useLocation()

    return (
        <Container>
            <Grid sx={{ mt: 1 }} container spacing={1}>
                <Grid size={{ xs: 12, lg: 6, xl: 5 }}></Grid>
                <Grid size={{ xs: 12, lg: 6, xl: 7 }}></Grid>
            </Grid>
        </Container>
    )
}
