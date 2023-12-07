import type { Metadata } from 'next'

import { ReactNode } from 'react'

import { ApolloWrapper } from './ApolloWrapper'
import { ThemeRegistry } from './ThemeRegistry/ThemeRegistry'
import { roboto } from './ThemeRegistry/font'
import { AppBar } from './components/AppBar/AppBar'

export const metadata: Metadata = {
  title: 'Country Flag Quiz',
  description:
    'Welcome to the Flag Quiz! Test your knowledge of world flags in this fun quiz. Identify countries and their flags - it’s time for flag-tastic fun!',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className={roboto.className}>
      <ApolloWrapper>
        <ThemeRegistry>
          <AppBar />
          {children}
        </ThemeRegistry>
      </ApolloWrapper>
    </body>
  </html>
)

export default RootLayout
