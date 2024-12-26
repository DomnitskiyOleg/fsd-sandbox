export enum Carrier {
    TK = 'turkish-airlines',
    SU = 'aeroflot',
    S7 = 's7-airlines',
    BA = 'british-airways',
}

export interface ITicket {
    origin: string
    origin_name: string
    destination: string
    destination_name: string
    departure_date: string
    departure_time: string
    arrival_date: string
    arrival_time: string
    carrier: keyof typeof Carrier
    stops: number
    price: number
}
