import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const initI18n = async () => {
  await i18n
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      resources: translations,
      interpolation: {
        escapeValue: false,
      },
    })
}

const translations = {
  en: {
    tasks: {
      title: 'Tasks',
      AddTaskForm: {
        nameLabel: 'Task name',
        descriptionLabel: 'Description',
        dateLabel: 'Complete by',
        addButton: 'Add',
        resetButton: 'Reset',
      },
      TaskCard: {
        noDescription: 'No description',
        completeButton: 'Complete',
        startButton: 'Start',
        deleteButton: 'Delete',
        todo: 'todo',
        inProgress: 'in progress',
        done: 'done',
      },
      TasksFilter: {
        all: 'All',
        todo: 'To do',
        inProgress: 'In progress',
        done: 'Done',
      },
    },
  },
}
