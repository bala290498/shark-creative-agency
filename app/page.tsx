import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import TextType from '@/components/TextType'
import GrowthGraphCard from '@/components/GrowthGraphCard'
import LineGraphCard from '@/components/LineGraphCard'
import { Testimonials } from '@/components/ui/testimonials'
import { Palette, Laptop, Smartphone, Search, Rocket, Target, Handshake } from 'lucide-react'

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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
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

            {/* Right Side - Blob Container with Image and Infographic Cards */}
            <div className="relative h-[500px] md:h-[600px] hidden md:block">
              {/* Hero Image - Top extends above blob, bottom cropped by blob */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                <div className="relative w-[500px] h-[480px] md:w-[600px] md:h-[580px] overflow-hidden hero-image-container shadow-2xl">
                  <Image
                    src="/hero.png"
                    alt="Hero"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Blob Container */}
              <div className="absolute top-24 right-0 w-4/5 h-[320px] md:h-[400px] z-10">
                <div 
                  className="w-full h-full relative blob-shape overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-tiger-orange to-tiger-orange-600 opacity-90 blob-shape"></div>
                </div>
              </div>

              {/* Infographic Cards positioned around blob */}
              <div className="absolute top-32 left-4 z-30">
                <GrowthGraphCard />
              </div>
              
              <div className="absolute bottom-16 right-4 z-30">
                <LineGraphCard />
              </div>

              <div className="absolute bottom-8 left-1/4 z-30">
                <div className="bg-white rounded-lg shadow-lg p-4 w-40 h-28 border border-gray-200">
                  <div className="flex flex-col h-full justify-center">
                    <span className="text-xs text-gray-500 mb-1">Clients</span>
                    <span className="text-3xl font-bold text-tiger-orange">100+</span>
                    <span className="text-xs text-gray-600 mt-1">Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Show image and simplified cards */}
            <div className="relative h-[400px] md:hidden">
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/hero.png"
                  alt="Hero"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <GrowthGraphCard />
                <LineGraphCard />
              </div>
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
              <Palette className="w-10 h-10 text-tiger-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
              <p className="text-gray-600">
                Create a memorable brand that resonates with your audience and stands out in the market.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Laptop className="w-10 h-10 text-tiger-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-gray-600">
                Modern, responsive websites that convert visitors into customers and drive business growth.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Smartphone className="w-10 h-10 text-tiger-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Strategic marketing campaigns that increase visibility and generate qualified leads.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Search className="w-10 h-10 text-tiger-orange mb-4" />
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
              <Rocket className="w-12 h-12 text-tiger-orange mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">
                We stay ahead of trends and use cutting-edge technology to deliver innovative solutions that set you apart.
              </p>
            </div>
            
            <div className="text-center">
              <Target className="w-12 h-12 text-tiger-orange mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-600">
                Every project is designed with your business goals in mind, ensuring measurable results and ROI.
              </p>
            </div>
            
            <div className="text-center">
              <Handshake className="w-12 h-12 text-tiger-orange mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work closely with you throughout the process, ensuring your vision comes to life exactly as you imagined.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

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

