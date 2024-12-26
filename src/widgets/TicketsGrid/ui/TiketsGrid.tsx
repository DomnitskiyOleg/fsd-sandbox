import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid2'
import { selectTickets, TicketCard } from '@/entities/ticket'
import 'dayjs/locale/ru'
import {
    getTicketPrice,
    selectTicketSettings,
    TicketsSettings,
} from '@/features/ticket/settings'
import styles from './styles'
import { useMemo } from 'react'
import { BuyButton } from '@/features/ticket/buy'
import { useTranslation } from 'react-i18next'

export function TicketsGrid() {
    const tickets = useSelector(selectTickets)
    const { stopsFilter, currency } = useSelector(selectTicketSettings)

    const filteredTickets = useMemo(() => {
        if (!stopsFilter || !stopsFilter.length) return tickets
        return tickets.filter((v) => stopsFilter.includes(v.stops))
    }, [tickets, stopsFilter])

    const { t, i18n } = useTranslation('tickets')
    const locale = i18n.language

    return (
        <Container sx={{ mt: 4 }} maxWidth='xl'>
            <Grid
                columnSpacing={3}
                rowSpacing={3}
                sx={{ mt: 1 }}
                container
                spacing={1}
            >
                <Grid
                    size={{ xs: 12, md: 12, lg: 3 }}
                    sx={styles.settingsColumn}
                >
                    <TicketsSettings />
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 9 }}>
                    {filteredTickets.map((v, i) => (
                        <TicketCard
                            buySlot={
                                <BuyButton
                                    price={t('TicketsGrid.buyText', {
                                        price: getTicketPrice(
                                            v.price,
                                            currency,
                                            locale,
                                        ),
                                    })}
                                />
                            }
                            key={i}
                            ticket={v}
                        />
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}
