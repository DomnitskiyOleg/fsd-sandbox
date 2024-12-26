import { ReactNode, useEffect, useRef, useState } from 'react'

export function ScrollContainer({ children }: { children: ReactNode }) {
    const parentRef = useRef(null)
    const [parentWidth, setParentWidth] = useState(0)

    useEffect(() => {
        if (!parentRef.current) return () => {}
        const container = parentRef.current as HTMLDivElement
        const resizeObserver = new ResizeObserver(() => {
            setParentWidth(container.offsetWidth - 48)
        })

        resizeObserver.observe(parentRef.current)

        return () => {
            resizeObserver.unobserve(container)
        }
    }, [parentRef])

    return (
        <div
            ref={parentRef}
            style={{ width: '100%', paddingLeft: 24, maxWidth: 1536 }}
        >
            <div
                style={{
                    width: parentWidth,
                    overflowX: 'auto',
                }}
            >
                {children}
            </div>
        </div>
    )
}
