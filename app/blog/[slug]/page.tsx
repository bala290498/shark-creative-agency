import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPosts } from '@/lib/blog'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const posts = getAllPosts()
    const params = posts.map((post) => ({
      slug: post.slug,
    }))
    console.log('Generated static params for blog posts:', params.map(p => p.slug))
    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = params.slug
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Shark Creative Agency Blog`,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      url: `https://sharkcreativeagency.com/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      siteName: 'Shark Creative Agency',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const slug = params.slug
  const post = getPostBySlug(slug)

  if (!post) {
    console.error(`Blog post not found for slug: ${slug}`)
    notFound()
  }

  return (
    <>
      {/* Hero Section with Image */}
      <section className="bg-white text-gray-900">
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <Image
            src={post.image || 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'}
            alt={post.title || 'Blog post image'}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-screen-lg py-8 md:py-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm sm:text-base">Back to Blog</span>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-medium text-secondary-500 bg-secondary-500/10 px-3 py-1 rounded">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'No date'}</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-4 text-gray-900">
              {post.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
              <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900">{post.author}</p>
                <p className="text-xs sm:text-sm text-gray-500">Author</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-8 text-gray-900">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-bold mb-3 mt-6 text-gray-900">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-semibold mb-2 mt-4 text-gray-900">{children}</h3>,
                  p: ({ children }) => <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                  li: ({ children }) => <li className="text-base sm:text-lg">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                  a: ({ href, children }) => (
                    <a href={href} className="text-secondary-500 hover:text-secondary-600 underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 text-secondary-500 px-2 py-1 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-secondary-500 pl-4 italic text-gray-600 my-4">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Enjoyed This Article?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto px-4">
            Check out more insights and tips on our blog.
          </p>
          <div className="flex justify-center">
            <Link href="/blog" className="btn-secondary-gradient inline-block w-full sm:w-auto px-12">
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

