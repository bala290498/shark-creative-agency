import type { Metadata } from 'next'
import Link from 'next/link'
import { Palette, Code, TrendingUp, CheckCircle2, Target, Search, Rocket, Zap, Users, Handshake } from 'lucide-react'
import PageBanner from '@/components/PageBanner'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shark Creative Agency - a full-service creative agency specializing in digital solutions, branding, and marketing. Discover our mission, values, and talented team.',
  openGraph: {
    type: 'website',
    url: 'https://sharkcreativeagency.com/about',
    title: 'About Us | Shark Creative Agency',
    description: 'Learn about our mission, values, and the talented team behind Shark Creative Agency.',
    siteName: 'Shark Creative Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Shark Creative Agency',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Shark Creative Agency',
    description: 'Learn about our mission, values, and the talented team behind Shark Creative Agency.',
    images: ['/og-image.png'],
  },
}

export default function About() {
  return (
    <>
      <PageBanner 
        title="About Us" 
        description="A creative, technology & marketing agency built for modern brands"
      />
      {/* Hero Section */}
      <section className="bg-white text-gray-900 site-section pt-20 md:pt-16">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 md:mb-6 text-secondary-500">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 text-gray-900 font-semibold max-w-3xl mx-auto">
              A Creative, Technology & Marketing Agency Built for Modern Brands
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We help entrepreneurs and businesses transform ideas into powerful digital experiences — through strategy, design, development, and growth marketing.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Your vision. Our execution. One seamless partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className=" mb-4 md:mb-6 text-center text-gray-900">
              Everything Starts With an Idea
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-base sm:text-lg">
                Shark Creative Agency was born with a simple mission: <strong>to support entrepreneurs who have ideas but lack the team, structure, or expertise to bring them to life.</strong>
              </p>
              <p className="text-base sm:text-lg">
                Over the years, we've grown into a full-service agency powered by designers, developers, marketers, and strategists — all working together to build brands that stand out and scale.
              </p>
              <p className="text-base sm:text-lg">
                Today, we work with startups, small businesses, and established enterprises to shape their brand identity, craft high-performing digital products, and drive measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className=" mb-4 md:mb-6 text-center text-gray-900">
              Design. Develop. Grow.
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-center text-gray-700">
              Everything we do is shaped by three core pillars:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-50 p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className=" mb-4 text-gray-900">Design</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    We believe design is not just visuals — it's communication, trust, and experience at first glance.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Code className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className=" mb-4 text-gray-900">Develop</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Technology should be fast, scalable, and built to grow with the business — not limit it.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className=" mb-4 text-gray-900">Grow</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Marketing should be intentional, data-backed, and aligned with long-term brand value.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-700 text-center mt-8 md:mt-10">
              These pillars guide every project, from the first strategy call to post-launch support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className=" mb-4 md:mb-6 text-center text-gray-900">
              A Complete Digital Partner
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-center text-gray-700">
              We deliver an end-to-end service ecosystem that covers:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 md:mb-10">
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">Branding</h3>
                  <p className="text-sm sm:text-base text-gray-700">Identity systems, logo design, brand guidelines, and messaging.</p>
                </div>
              </div>

              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">UI/UX</h3>
                  <p className="text-sm sm:text-base text-gray-700">User-first digital experiences for web and mobile.</p>
                </div>
              </div>

              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">Development</h3>
                  <p className="text-sm sm:text-base text-gray-700">Custom websites, e-commerce, mobile apps (Flutter & React Native), backend architecture, and API integrations.</p>
                </div>
              </div>

              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">Digital Marketing</h3>
                  <p className="text-sm sm:text-base text-gray-700">SEO, paid advertising, social media, content, and analytics-driven growth.</p>
                </div>
              </div>

              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500 md:col-span-2">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">Brand Improvement & Ongoing Support</h3>
                  <p className="text-sm sm:text-base text-gray-700">Continuous enhancements, monthly support, and performance optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className=" mb-8 md:mb-10 text-center text-gray-900">
              Why Clients Choose Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 md:mb-10">
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">A unified team for design, development, and marketing</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Transparent communication and milestone-based structure</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Fast delivery without compromising quality</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Proven strategies for conversion and growth</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500 md:col-span-2">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Community-backed — in collaboration with TrustRech Club</span>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center font-medium">
              We don't just work on projects. We partner with brands for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className=" mb-8 md:mb-12 text-center text-gray-900">
              A Smooth, Clear Workflow
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">1 — Discovery & Strategy</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Understanding your business, goals, and audience.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">2 — Creative & Experience Design</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Crafting visuals, interfaces, and brand narratives.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">3 — Build & Development</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Developing websites, apps, and backend systems built for scale.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">4 — Launch & Marketing</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Activating campaigns and optimizing your digital presence.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 text-center md:col-span-2">
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">5 — Improvement & Support</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Regular updates, performance tracking, and feature enhancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Collaboration Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className=" mb-4 md:mb-6 text-gray-900">
              Backed by TrustRech Club
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              We are proud to be community-supported and to collaborate with <span className="font-semibold text-gray-900">TrustRech Club</span>, enabling early-stage founders to access premium design, development, and marketing resources at startup-friendly terms.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className=" mb-4 md:mb-6 text-gray-900">
              Let's Build Something Amazing
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 leading-relaxed">
              Whether you're launching a new startup or scaling an established business, we're here to help you grow with clarity, creativity, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0 px-8 md:px-12">
                Start Your Project
              </Link>
              <Link href="/contact-us" className="btn-primary inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0 px-8 md:px-12">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
