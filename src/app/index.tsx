import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import initTranslations from './i18n'

async function initApp() {
  await initTranslations()

  // После завершения инициализации i18n рендер приложения
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Запуск инициализацию приложения
void initApp()
