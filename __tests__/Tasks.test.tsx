import userEvent from '@testing-library/user-event'
import { screen, within } from '@testing-library/dom'
import { initI18n } from './mocks'
import { render } from './mocks'
import { TasksPage } from '@/pages/tasks'

beforeAll(async () => {
    await initI18n()
})

describe('Tasks page testing', () => {
    test('renders AddForm', () => {
        render(<TasksPage />)

        const addButton = screen.getByRole('button', { name: /add/i })
        expect(addButton).toBeInTheDocument()
    })

    test('adds task with title', async () => {
        render(<TasksPage />)

        const titleInput = screen.getByRole('textbox', { name: /name/i })
        const addButton = screen.getByRole('button', { name: /add/i })

        await userEvent.type(titleInput, 'test task1')
        await userEvent.click(addButton)

        const task = screen.getByText(/test task1/i)

        expect(task).toBeInTheDocument()
    })

    test('full form filling', async () => {
        const { asFragment } = render(<TasksPage />)

        const addButton = screen.getByRole('button', { name: /add/i })
        const titleInput = screen.getByRole('textbox', { name: /name/i })
        const desInput = screen.getByRole('textbox', { name: /description/i })
        const dateInput = screen.getByRole('textbox', { name: /complete by/i })

        await userEvent.type(titleInput, 'test task2')
        await userEvent.type(desInput, 'example description')
        await userEvent.type(dateInput, '12/17/2024')
        await userEvent.click(addButton)

        const task = screen.getByText(/test task2/i)
        const taskCard = task.closest('.task-card')

        expect(task).toBeInTheDocument()
        expect(taskCard).toBeInTheDocument()
        expect(taskCard).toContainElement(
            screen.getByText(/example description/i),
        )
        expect(taskCard).toContainElement(screen.getByText('17/12/2024'))
        expect(asFragment()).toMatchSnapshot()
    })

    test('filters tasks', async () => {
        render(<TasksPage />)

        const task1 = screen.getByText(/test task1/i)
        const task2 = screen.getByText(/test task2/i)

        const doneFilterButton = screen.getByRole('button', { name: /done/i })
        await userEvent.click(doneFilterButton)

        expect(task1).not.toBeInTheDocument()
        expect(task2).not.toBeInTheDocument()
    })

    test('starts tasks', async () => {
        render(<TasksPage />)

        const allFilterButton = screen.getByRole('button', { name: /all/i })
        const inProgressFilterButton = screen.getByRole('button', {
            name: /in progress/i,
        })

        await userEvent.click(allFilterButton)

        const task1 = screen.getByText(/test task1/i)
        const task1Card = task1.closest('.task-card') as HTMLElement

        const startButton = within(task1Card).getByRole('button', {
            name: /start/i,
        })

        await userEvent.click(startButton)
        await userEvent.click(inProgressFilterButton)

        expect(task1).toBeInTheDocument()
    })

    test('deletes tasks', async () => {
        render(<TasksPage />)

        const allFilterButton = screen.getByRole('button', { name: /all/i })
        await userEvent.click(allFilterButton)

        const task1 = screen.getByText(/test task1/i)
        const task2 = screen.getByText(/test task2/i)

        const task1Card = task1.closest('.task-card') as HTMLElement
        const task2Card = task2.closest('.task-card') as HTMLElement

        const deleteButton1 = within(task1Card).getByRole('button', {
            name: /delete/i,
        })
        const deleteButton2 = within(task2Card).getByRole('button', {
            name: /delete/i,
        })

        await userEvent.click(deleteButton1)
        await userEvent.click(deleteButton2)

        expect(task1).not.toBeInTheDocument()
        expect(task2).not.toBeInTheDocument()
    })
})
