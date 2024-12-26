import {
    Card,
    Stack,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material'
import styles from './styles'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
    Currency,
    selectTicketSettings,
    setCurrency,
    setStopsFilter,
} from '../model/slice'
import { useCallback, useState, MouseEvent } from 'react'

const CHECKBOXES = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }]

export function TicketsSettings() {
    const { stopsFilter, currency } = useSelector(selectTicketSettings)
    const dispatch = useDispatch()
    const { t } = useTranslation('tickets')

    const [checkedAll, setChekedAll] = useState(false)

    const handleCheck = useCallback(
        (newValue: number | null) => {
            if (newValue === null) {
                dispatch(setStopsFilter(null))
                setChekedAll(!checkedAll)
                return
            }
            const stopsFilterState = stopsFilter ? stopsFilter : []
            const newState = stopsFilterState.includes(newValue)
                ? stopsFilterState.filter((v) => v !== newValue)
                : [...stopsFilterState, newValue]

            setChekedAll(false)
            dispatch(setStopsFilter(newState))
        },
        [stopsFilter, checkedAll],
    )

    const handleChange = useCallback(
        (_: MouseEvent<HTMLElement>, value: Currency) => {
            if (!value) return
            dispatch(setCurrency(value))
        },
        [],
    )

    return (
        <Card elevation={4} sx={styles.card}>
            <Stack gap={3}>
                <Stack gap={1}>
                    <Typography variant='body2' textTransform='uppercase'>
                        {t('TicketsSettings.currencyLabel')}
                    </Typography>
                    <ToggleButtonGroup
                        color='primary'
                        fullWidth
                        aria-label='currency'
                        value={currency}
                        exclusive
                        onChange={handleChange}
                    >
                        {Object.values(Currency).map((v) => (
                            <ToggleButton key={v} value={v}>
                                {v.toUpperCase()}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Stack>
                <Stack gap={1}>
                    <Typography variant='body2' textTransform='uppercase'>
                        {t('TicketsSettings.stopsLabel')}
                    </Typography>
                    <FormGroup sx={styles.form}>
                        <FormControlLabel
                            checked={checkedAll}
                            onChange={() => {
                                handleCheck(null)
                            }}
                            control={<Checkbox />}
                            label={
                                <Typography variant='body2'>
                                    {t(`TicketsSettings.stops.all`)}
                                </Typography>
                            }
                        />
                        {CHECKBOXES.map((v, i) => {
                            const checked =
                                stopsFilter === null
                                    ? false
                                    : stopsFilter.includes(v.value)

                            return (
                                <FormControlLabel
                                    key={i}
                                    checked={checked}
                                    onChange={() => {
                                        handleCheck(v.value)
                                    }}
                                    control={<Checkbox />}
                                    label={
                                        <Typography variant='body2'>
                                            {t('TicketsSettings.stops.stop', {
                                                count:
                                                    v.value !== null
                                                        ? v.value
                                                        : undefined,
                                            })}
                                        </Typography>
                                    }
                                />
                            )
                        })}
                    </FormGroup>
                </Stack>
            </Stack>
        </Card>
    )
}
