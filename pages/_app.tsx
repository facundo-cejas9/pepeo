import 'styles/components.css'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { lightTheme } from '../themes'
import { UIProvider } from '../context/ui/UIProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </UIProvider>
  )
}

export default MyApp
