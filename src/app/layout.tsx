import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HashHead.io - X1 & Xen Ecosystem Hub',
  description: 'Your central hub for XenBlocks mining tools, X1 development resources, and community projects.',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-darker text-text-primary antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
} 