import '@/styles/globals.css'
import 'animate.css';
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import { LanguageProvider } from '../localization'
import { theme } from '../theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <ThemeProvider theme={theme}>
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  </ThemeProvider>
}

export default MyApp
