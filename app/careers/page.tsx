import type { Metadata } from 'next'
import Link from 'next/link'
import { DollarSign, Building2, Umbrella, Home, BookOpen, Zap, MapPin, Globe, Clock } from 'lucide-react'
import PageBanner from '@/components/PageBanner'
import { getAllPositions } from '@/lib/positions'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Shark Creative Agency and build your career with a team of creative professionals. Explore open positions in design, development, marketing, and more.',
  openGraph: {
    type: 'website',
    url: 'https://sharkcreativeagency.com/careers',
    title: 'Careers | Shark Creative Agency',
    description: 'Join our team and help shape the future of creative digital solutions.',
    siteName: 'Shark Creative Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Careers - Shark Creative Agency',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Shark Creative Agency',
    description: 'Join our team and help shape the future of creative digital solutions.',
    images: ['/og-image.png'],
  },
}

export default function Careers() {
  const openPositions = getAllPositions()

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'We offer competitive compensation packages that reflect your skills and experience.'
    },
    {
      icon: Building2,
      title: 'Health Benefits',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: Umbrella,
      title: 'Flexible Time Off',
      description: 'Take time off when you need it with our flexible vacation and sick leave policy.'
    },
    {
      icon: Home,
      title: 'Remote Work',
      description: 'Work from anywhere with our flexible remote and hybrid work options.'
    },
    {
      icon: BookOpen,
      title: 'Professional Development',
      description: 'We invest in your growth with training, conferences, and learning opportunities.'
    },
    {
      icon: Zap,
      title: 'Modern Tools',
      description: 'Access to the latest software, tools, and technology to do your best work.'
    }
  ]

  return (
    <>
      <PageBanner 
        title="Careers" 
        description="Join our team of designers, developers, and marketers building brands that stand out"
      />

      {/* Why Work With Us */}
      <section className="site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center mb-12">
            <h2 className=" mb-3 md:mb-4">Why Work With Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're building a culture of creativity, innovation, and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
              <div key={index} className="p-4 sm:p-6 rounded-lg border border-gray-200">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-3 md:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center mb-12">
            <h2 className=" mb-3 md:mb-4">Open Positions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore current opportunities to join our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {openPositions.map((position) => (
              <Link 
                key={position.slug}
                href={`/careers/${position.slug}`}
                className="bg-white p-6 rounded-lg border-2 border-gray-300 hover:border-secondary-500 hover:shadow-lg transition-all duration-200 flex flex-col group h-full"
              >
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 group-hover:text-secondary-500 transition-colors min-h-[3.5rem] line-clamp-2 leading-tight">
                    {position.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-700">
                      <MapPin className="w-3 h-3 mr-1.5 text-secondary-500" />
                      {position.department}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-700">
                      <Globe className="w-3 h-3 mr-1.5 text-secondary-500" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-700">
                      <Clock className="w-3 h-3 mr-1.5 text-secondary-500" />
                      {position.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-700 mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {position.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-secondary-500 group-hover:text-secondary-600 transition-colors inline-flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h2 className=" mb-3 md:mb-4">Our Culture</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                We believe in creating an environment where everyone can thrive
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  We work together as a team, sharing ideas, supporting each other, and celebrating successes together. Collaboration is at the heart of everything we do.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-700">
                  We encourage creative thinking and experimentation. Our team is always exploring new ideas, technologies, and approaches to solve problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Growth</h3>
                <p className="text-gray-700">
                  We're committed to your professional development. Whether through training, mentorship, or challenging projects, we help you grow your career.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Balance</h3>
                <p className="text-gray-700">
                  We understand the importance of work-life balance. We offer flexible schedules, remote work options, and encourage you to take time for yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white site-section">
        <div className="container-custom text-center">
          <h2 className=" mb-3 md:mb-4 text-gray-900">Don't See a Position That Fits?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto px-4">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:careers@sharkcreativeagency.com?subject=General Application"
              className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto px-12"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

