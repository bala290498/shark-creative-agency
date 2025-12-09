import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageBanner from '@/components/PageBanner'
import Link from 'next/link'
import { MapPin, Globe, Clock, ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPositionBySlug, getAllPositions } from '@/lib/positions'

interface PositionPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const positions = getAllPositions()
    return positions.map((position) => ({
      slug: position.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: PositionPageProps): Promise<Metadata> {
  const slug = params.slug
  const position = getPositionBySlug(slug)

  if (!position) {
    return {
      title: 'Position Not Found',
    }
  }

  return {
    title: `${position.title} | Careers - Shark Creative Agency`,
    description: position.description,
    openGraph: {
      type: 'article',
      url: `https://sharkcreativeagency.com/careers/${position.slug}`,
      title: position.title,
      description: position.description,
      siteName: 'Shark Creative Agency',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title: position.title,
      description: position.description,
    },
  }
}

export default function PositionPage({ params }: PositionPageProps) {
  const slug = params.slug
  const position = getPositionBySlug(slug)

  if (!position) {
    notFound()
  }

  return (
    <>
      <PageBanner 
        title={position.title} 
        description={position.description}
      />
      
      <section className="bg-white text-gray-900 site-section pt-20 md:pt-16">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <Link 
            href="/careers" 
            className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm sm:text-base">Back to Careers</span>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {position.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm sm:text-base text-gray-600">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-secondary-500" />
                  {position.department}
                </span>
                <span className="flex items-center">
                  <Globe className="w-4 h-4 mr-2 text-secondary-500" />
                  {position.location}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-secondary-500" />
                  {position.type}
                </span>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                {position.description}
              </p>
              
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Requirements:</h2>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {position.content && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-6">
                <article className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6 text-gray-900">{children}</h1>,
                      h2: ({ children }) => <h2 className="text-xl sm:text-2xl font-semibold mb-3 mt-6 text-gray-900">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-4 text-gray-900">{children}</h3>,
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
                    }}
                  >
                    {position.content}
                  </ReactMarkdown>
                </article>
              </div>
            )}
            
            <div className="text-center">
              <a 
                href={`mailto:careers@sharkcreativeagency.com?subject=Application for ${position.title}`}
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

