import {
    Card,
    Stack,
    Typography,
    colors,
    Divider,
    Box,
    useColorScheme,
} from '@mui/material'
import dayjs from 'dayjs'
import { Carrier, ITicket } from '../model/types'
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined'
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined'
import 'dayjs/locale/ru'
import { useTranslation } from 'react-i18next'
import { ReactNode } from 'react'
import styles from './styles'

type Props = {
    ticket: ITicket
    buySlot?: ReactNode
}

export function TicketCard(props: Props) {
    const { t, i18n } = useTranslation('tickets')
    const { mode } = useColorScheme()
    const locale = i18n.language
    const { ticket, buySlot } = props

    return (
        <Card elevation={4} sx={styles.card}>
            <Stack
                display='flex'
                flex={1}
                direction={{ xs: 'column', sm: 'row' }}
            >
                <Stack
                    display='flex'
                    flex={1}
                    maxWidth={{ xs: '100%', sm: '35%', lg: '30%' }}
                    direction={{ xs: 'row', sm: 'column' }}
                    gap={3}
                    p={3}
                    alignItems={{ xs: 'center', sm: 'normal' }}
                >
                    <Stack
                        flex={1}
                        gap={{ xs: 3, sm: 1 }}
                        direction={{
                            xs: 'row',
                            sm: 'row',
                            md: 'column-reverse',
                            lg: 'row',
                        }}
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Typography
                            textAlign={{
                                xs: 'center',
                                sm: 'start',
                                md: 'center',
                                lg: 'start',
                            }}
                            variant='h5'
                            fontWeight={700}
                            color={
                                mode === 'dark'
                                    ? colors.blue[500]
                                    : colors.blue[900]
                            }
                        >
                            {t(`TicketCard.carrier.${ticket.carrier}`)}
                        </Typography>
                        <img
                            style={{ width: 50, height: 50 }}
                            src={`/assets/tickets/${
                                Carrier[ticket.carrier]
                            }.png`}
                        />
                    </Stack>

                    {buySlot}
                </Stack>
                <Divider orientation='horizontal' flexItem />
                <Divider orientation='vertical' flexItem />
                <Stack p={3} flex={1}>
                    <Stack
                        gap={3}
                        display='flex'
                        direction='row'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Typography variant='h4'>
                            {ticket.departure_time}
                        </Typography>

                        <Stack flex={1} pb={1}>
                            <Typography
                                textAlign='center'
                                variant='body2'
                                color='textSecondary'
                            >
                                {t('TicketCard.stops.stop', {
                                    count: ticket.stops,
                                })}
                            </Typography>
                            <Stack
                                gap={1}
                                flex={1}
                                direction='row'
                                alignItems='center'
                            >
                                <FlightTakeoffOutlinedIcon
                                    sx={styles.iconDeparture}
                                />
                                <Box flex={1} sx={styles.divider} />
                                <FlightLandOutlinedIcon
                                    sx={styles.iconArrival}
                                />
                            </Stack>
                        </Stack>
                        <Typography variant='h4'>
                            {ticket.arrival_time}
                        </Typography>
                    </Stack>
                    <Stack
                        flex={1}
                        justifyContent='space-between'
                        direction='row'
                    >
                        <Stack alignItems='start'>
                            <Typography variant='body1'>
                                {`${ticket.origin}, ${ticket.origin_name}`}
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                {dayjs(ticket.departure_date, 'DD.MM.YY')
                                    .locale(locale)
                                    .format('D MMM YYYY, dd')}
                            </Typography>
                        </Stack>
                        <Stack alignItems='end'>
                            <Typography variant='body1'>
                                {`${ticket.destination}, ${ticket.destination_name}`}
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                {dayjs(ticket.arrival_date, 'DD.MM.YY')
                                    .locale(locale)
                                    .format('D MMM YYYY, dd')}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    )
}
