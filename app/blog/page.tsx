import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

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
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Design: Trends to Watch in 2025',
      excerpt: 'Discover the latest web design trends that will shape the digital landscape in 2025. From AI-powered interfaces to immersive experiences.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      author: 'Sarah Johnson',
      date: '2024-12-15',
      readTime: '5 min read',
      category: 'Web Design',
    },
    {
      id: 2,
      title: 'Building a Strong Brand Identity: Essential Strategies',
      excerpt: 'Learn how to create a memorable brand identity that resonates with your audience and stands out in a competitive market.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      author: 'Michael Chen',
      date: '2024-12-10',
      readTime: '7 min read',
      category: 'Branding',
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies That Drive Results',
      excerpt: 'Explore proven digital marketing strategies that can help your business grow and reach your target audience effectively.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      author: 'Emily Rodriguez',
      date: '2024-12-05',
      readTime: '6 min read',
      category: 'Marketing',
    },
    {
      id: 4,
      title: 'The Power of User Experience in Modern Web Design',
      excerpt: 'Understand why user experience is crucial for your website\'s success and how to implement UX best practices.',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop',
      author: 'Sarah Johnson',
      date: '2024-11-28',
      readTime: '8 min read',
      category: 'Web Design',
    },
    {
      id: 5,
      title: 'SEO Optimization: A Complete Guide for 2025',
      excerpt: 'Master the art of SEO optimization with our comprehensive guide covering the latest techniques and best practices.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c82c?w=800&h=600&fit=crop',
      author: 'Michael Chen',
      date: '2024-11-20',
      readTime: '10 min read',
      category: 'SEO',
    },
    {
      id: 6,
      title: 'Creating Compelling Content That Converts',
      excerpt: 'Learn how to create content that not only engages your audience but also drives conversions and builds trust.',
      image: 'https://images.unsplash.com/photo-1456324504439-3673e3850211?w=800&h=600&fit=crop',
      author: 'Emily Rodriguez',
      date: '2024-11-15',
      readTime: '6 min read',
      category: 'Content',
    },
  ]

  const categories = ['All', 'Web Design', 'Branding', 'Marketing', 'SEO', 'Content']

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

      {/* Category Filter */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-tiger-orange text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs sm:text-sm font-medium text-tiger-orange bg-tiger-orange/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-tiger-orange font-medium text-sm sm:text-base">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-tiger-orange to-tiger-orange-600 rounded-2xl p-8 md:p-12 text-white">
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
                className="bg-white text-tiger-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
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

