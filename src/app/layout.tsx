import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Modern Dashboard',
    template: '%s | Modern Dashboard'
  },
  description: 'Professional dashboard with modern design and powerful features',
  keywords: ['dashboard', 'admin', 'react', 'nextjs', 'typescript', 'tailwind'],
  authors: [{ name: 'Dashboard Team' }],
  creator: 'Dashboard Team',
  publisher: 'Dashboard Team',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dashboard.example.com'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://dashboard.example.com',
    title: 'Modern Dashboard',
    description: 'Professional dashboard with modern design and powerful features',
    siteName: 'Modern Dashboard',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Modern Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Dashboard',
    description: 'Professional dashboard with modern design and powerful features',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 