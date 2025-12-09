import type { Metadata } from 'next'
import Link from 'next/link'
import { Palette, Code, TrendingUp, CheckCircle2, Rocket, Search, Smartphone, Globe, Building2, Zap, BarChart3, Users, MessageSquare, Target, Handshake, Clock, ShoppingCart, Server, Headphones, FileText, Image, Printer } from 'lucide-react'
import PageBanner from '@/components/PageBanner'

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
  return (
    <>
      <PageBanner 
        title="Our Services" 
        description="Complete design, development, and digital marketing solutions to build and grow your brand"
      />
      {/* Intro Section */}
      <section className="bg-white site-section pt-20 md:pt-16">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 md:mb-6">
              <span className="text-secondary-500">Design.</span>{' '}
              <span className="text-blue-600">Develop.</span>{' '}
              <span className="text-purple-600">Grow.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700">
              We provide full-stack creative, development, and marketing services so your business can grow without managing multiple vendors.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-900">
              One team. One strategy. One seamless experience.
            </p>
            <Link href="/contact-us" className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto px-8 md:px-12">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 md:mb-8 text-center">
              Design Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-6 md:mb-8">
              {/* Logo & Brand Identity */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Logo & Brand Identity</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Make a first impression that lasts.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Strategic logo systems and visual identity that communicate your purpose and scale with your business.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Distinctive logo and brand mark</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Consistent color, type, and imagery system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Brand usage guidelines for digital & print</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Logo & Brand Identity services. Can you tell me more about your brand packages?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  View Brand Packages
                </a>
              </div>

              {/* UI/UX Design */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">UI/UX Design</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Beautiful interfaces that people actually use.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">User-centered web and app interfaces designed for clarity, speed, and conversion.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Wireframes and interactive prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Accessibility and usability-first flows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Measurable conversion improvements</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in UI/UX Design services. Can you show me some of your work?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  See UI/UX Work
                </a>
              </div>

              {/* Social Media Creatives */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Image className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Social Media Creatives</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Scroll-stopping visuals for every channel.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">High-impact social assets and templates designed for engagement and shareability.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Campaign-ready ad and post formats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Reusable templates for fast content rollout</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Platform-optimized sizing and messaging</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Social Media Creatives. Can you tell me more about your social kit?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Request Social Kit
                </a>
              </div>

              {/* Brochures, Banners & Print Collateral */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Printer className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Brochures, Banners & Print Collateral</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Print that reinforces your premium feel.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">On-brand print assets for events, retail, and corporate communications.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Print-ready files and specs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Layouts optimized for readability and impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Consistent brand presentation offline</span>
                    </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Brochures, Banners & Print Collateral services. Can you share your print guide?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Download Print Guide
                </a>
              </div>
            </div>

            <div className="gradient-secondary border-b border-secondary-500/30 rounded-lg p-4 md:p-6 mb-6 md:mb-8 text-center w-full">
              <p className="text-base sm:text-lg text-white font-semibold">
                A visually powerful brand that builds trust and attracts customers.
              </p>
              </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 md:mb-8 text-center">
              Development Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-6 md:mb-8">
              {/* Responsive Websites */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Responsive Websites</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Fast, flexible sites that adapt to every screen.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Custom-coded, WordPress, or Webflow websites built for performance and conversions.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Mobile-first responsive layouts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">SEO-ready structure and fast load times</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Easy CMS handoff</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Responsive Website Development. Can we discuss starting a website project?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Start a Website
                </a>
          </div>
          
              {/* E-commerce */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">E-commerce</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Stores built to sell — beautifully and reliably.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">End-to-end e-commerce from UX to checkout, with payment and shipping integrations.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Smooth checkout and higher AOV</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Inventory and order management setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Conversion optimization and analytics</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in E-commerce Development (Shopify/WooCommerce). Can we discuss launching my store?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Launch My Store
                </a>
              </div>
            
              {/* Mobile Apps */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Mobile Apps</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Native-like apps, faster.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Cross-platform mobile apps using Flutter or React Native that feel polished and perform well.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Rapid development for iOS and Android</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Native performance and UX patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">App store submission support</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Mobile App Development (Flutter/React Native). Can we discuss building an app?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Build an App
                </a>
            </div>
            
              {/* Backend & API Integration */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Server className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Backend & API Integration</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Secure, scalable systems behind the scenes.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Robust backends and API integrations that connect your products, payments, and data flows.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Secure authentication and data handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Scalable architecture for growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Third-party service integrations (CRM, payments, analytics)</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Backend & API Integration services. Can we discuss the architecture?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Discuss Architecture
                </a>
              </div>
            </div>
            
            <div className="gradient-secondary border-b border-secondary-500/30 rounded-lg p-4 md:p-6 mb-6 md:mb-8 text-center w-full">
              <p className="text-base sm:text-lg text-white font-semibold">
                High-performance digital products that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 md:mb-8 text-center">
              Digital Marketing Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch mb-6 md:mb-8">
              {/* SEO */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Search className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Search Engine Optimization</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Rank higher, get found, grow traffic.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Technical and content SEO to improve organic visibility and sustainable traffic.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">On-page and technical SEO fixes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Content strategy for search intent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Ongoing performance reporting</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in SEO services. Can you help audit my site?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Audit My Site
                </a>
              </div>

              {/* Paid Advertising */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Paid Advertising</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Ads that convert, not just click.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Performance-first campaigns across Google Ads and Meta focused on measurable ROI.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Targeted audience building and testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Creative + landing page optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Cost-per-acquisition improvements</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Paid Advertising (Google & Meta). Can we discuss launching a campaign?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Launch a Campaign
                </a>
              </div>

              {/* Social Media Management */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Social Media Management</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Consistent presence, authentic growth.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">End-to-end social publishing, community management, and content planning.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Content calendar and post production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Audience engagement and community growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Monthly performance insights</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Social Media Management services. Can you help manage my channels?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Manage My Channels
                </a>
              </div>

              {/* Content Marketing */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Content Marketing & Brand Storytelling</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Content that builds authority and trust.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Editorial, long-form, and campaign content that positions your brand and drives conversions.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Blog, video scripts, and long-form assets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Brand voice and messaging framework</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Lead-generation content funnels</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Content Marketing & Brand Storytelling. Can we discuss creating content?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Create Content
                </a>
            </div>
            
              {/* Analytics & Performance Tracking */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-secondary-500 focus-within:ring-offset-2">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Analytics & Performance Tracking</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2 italic">Data you can act on.</p>
                <p className="text-sm text-gray-700 mb-4 text-left w-full">Implementation and ongoing analysis of analytics to turn traffic into repeatable growth.</p>
                <ul className="space-y-3 mb-6 text-gray-700 w-full flex-1 text-left">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Conversion tracking and KPI dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">A/B testing roadmap and results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Monthly insights with prioritized actions</span>
                  </li>
                </ul>
                <a href="https://wa.me/919677691237?text=Hi! I'm interested in Analytics & Performance Tracking. Can you help set up tracking?" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  Set Up Tracking
                </a>
              </div>
              </div>

            <div className="gradient-secondary border-b border-secondary-500/30 rounded-lg p-4 md:p-6 mb-6 md:mb-8 text-center w-full">
              <p className="text-base sm:text-lg text-white font-semibold">
                More leads. More sales. More growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 md:mb-8">
              Your End-to-End Digital Partner
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 md:mb-10 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Expert Team of Designers, Developers, and Marketers</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Industry-Specific Strategies</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Transparent Communication & Collaborative Workflow</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">On-Time Project Delivery</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start md:col-span-2 border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Long-Term Support After Launch</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-700">
              Community-backed and collaborating with <span className="font-semibold text-gray-900">TrustRech Club</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 md:mb-12 text-center">
              Simple, Effective Workflow
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="bg-white p-4 md:p-6 lg:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Step 1 — Strategy</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      We understand your goals, audience, and brand vision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 lg:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Step 2 — Design</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      We create the visual identity and digital experience your customers will love.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 lg:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Step 3 — Development</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      We build systems and platforms that are fast, scalable, and easy to manage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 lg:p-8 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Step 4 — Marketing</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      We launch campaigns that generate immediate and long-term growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 lg:p-8 md:col-span-2 text-center">
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Step 5 — Improvement</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      We refine, optimize, and support your brand as it evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact-us" className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto px-8 md:px-12">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 md:mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700">
              From idea to execution — we take care of everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0 px-8 md:px-12">
                Start Your Project
              </Link>
              <Link href="/contact-us" className="btn-primary inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0 px-8 md:px-12">
                Book a Free Strategy Call
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

