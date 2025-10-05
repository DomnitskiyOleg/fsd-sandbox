export function cleanPhone(phone: string): string {
    let digits = String(phone).replace(/\D+/g, '')
    if (digits.length === 11 && /^[78]/.test(digits)) {
        digits = digits.slice(1)
    }

    return digits
}
