import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout'
import { Container } from '@mui/material'

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <div>Home</div>,
        index: true,
      },
      {
        path: '/tasks',
        element: (
          <Container
            // sx={{ backgroundColor: 'green' }}
            maxWidth='xl'
          >
            tasks
          </Container>
        ),
      },
      {
        path: '/about',
        element: <div>developer</div>,
      },
    ],
  },
])
