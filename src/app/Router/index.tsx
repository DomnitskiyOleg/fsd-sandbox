import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import { NotFoundPage } from '@/pages/notFound'
import { TasksPage } from '@/pages/tasks'

export default createBrowserRouter([
  {
    path: '/',
    element: Layout,
    children: [
      {
        element: <div>Home</div>,
        index: true,
      },
      {
        path: '/tasks',
        element: <TasksPage />,
      },
      {
        path: '/about',
        element: <div>developer</div>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
