import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { initI18n } from './mocks'

import { Provider as StoreProvider } from 'react-redux'
import { store } from '@/app/Store'
import { TasksPage } from '@/pages/tasks'
import { ReactNode } from 'react'

beforeAll(async () => {
  await initI18n()
})

const renderTasks = (TasksComponent: ReactNode) =>
  render(<StoreProvider store={store}>{TasksComponent}</StoreProvider>)

describe('Tasks page testing', () => {
  test('renders the heading Vite + React', () => {
    const { asFragment } = renderTasks(<TasksPage />)

    const addButton = screen.getByRole('button', { name: /add/i })
    fireEvent.click(addButton)
    expect(addButton).toBeInTheDocument()
    expect(true).toBeTruthy()
    expect(asFragment()).toMatchSnapshot();
  })

  // test('renders the initial count value of 0', () => {
  //   render(<App />)
  //   const countButton = screen.getByRole('button', { name: /count is 0/i })
  //   expect(countButton).toBeInTheDocument()
  // })

  // test('increments the count when the button is clicked', () => {
  //   render(<App />)
  //   const countButton = screen.getByRole('button', { name: /count is 0/i })

  //   fireEvent.click(countButton)
  //   expect(countButton).toHaveTextContent('count is 1')

  //   fireEvent.click(countButton)
  //   expect(countButton).toHaveTextContent('count is 2')
  // })

  // test('renders the "read the docs" paragraph', () => {
  //   render(<App />)
  //   const docsParagraph = screen.getByText(
  //     /Click on the Vite and React logos to learn more/i,
  //   )
  //   expect(docsParagraph).toBeInTheDocument()
  // })
})
