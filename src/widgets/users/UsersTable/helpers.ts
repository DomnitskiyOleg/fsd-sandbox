export function formatPhoneForGrid(phone: string): string {
    const trimmed = phone.trim()
    if (trimmed.startsWith('+7')) return trimmed
    if (trimmed.startsWith('7')) return `+${trimmed}`
    return `+7${trimmed}`
}
