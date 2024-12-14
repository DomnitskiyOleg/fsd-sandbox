import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import { NotFoundPage } from '@/pages/notFound'
import { TasksPage } from '@/pages/tasks'
import { DevelopingPage } from '@/pages/developing'

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
