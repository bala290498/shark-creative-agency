import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  metadataBase: new URL('https://sharkcreativeagency.com'),
  title: {
    default: 'Shark Creative Agency - Innovative Digital Solutions',
    template: '%s | Shark Creative Agency'
  },
  description: 'Shark Creative Agency delivers cutting-edge digital solutions including web design, branding, marketing, and creative services. Transform your brand with our expert team.',
  keywords: ['creative agency', 'web design', 'branding', 'digital marketing', 'graphic design', 'SEO', 'social media marketing'],
  authors: [{ name: 'Shark Creative Agency' }],
  creator: 'Shark Creative Agency',
  publisher: 'Shark Creative Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sharkcreativeagency.com',
    siteName: 'Shark Creative Agency',
    title: 'Shark Creative Agency - Innovative Digital Solutions',
    description: 'Transform your brand with cutting-edge digital solutions from Shark Creative Agency.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shark Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shark Creative Agency - Innovative Digital Solutions',
    description: 'Transform your brand with cutting-edge digital solutions from Shark Creative Agency.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

