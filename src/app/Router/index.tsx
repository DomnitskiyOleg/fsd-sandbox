import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <div>123</div>,
        index: true,
      },
      {
        path: '/company',
        element: <div>company</div>,
      },
    ],
  },
])
