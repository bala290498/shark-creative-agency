import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
import { MapPin, Users, Clock, ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getInternshipBySlug, getAllInternships } from '@/lib/internships'

interface InternshipPostPageProps {
  params: {
    slug: string
  }
}

// Force static generation at build time
export const dynamic = 'force-static'

export async function generateStaticParams() {
  try {
    const internships = getAllInternships()
    const params = internships.map((internship) => ({
      slug: internship.slug,
    }))
    console.log('Generated static params for internships:', params.map(p => p.slug))
    return params
  } catch (error) {
    console.error('Error generating static params for internships:', error)
    return []
  }
}

export async function generateMetadata({ params }: InternshipPostPageProps): Promise<Metadata> {
  const slug = params.slug
  const internship = getInternshipBySlug(slug)

  if (!internship) {
    return {
      title: 'Internship Not Found',
    }
  }

  return {
    title: `${internship.title} | Shark Creative Agency Internships`,
    description: internship.description,
    openGraph: {
      type: 'article',
      url: `https://sharkcreativeagency.com/internship/${internship.slug}`,
      title: internship.title,
      description: internship.description,
      siteName: 'Shark Creative Agency',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: internship.title,
      description: internship.description,
    },
  }
}

export default function InternshipPost({ params }: InternshipPostPageProps) {
  const slug = params.slug
  const internship = getInternshipBySlug(slug)

  if (!internship) {
    console.error(`Internship position not found for slug: ${slug}`)
    notFound()
  }

  return (
    <>
      <PageBanner 
        title={internship.title} 
        description={internship.description}
      />
      <section className="bg-white text-gray-900 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <Link 
            href="/internship" 
            className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm sm:text-base">Back to Internships</span>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {internship.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-secondary-500" />
                {internship.department}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-secondary-500" />
                {internship.location}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-secondary-500" />
                {internship.duration}
              </span>
            </div>

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
                {internship.content}
              </ReactMarkdown>
            </article>

            <div className="mt-8 text-center">
              <a 
                href={`mailto:internships@sharkcreativeagency.com?subject=Internship Application for ${internship.title}`}
                className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto px-12"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

