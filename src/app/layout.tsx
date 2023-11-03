import type { Metadata } from 'next'

import { ReactNode } from 'react'
import { ApolloWrapper } from './ApolloWrapper'
import { ThemeRegistry } from './ThemeRegistry/ThemeRegistry'
import { roboto } from './ThemeRegistry/font'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </head>
    <body className={roboto.className}>
      <ApolloWrapper>
        <ThemeRegistry>{children}</ThemeRegistry>
      </ApolloWrapper>
    </body>
  </html>
)

export default RootLayout
