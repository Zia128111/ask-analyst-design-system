import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DirectionProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import './theme/fonts.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import './index.css'
import './theme/density.css'
import './theme/print.css'
import App from './App.tsx'
import { theme, cssVariablesResolver } from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* DirectionProvider drives dir="rtl" for the Ask Analyst Saudi build.
        Every component uses logical properties, so mirroring needs no second
        stylesheet — enforced by scripts/verify-rtl.mjs. */}
    <DirectionProvider>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        defaultColorScheme="light"
      >
      {/* Toasts render on the toast z-index rung, above overlays. */}
        <Notifications position="bottom-right" limit={3} />
        <App />
      </MantineProvider>
    </DirectionProvider>
  </StrictMode>,
)
