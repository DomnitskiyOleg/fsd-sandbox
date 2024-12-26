import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import { NotFoundPage } from '@/pages/notFound'
import { TasksPage } from '@/pages/tasks'
import { DevelopingPage } from '@/pages/developing'
import { TicketsPage } from '@/pages/tickets'

export default createBrowserRouter([
    {
        path: '/',
        element: Layout,
        children: [
            {
                element: <DevelopingPage />,
                index: true,
            },
            {
                path: '/tasks',
                element: <TasksPage />,
            },
            {
                path: '/tickets',
                element: <TicketsPage />,
            },
            {
                path: '/about',
                element: <DevelopingPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
])
