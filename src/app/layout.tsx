import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { ApolloWrapper } from './ApolloWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <ApolloWrapper>{children}</ApolloWrapper>
    </body>
  </html>
)

export default RootLayout
