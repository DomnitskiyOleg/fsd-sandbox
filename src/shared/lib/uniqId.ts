/**
 * Returns the smallest available numeric ID for an array of objects with an `id` field.
 * Suitable for large arrays and arrays with gaps in the IDs.
 *
 * @param items - array of objects with a numeric `id` property
 * @returns the next unique numeric ID
 */
// O(n)
export function uniqId<T extends { id: number }>(items: T[]): number {
    if (!items || items.length === 0) return 1

    const idSet = new Set(items.map((item) => item.id))
    let nextId = 1

    while (idSet.has(nextId)) {
        nextId = nextId += 1
    }

    return nextId
}
