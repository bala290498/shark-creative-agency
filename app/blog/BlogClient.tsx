'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

interface BlogClientProps {
  posts: BlogPost[]
  categories: string[]
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <>
      {/* Category Filter */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                  category === selectedCategory
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
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="block cursor-pointer"
                    prefetch={true}
                  >
                    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                      <Image
                        src={post.image || 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'}
                        alt={post.title || 'Blog post image'}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs sm:text-sm font-medium text-tiger-orange bg-tiger-orange/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'No date'}</span>
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
          )}
        </div>
      </section>
    </>
  )
}


