import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import initTranslations from './i18n'

async function initApp() {
  await initTranslations()

  // render after i18n initialization
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// launch app
initApp()
