import type { Metadata } from 'next'
import Link from 'next/link'
import { User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shark Creative Agency - a full-service creative agency specializing in digital solutions, branding, and marketing. Discover our mission, values, and talented team.',
  openGraph: {
    title: 'About Us | Shark Creative Agency',
    description: 'Learn about our mission, values, and the talented team behind Shark Creative Agency.',
  },
}

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
              About Shark Creative Agency
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
              We're passionate about creating exceptional digital experiences that drive results
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center px-4">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Shark Creative Agency was founded with a simple mission: to help businesses thrive in the digital age through innovative creative solutions. We believe that every brand has a unique story to tell, and our job is to help you tell it in the most compelling way possible.
              </p>
              <p className="mb-4">
                Since our inception, we've worked with businesses of all sizes, from startups to Fortune 500 companies. Our diverse team of designers, developers, marketers, and strategists brings together decades of combined experience across various industries.
              </p>
              <p>
                What sets us apart is our commitment to excellence, our collaborative approach, and our unwavering focus on delivering results that matter. We don't just create beautiful designs or launch campaigns – we build partnerships that drive long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                To empower businesses with creative solutions that drive growth, foster innovation, and create lasting impact. We're committed to delivering exceptional work that exceeds expectations and helps our clients achieve their goals.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                We believe in the power of creativity to transform businesses and change lives. Every project we undertake is an opportunity to make a difference and create something truly remarkable.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-tiger-orange text-xl sm:text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Excellence</h3>
                    <p className="text-sm sm:text-base text-gray-700">We strive for excellence in everything we do, setting high standards and consistently exceeding them.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-tiger-orange text-xl sm:text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Innovation</h3>
                    <p className="text-sm sm:text-base text-gray-700">We embrace new ideas, technologies, and approaches to stay ahead of the curve and deliver cutting-edge solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-tiger-orange text-xl sm:text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Integrity</h3>
                    <p className="text-sm sm:text-base text-gray-700">We conduct business with honesty, transparency, and ethical practices, building trust with every interaction.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-tiger-orange text-xl sm:text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Collaboration</h3>
                    <p className="text-sm sm:text-base text-gray-700">We believe in the power of teamwork and work closely with clients as partners in their success.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Team</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Meet the talented individuals who make Shark Creative Agency great
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-tiger-orange mb-2">Creative Director</p>
              <p className="text-gray-600">
                Leading our creative vision with over 10 years of experience in branding and design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-tiger-orange mb-2">Technical Lead</p>
              <p className="text-gray-600">
                Expert in web development and digital solutions with a passion for innovation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-tiger-orange mb-2">Marketing Strategist</p>
              <p className="text-gray-600">
                Driving results through data-driven marketing strategies and campaign optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">500+</div>
              <p className="text-sm sm:text-base text-gray-700">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">200+</div>
              <p className="text-sm sm:text-base text-gray-700">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">10+</div>
              <p className="text-sm sm:text-base text-gray-700">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">50+</div>
              <p className="text-sm sm:text-base text-gray-700">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Want to Join Our Team?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto px-4">
            We're always looking for talented individuals who share our passion for creativity and excellence.
          </p>
          <div className="flex justify-center">
            <Link href="/careers" className="btn-primary inline-block w-full sm:w-auto px-12">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

