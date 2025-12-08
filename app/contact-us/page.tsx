import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, Send, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold mb-4 md:mb-6 text-gray-900">
              Let's Build Something Extraordinary Together
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Have a project in mind or need help shaping your brand? Reach out anytime — we're quick to respond and always excited to collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold mb-8 md:mb-10 text-center text-gray-900">
              Get in Touch
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Email</h3>
                  <a 
                    href="mailto:contact@sharkcreativeagency.com" 
                    className="text-base sm:text-lg text-secondary-500 hover:underline mb-4"
                  >
                    contact@sharkcreativeagency.com
                  </a>
                  <p className="text-sm sm:text-base text-gray-700">
                    Your direct line to us for inquiries, quotes, collaborations, and support.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Phone</h3>
                  <a 
                    href="tel:+917010584543" 
                    className="text-base sm:text-lg text-secondary-500 hover:underline mb-4"
                  >
                    +91 7010584543
                  </a>
                  <p className="text-sm sm:text-base text-gray-700">
                    Call or message us for quick assistance and project discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send a Message Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold mb-8 md:mb-10 text-center text-gray-900">
            Send a Message
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent focus-visible:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent focus-visible:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent focus-visible:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent focus-visible:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="branding">Branding</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="development">Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="full-service">Full Service</option>
                    <option value="other">Other</option>
                  </select>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent focus-visible:outline-none resize-y"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-secondary-gradient w-full flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 text-gray-900">
                Frequently Ask Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do you work with startups?</AccordionTrigger>
                  <AccordionContent>
                    Yes — we specialize in helping founders turn ideas into brands.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How soon can we start?</AccordionTrigger>
                  <AccordionContent>
                    After the first strategy call, we share timelines and a project plan within 48 hours.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer monthly support?</AccordionTrigger>
                  <AccordionContent>
                    Yes, through our flexible monthly retainer plans.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold mb-8 md:mb-10 text-gray-900">
              Socials
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a
                href="https://instagram.com/sharkcreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                <span className="text-base sm:text-lg font-semibold text-gray-900">Instagram</span>
              </a>

              <a
                href="https://linkedin.com/company/sharkcreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                <span className="text-base sm:text-lg font-semibold text-gray-900">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 font-medium">
              Need something urgent? We respond in under 2 hours!
            </p>
            <a
              href="https://wa.me/917010584543"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-gradient inline-flex items-center justify-center gap-2 px-8 md:px-12"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
