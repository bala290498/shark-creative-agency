import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Shark Creative Agency. Contact us for inquiries about our services, partnerships, or to start your next project.',
  openGraph: {
    type: 'website',
    url: 'https://sharkcreativeagency.com/contact-us',
    title: 'Contact Us | Shark Creative Agency',
    description: 'Get in touch with us to discuss your project and how we can help.',
    siteName: 'Shark Creative Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Us - Shark Creative Agency',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Shark Creative Agency',
    description: 'Get in touch with us to discuss your project and how we can help.',
    images: ['/og-image.jpg'],
  },
}

export default function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold mb-4 md:mb-6 px-4">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4">
              Let's discuss how we can help transform your brand
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div>
              <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold mb-4 md:mb-6">Contact Information</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8">
                We'd love to hear from you. Whether you have a question about our services, want to discuss a project, or just want to say hello, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Email</h3>
                    <a href="mailto:contact@sharkcreativeagency.com" className="text-sm sm:text-base text-secondary-500 hover:underline break-all">
                      contact@sharkcreativeagency.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Phone</h3>
                    <a href="tel:+919677691237" className="text-sm sm:text-base text-secondary-500 hover:underline">
                      +91 9677691237
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Address</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      123 Creative Street<br />
                      Design District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1">Business Hours</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold mb-4 md:mb-6">Send Us a Message</h2>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full max-w-[600px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiger-orange focus:border-transparent focus-visible:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full max-w-[600px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiger-orange focus:border-transparent focus-visible:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full max-w-[600px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiger-orange focus:border-transparent focus-visible:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full max-w-[600px] px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiger-orange focus:border-transparent focus-visible:outline-none resize-y"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-secondary-gradient w-full max-w-[600px]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold mb-6 md:mb-8 text-center px-4">Find Us</h2>
          <div className="bg-gray-100 border border-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map integration would go here</p>
          </div>
        </div>
      </section>
    </>
  )
}

