import { Currency } from '../model/slice'

type CurrencyRates = {
    [Currency.USD]: number
    [Currency.EUR]: number
}
const CURRENCY_RATES: CurrencyRates = {
    [Currency.USD]: 100,
    [Currency.EUR]: 120,
}

export const getTicketPrice = (
    rawPrice: number,
    currency: Currency,
    locale: string,
) => {
    switch (currency) {
        case Currency.USD:
            return `${Math.round(
                rawPrice / CURRENCY_RATES[Currency.USD],
            ).toLocaleString(locale)}$`
        case Currency.EUR:
            return `${Math.round(
                rawPrice / CURRENCY_RATES[Currency.EUR],
            ).toLocaleString(locale)}€`

        default:
            return `${rawPrice.toLocaleString(locale)}₽`
    }
}
