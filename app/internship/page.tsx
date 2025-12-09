import type { Metadata } from 'next'
import Link from 'next/link'
import PageBanner from '@/components/PageBanner'
import { GraduationCap, Briefcase, Code, Palette, TrendingUp, Users, MapPin, Clock, Calendar } from 'lucide-react'
import { getAllInternships } from '@/lib/internships'

export const metadata: Metadata = {
  title: 'Internships',
  description: 'Join Shark Creative Agency as an intern and gain hands-on experience in web design, development, marketing, and creative services. Launch your career with real-world projects.',
  openGraph: {
    type: 'website',
    url: 'https://sharkcreativeagency.com/internship',
    title: 'Internships | Shark Creative Agency',
    description: 'Join us as an intern and gain hands-on experience in web design, development, marketing, and creative services.',
    siteName: 'Shark Creative Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Internships - Shark Creative Agency',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internships | Shark Creative Agency',
    description: 'Join us as an intern and gain hands-on experience in web design, development, marketing, and creative services.',
    images: ['/og-image.png'],
  },
}

export default function Internship() {
  const internshipPositions = getAllInternships()

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Hands-On Learning',
      description: 'Work on real projects and gain practical experience that complements your academic studies.'
    },
    {
      icon: Briefcase,
      title: 'Portfolio Building',
      description: 'Build your portfolio with actual client work and projects that showcase your skills.'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Learn from experienced professionals who will guide and mentor you throughout your internship.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Potential for full-time opportunities after successful completion of your internship.'
    },
    {
      icon: Code,
      title: 'Modern Tools',
      description: 'Access to the latest software, tools, and technologies used in the industry.'
    },
    {
      icon: Palette,
      title: 'Creative Freedom',
      description: 'Express your creativity and contribute innovative ideas to projects.'
    }
  ]

  return (
    <>
      <PageBanner 
        title="Internship Program" 
        description="Launch your career with hands-on experience in design, development, and digital marketing"
      />

      {/* Why Intern With Us */}
      <section className="site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center mb-12">
            <h2 className=" mb-3 md:mb-4">Why Intern With Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're committed to providing meaningful internship experiences that help you grow professionally
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
              <div key={index} className="p-4 sm:p-6 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-3 md:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Open Internship Positions */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center mb-12">
            <h2 className=" mb-3 md:mb-4">Open Internship Positions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore current internship opportunities to start your career journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {internshipPositions.map((position) => (
              <Link 
                key={position.slug}
                href={`/internship/${position.slug}`}
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
                      <Users className="w-3 h-3 mr-1.5 text-secondary-500" />
                      {position.location}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-xs font-medium text-gray-700">
                      <Clock className="w-3 h-3 mr-1.5 text-secondary-500" />
                      {position.duration}
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

      {/* What to Expect Section */}
      <section className="site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className=" mb-3 md:mb-4">What to Expect</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                A comprehensive internship experience designed for your growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Calendar className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Structured Program</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Our internship program includes orientation, regular check-ins, project assignments, and a final presentation. You'll have clear goals and milestones to track your progress.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Users className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Team Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Work alongside our team members, attend meetings, and contribute to real projects. You'll be part of the team, not just an observer.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <TrendingUp className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Skill Development</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Develop both technical and soft skills through hands-on projects, workshops, and mentorship. We invest in your professional growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Briefcase className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-gray-900">Real-World Experience</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Work on actual client projects and campaigns. Your contributions will make a real impact and help build your professional portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white site-section">
        <div className="container-custom text-center">
          <h2 className=" mb-3 md:mb-4 text-gray-900">Ready to Start Your Journey?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto px-4">
            Don't see a position that matches your interests? We're always open to hearing from passionate students eager to learn.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:internships@sharkcreativeagency.com?subject=General Internship Inquiry"
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

