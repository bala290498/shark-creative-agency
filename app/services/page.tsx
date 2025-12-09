import type { Metadata } from 'next'
import Link from 'next/link'
import { Palette, Code, TrendingUp, CheckCircle2, Rocket, Search, Smartphone, Globe, Building2, Zap, BarChart3, Users, MessageSquare, Target, Handshake, Clock } from 'lucide-react'

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
      {/* Intro Section */}
      <section className="bg-white section-padding pt-20 md:pt-20">
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
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 md:mb-6 text-center">
              Make Your Brand Unforgettable
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="bg-white p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Brand Identity & Logo Design</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Crafting logos and brand systems that are instantly recognizable and built for long-term brand equity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">UI/UX Design</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Modern, intuitive designs for websites and mobile apps — focused on clarity, usability, and conversion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 md:col-span-2 text-center">
                <div className="flex flex-col items-center">
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Marketing Creatives</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Social posts, ad creatives, campaign visuals, brochures, banners, and print materials — designed to impress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 mb-6 md:mb-8">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                <span className="text-secondary-500 font-bold">Outcome:</span> A visually powerful brand that builds trust and attracts customers.
              </p>
            </div>

            <div className="text-center">
              <Link href="/contact-us" className="btn-primary inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto px-8 md:px-12">
                Explore Design Work
              </Link>
              </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 md:mb-6 text-center">
              Build Fast, Scalable Digital Experiences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="bg-gray-50 p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Custom Websites</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      From custom-coded apps to WordPress and Webflow builds — fast, responsive, and optimized for conversion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">E-Commerce Development</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Shopify and WooCommerce stores designed for high sales, easy management, and fast checkout experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Mobile App Development</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      High-quality mobile apps built using Flutter and React Native.
                    </p>
                  </div>
                </div>
          </div>
          
              <div className="bg-gray-50 p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Backend & API Integration</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Secure, scalable backend systems and seamless integration between platforms.
                    </p>
                  </div>
                </div>
              </div>
              </div>

            <div className="bg-gray-50 p-4 md:p-6 mb-6 md:mb-8">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                <span className="text-secondary-500 font-bold">Outcome:</span> High-performance digital products that grow with your business.
              </p>
            </div>
            
            <div className="text-center">
              <Link href="/contact-us" className="btn-primary inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto px-8 md:px-12">
                See Development Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4 md:mb-6 text-center">
              Visibility, Traffic, and Measurable Growth
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              <div className="bg-white p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Search Engine Optimization (SEO)</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Boost rankings, organic traffic, and discoverability with effective on-page and off-page strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Paid Advertising</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Performance-driven ad campaigns across Google and Meta, crafted for maximum ROI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Social Media Management</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Consistent posting, content planning, storytelling, and community engagement — all handled by experts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 text-center">
                <div className="flex flex-col items-center">
                  <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Content Marketing</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Brand storytelling, blogs, scripts, product content, and campaign messages that connect and convert.
                    </p>
                  </div>
                </div>
            </div>
            
              <div className="bg-white p-4 md:p-6 md:col-span-2 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <div>
                    <h3 className=" mb-2 text-gray-900">Analytics & Performance Tracking</h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      Data-based insights to track real results and optimize your marketing funnel continually.
                    </p>
                  </div>
                </div>
              </div>
              </div>

            <div className="bg-white p-4 md:p-6 mb-6 md:mb-8">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                <span className="text-secondary-500 font-bold">Outcome:</span> More leads. More sales. More growth.
              </p>
            </div>
            
            <div className="text-center">
              <Link href="/contact-us" className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto px-8 md:px-12">
                Grow My Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white section-padding">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 md:mb-8">
              Your End-to-End Digital Partner
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 md:mb-10 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Expert team of designers, developers, and marketers</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Industry-specific strategies</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Transparent communication & collaborative workflow</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">On-time project delivery</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start md:col-span-2 border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Long-term support after launch</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-700">
              Community-backed and collaborating with <span className="font-semibold text-gray-900">TrustRech Club</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 section-padding">
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
      <section className="bg-white section-padding">
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

