import { store } from '@/app/Store'
import { render as testRender } from '@testing-library/react'
import { ReactNode } from 'react'
import { Provider as StoreProvider } from 'react-redux'

export const render = (component: ReactNode) =>
    testRender(<StoreProvider store={store}>{component}</StoreProvider>)
