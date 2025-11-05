import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive creative services including web design, branding, digital marketing, SEO, social media management, and content creation. Transform your brand with Shark Creative Agency.',
  openGraph: {
    title: 'Services | Shark Creative Agency',
    description: 'Comprehensive creative services to elevate your brand and drive business growth.',
  },
}

export default function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Brand Identity & Design',
      description: 'Create a cohesive brand identity that tells your story and connects with your audience. From logo design to brand guidelines, we help you establish a strong visual presence.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: '💻',
      title: 'Web Design & Development',
      description: 'Modern, responsive websites that look great on all devices and provide an exceptional user experience. We build sites that convert visitors into customers.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization']
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that increase your online visibility, engage your audience, and drive qualified leads to your business.',
      features: ['Social Media Marketing', 'Email Campaigns', 'Content Marketing', 'PPC Advertising']
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies. We help you rank higher and attract more customers.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      description: 'Track your performance with detailed analytics and insights. We provide comprehensive reporting to help you understand what\'s working and optimize your strategy.',
      features: ['Performance Tracking', 'Custom Dashboards', 'Monthly Reports', 'Data Analysis']
    },
    {
      icon: '🎬',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Comprehensive creative solutions to elevate your brand and drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-tiger-orange mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-tiger-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
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

