import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bleon Co - Technology Solutions & Innovation',
  description: 'Bleon Co Ltd is a leading technology company providing innovative solutions, VTU services, and digital transformation services. Based in Umuahia, Abia State, Nigeria.',
  keywords: 'technology, VTU services, digital solutions, innovation, Nigeria, Bleon',
  authors: [{ name: 'Bleon Co Ltd' }],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Bleon Co - Technology Solutions & Innovation',
    description: 'Leading technology company providing innovative solutions and VTU services',
    url: 'https://bleon.co',
    siteName: 'Bleon Co Ltd',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo_no_bg.png',
        width: 1200,
        height: 630,
        alt: 'Bleon Co Ltd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bleon Co - Technology Solutions & Innovation',
    description: 'Leading technology company providing innovative solutions and VTU services',
    images: ['/logo_no_bg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
