import type { Metadata } from 'next'
import { DollarSign, Building2, Umbrella, Home, BookOpen, Zap, MapPin, Globe, Clock } from 'lucide-react'

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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
  },
}

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior Web Developer',
      department: 'Development',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'We are seeking an experienced web developer to join our team. You will work on exciting projects, build modern web applications, and collaborate with designers and marketers.',
      requirements: [
        '5+ years of experience in web development',
        'Proficiency in React, Next.js, and TypeScript',
        'Experience with modern CSS frameworks',
        'Strong problem-solving skills',
        'Excellent communication and teamwork abilities'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'Join our design team to create beautiful, user-centered designs for web and mobile applications. You will work on diverse projects and collaborate with clients and developers.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Understanding of user research and usability principles',
        'Ability to work in a fast-paced environment'
      ]
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'We are looking for a digital marketing specialist to develop and execute marketing strategies, manage campaigns, and analyze performance to drive results for our clients.',
      requirements: [
        '3+ years of digital marketing experience',
        'Experience with SEO, SEM, and social media marketing',
        'Proficiency in Google Analytics and marketing tools',
        'Strong analytical and reporting skills',
        'Creative thinking and strategic mindset'
      ]
    },
    {
      title: 'Content Writer',
      department: 'Content',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create compelling content for websites, blogs, social media, and marketing materials. You will work with our team to develop content strategies and produce engaging copy.',
      requirements: [
        '2+ years of content writing experience',
        'Excellent writing and editing skills',
        'Experience with SEO-friendly content',
        'Ability to adapt writing style for different audiences',
        'Strong research and fact-checking abilities'
      ]
    }
  ]

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
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
              Join Our Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
              Build your career with a team of creative professionals passionate about excellence
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why Work With Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're building a culture of creativity, innovation, and growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
              <div key={index} className="p-4 sm:p-6 rounded-lg border border-gray-200">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-tiger-orange mb-3 md:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Open Positions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore current opportunities to join our team
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-tiger-orange" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-tiger-orange" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-tiger-orange" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4">{position.description}</p>
                
                <div className="mb-3 md:mb-4">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={`mailto:careers@sharkcreativeagency.com?subject=Application for ${position.title}`}
                  className="btn-primary inline-block w-full sm:w-auto text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Culture</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                We believe in creating an environment where everyone can thrive
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  We work together as a team, sharing ideas, supporting each other, and celebrating successes together. Collaboration is at the heart of everything we do.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We encourage creative thinking and experimentation. Our team is always exploring new ideas, technologies, and approaches to solve problems.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Growth</h3>
                <p className="text-gray-700">
                  We're committed to your professional development. Whether through training, mentorship, or challenging projects, we help you grow your career.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Balance</h3>
                <p className="text-gray-700">
                  We understand the importance of work-life balance. We offer flexible schedules, remote work options, and encourage you to take time for yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Don't See a Position That Fits?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto px-4">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:careers@sharkcreativeagency.com?subject=General Application"
              className="btn-primary inline-block w-full sm:w-auto px-12"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

