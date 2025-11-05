import type { Metadata } from 'next'
import Link from 'next/link'
import { Palette, Laptop, Smartphone, Search, BarChart3, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive creative services including web design, branding, digital marketing, SEO, social media management, and content creation. Transform your brand with Shark Creative Agency.',
  openGraph: {
    type: 'website',
    url: 'https://sharkcreativeagency.com/services',
    title: 'Services | Shark Creative Agency',
    description: 'Comprehensive creative services to elevate your brand and drive business growth.',
    siteName: 'Shark Creative Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Services - Shark Creative Agency',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Shark Creative Agency',
    description: 'Comprehensive creative services to elevate your brand and drive business growth.',
    images: ['/og-image.jpg'],
  },
}

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Create a cohesive brand identity that tells your story and connects with your audience. From logo design to brand guidelines, we help you establish a strong visual presence.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: Laptop,
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that look great on all devices and provide an exceptional user experience. We build sites that convert visitors into customers.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that increase your online visibility, engage your audience, and drive qualified leads to your business.',
      features: ['Social Media Marketing', 'Email Campaigns', 'Content Marketing', 'PPC Advertising']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies. We help you rank higher and attract more customers.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track your performance with detailed analytics and insights. We provide comprehensive reporting to help you understand what\'s working and optimize your strategy.',
      features: ['Performance Tracking', 'Custom Dashboards', 'Monthly Reports', 'Data Analysis']
    },
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Engaging content that captures attention and drives action. From blog posts to video production, we create content that resonates with your audience.',
      features: ['Copywriting', 'Video Production', 'Photography', 'Graphic Design']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
              Comprehensive creative solutions to elevate your brand and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
              <div key={index} className="p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-tiger-orange mb-3 md:mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                      <span className="text-tiger-orange mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Process</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We follow a proven process to ensure exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="bg-tiger-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We learn about your business, goals, and target audience to create a tailored strategy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-tiger-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive strategy aligned with your objectives and market positioning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-tiger-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">
                We bring the strategy to life with creative excellence and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-tiger-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor and optimize to ensure maximum performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto px-4">
            Let's discuss how we can help transform your brand and achieve your business goals.
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

