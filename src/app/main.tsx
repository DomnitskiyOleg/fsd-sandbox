import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import initTranslations from './i18n'

await initTranslations()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
