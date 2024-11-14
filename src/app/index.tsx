import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import initTranslations from './i18n'

async function initApp() {
  // ш18
  await initTranslations()

  // После завершения инициализации рендерьте приложение
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Запустите инициализацию приложения
void initApp()
