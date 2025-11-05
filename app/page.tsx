import type { Metadata } from 'next'
import Link from 'next/link'
import TextType from '@/components/TextType'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Shark Creative Agency delivers cutting-edge digital solutions including web design, branding, marketing, and creative services. Transform your brand with our expert team.',
  openGraph: {
    title: 'Shark Creative Agency - Innovative Digital Solutions',
    description: 'Transform your brand with cutting-edge digital solutions from Shark Creative Agency.',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-tiger-orange mb-2">
                Shark Creative Agency
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 min-h-[3rem] md:min-h-[4rem]">
              <TextType 
                text={[
                  "Transform Your Brand with Creative Excellence",
                  "Innovative Digital Solutions for Your Business",
                  "Elevate Your Brand with Expert Design"
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-gray-900"
                cursorClassName="text-tiger-orange"
              />
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              We're a full-service creative agency specializing in digital solutions, branding, and marketing that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Link href="/services" className="btn-primary text-center w-full sm:w-auto">
                Our Services
              </Link>
              <Link href="/contact" className="btn-secondary text-center w-full sm:w-auto">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to elevate your brand and drive business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
              <p className="text-gray-600">
                Create a memorable brand that resonates with your audience and stands out in the market.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-gray-600">
                Modern, responsive websites that convert visitors into customers and drive business growth.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Strategic marketing campaigns that increase visibility and generate qualified leads.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-600">
                Improve your search engine rankings and drive organic traffic to your website.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-block w-full sm:w-auto px-12">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Shark Creative Agency?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine creativity with strategy to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">
                We stay ahead of trends and use cutting-edge technology to deliver innovative solutions that set you apart.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-600">
                Every project is designed with your business goals in mind, ensuring measurable results and ROI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work closely with you throughout the process, ensuring your vision comes to life exactly as you imagined.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch with us today.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary inline-block w-full sm:w-auto px-12">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

