import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Briefcase, Code, Palette, TrendingUp, Users, MapPin, Clock, Calendar } from 'lucide-react'

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
  const internshipPositions = [
    {
      title: 'Web Development Intern',
      department: 'Development',
      location: 'Remote / Hybrid',
      duration: '3-6 months',
      description: 'Learn web development with React, Next.js, and modern frameworks. Work on real client projects and build your portfolio.',
      requirements: [
        'Currently pursuing a degree in Computer Science or related field',
        'Basic knowledge of HTML, CSS, and JavaScript',
        'Eagerness to learn and grow',
        'Strong problem-solving skills',
        'Good communication abilities'
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'CSS'],
    },
    {
      title: 'UI/UX Design Intern',
      department: 'Design',
      location: 'Remote / Hybrid',
      duration: '3-6 months',
      description: 'Gain experience in user interface and user experience design. Work on design projects and learn industry-standard tools.',
      requirements: [
        'Currently pursuing a degree in Design or related field',
        'Basic knowledge of design principles',
        'Familiarity with Figma or Adobe Creative Suite',
        'Creative thinking and attention to detail',
        'Portfolio of design work (academic projects welcome)'
      ],
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    },
    {
      title: 'Digital Marketing Intern',
      department: 'Marketing',
      location: 'Remote / Hybrid',
      duration: '3-6 months',
      description: 'Learn digital marketing strategies, social media management, and content creation. Work on real campaigns and analytics.',
      requirements: [
        'Currently pursuing a degree in Marketing, Communications, or related field',
        'Interest in digital marketing and social media',
        'Strong writing and communication skills',
        'Creative thinking',
        'Basic knowledge of social media platforms'
      ],
      skills: ['Social Media', 'Content Creation', 'SEO', 'Analytics'],
    },
    {
      title: 'Content Writing Intern',
      department: 'Content',
      location: 'Remote',
      duration: '3-6 months',
      description: 'Develop your writing skills by creating content for websites, blogs, and social media. Learn SEO and content strategy.',
      requirements: [
        'Currently pursuing a degree in English, Journalism, Communications, or related field',
        'Excellent writing and editing skills',
        'Ability to adapt writing style for different audiences',
        'Strong research skills',
        'Passion for storytelling'
      ],
      skills: ['Copywriting', 'Blog Writing', 'SEO', 'Editing'],
    },
  ]

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
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
              Internship Opportunities
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
              Launch your career with hands-on experience in a creative, collaborative environment
            </p>
          </div>
        </div>
      </section>

      {/* Why Intern With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why Intern With Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We're committed to providing meaningful internship experiences that help you grow professionally
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Open Internship Positions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore current internship opportunities to start your career journey
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {internshipPositions.map((position, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 md:gap-4 text-xs sm:text-sm text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-secondary-500" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-secondary-500" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-secondary-500" />
                        {position.duration}
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

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, idx) => (
                      <span key={idx} className="bg-secondary-500/10 text-secondary-500 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={`mailto:internships@sharkcreativeagency.com?subject=Internship Application for ${position.title}`}
                  className="btn-secondary-gradient inline-block w-full sm:w-auto text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">What to Expect</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                A comprehensive internship experience designed for your growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Calendar className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">Structured Program</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Our internship program includes orientation, regular check-ins, project assignments, and a final presentation. You'll have clear goals and milestones to track your progress.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Users className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">Team Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Work alongside our team members, attend meetings, and contribute to real projects. You'll be part of the team, not just an observer.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <TrendingUp className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">Skill Development</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Develop both technical and soft skills through hands-on projects, workshops, and mentorship. We invest in your professional growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Briefcase className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">Real-World Experience</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Work on actual client projects and campaigns. Your contributions will make a real impact and help build your professional portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Ready to Start Your Journey?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto px-4">
            Don't see a position that matches your interests? We're always open to hearing from passionate students eager to learn.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:internships@sharkcreativeagency.com?subject=General Internship Inquiry"
              className="btn-secondary-gradient inline-block w-full sm:w-auto px-12"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

