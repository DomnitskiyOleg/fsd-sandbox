import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout'
import { NotFoundPage } from '@/pages/notFound'
import { TasksPage } from '@/pages/tasks'
import { DevelopingPage } from '@/pages/developing'
import { TicketsPage } from '@/pages/tickets'
import { DeveloperPage } from '@/pages/developer'
import { UsersPage } from '@/pages/users/ui/Page'

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
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/about',
        element: <DevelopingPage />,
      },
      {
        path: '/developer',
        element: <DeveloperPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
