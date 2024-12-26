import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Currency {
    USD = 'usd',
    EUR = 'eur',
    RUB = 'rub',
}

type SettingsState = {
    currency: Currency
    stopsFilter: number[] | null
}

const initialState: SettingsState = {
    currency: Currency.RUB,
    stopsFilter: null,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setCurrency(state, action: PayloadAction<Currency>) {
            state.currency = action.payload
        },
        setStopsFilter(state, action: PayloadAction<number[] | null>) {
            state.stopsFilter = action.payload
        },
    },
})

export const selectTicketSettings = (state: {
    ticketsSettings: SettingsState
}) => state.ticketsSettings
export const { setCurrency, setStopsFilter } = settingsSlice.actions
export default settingsSlice.reducer
