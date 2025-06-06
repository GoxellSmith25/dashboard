import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'ModernDash - Next.js Dashboard',
    template: '%s | ModernDash'
  },
  description: 'Professional dashboard with modern design and powerful features',
  keywords: ['dashboard', 'admin', 'react', 'nextjs', 'typescript', 'tailwind'],
  authors: [{ name: 'GoxellSmith25' }],
  creator: 'GoxellSmith25',
  publisher: 'ModernDash',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dashboard-6qnftikw3-goxell-smith.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://dashboard-6qnftikw3-goxell-smith.vercel.app',
    title: 'ModernDash - Next.js Dashboard',
    description: 'Professional dashboard with modern design and powerful features',
    siteName: 'ModernDash',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ModernDash Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModernDash - Next.js Dashboard',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 