import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest insights on web design, branding, digital marketing, and creative strategies. Stay updated with tips, trends, and expert advice from Shark Creative Agency.',
  openGraph: {
    type: 'website',
    url: 'https://sharkcreativeagency.com/blog',
    title: 'Blog | Shark Creative Agency',
    description: 'Read our latest insights on web design, branding, digital marketing, and creative strategies.',
    siteName: 'Shark Creative Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog - Shark Creative Agency',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Shark Creative Agency',
    description: 'Read our latest insights on web design, branding, digital marketing, and creative strategies.',
    images: ['/og-image.png'],
  },
}

export default function Blog() {
  const blogPosts = getAllPosts()
  const categories = getAllCategories()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
              Our Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
              Insights, tips, and strategies to help you succeed in the digital world
            </p>
          </div>
        </div>
      </section>

      <BlogClient posts={blogPosts} categories={categories} />

      {/* Newsletter Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center gradient-secondary rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-secondary-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

