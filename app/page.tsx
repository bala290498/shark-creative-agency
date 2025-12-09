import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import TextType from '@/components/TextType'
import { Testimonials } from '@/components/ui/testimonials'
import LogoLoop from '@/components/ui/logo-loop'
import { Rocket, Target, Handshake, Eye, CheckCircle2, Palette, Code, Code2, TrendingUp, Search, Lightbulb, Paintbrush, Smartphone, Globe, BarChart3, Users, MessageSquare, Clock, Zap, Building2, Sparkles, FileText, ShoppingCart, Image as ImageIcon } from 'lucide-react'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiFigma, SiAdobe, SiJavascript, SiHtml5, SiCss3, SiMongodb } from 'react-icons/si'
import { getInstagramPosts } from '@/lib/instagram'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Shark Creative Agency delivers cutting-edge digital solutions including web design, branding, marketing, and creative services. Transform your brand with our expert team.',
  openGraph: {
    type: 'website',
    url: 'https://sharkcreativeagency.com',
    title: 'Shark Creative Agency - Innovative Digital Solutions',
    description: 'Transform your brand with cutting-edge digital solutions from Shark Creative Agency.',
    siteName: 'Shark Creative Agency',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shark Creative Agency - Innovative Digital Solutions',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shark Creative Agency - Innovative Digital Solutions',
    description: 'Transform your brand with cutting-edge digital solutions from Shark Creative Agency.',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  const instagramPosts = getInstagramPosts()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 site-section pt-20 md:pt-16">
        <div className="container mx-auto px-4 max-w-screen-lg">
          {(() => {
            const hasImage = true; // Hero section has image
            const hasContent = true; // Hero section has content
            const useImageFirstLayout = hasImage && hasContent;
            
            return useImageFirstLayout ? (
              <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-center md:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl text-secondary-500 font-semibold mb-6">
                  Shark Creative Agency
                  </p>
                <h1 className="mb-6 min-h-[2.5rem] md:min-h-[3rem] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <TextType 
                  text={[
                      "Build Your Brand.",
                      "Your Idea. Our Execution.",
                      "Accelerate Your Growth."
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-gray-900"
                  cursorClassName="text-secondary-500"
                />
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We help entrepreneurs and businesses turn ideas into powerful brands with strategy, design, development, and marketing — all handled by one expert team.
                </p>
                
                {/* Bullet Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-700">Complete Brand Foundation</span>
                  </div>
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-700">Modern, High-Performing Websites & Apps</span>
                  </div>
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-700">Growth-Focused Digital Marketing</span>
                </div>
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg text-gray-700">End-to-End Creative Support</span>
                  </div>
              </div>
            </div>
                <div className="w-full flex justify-center md:justify-end">
                  <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-96 md:h-[600px] lg:h-[700px] flex items-center justify-center">
                <Image
                  src="/hero.png"
                      alt="Shark Creative Agency"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="text-center md:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl text-secondary-500 font-semibold mb-4 md:mb-6">
                      Shark Creative Agency
                  </p>
                <h1 className="mb-4 md:mb-6 min-h-[2.5rem] md:min-h-[3rem] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <TextType 
                      text={[
                      "Build Your Brand.",
                      "Your Idea. Our Execution.",
                      "Accelerate Your Growth."
                      ]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      className="text-gray-900"
                      cursorClassName="text-secondary-500"
                    />
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We help entrepreneurs and businesses turn ideas into powerful brands with strategy, design, development, and marketing — all handled by one expert team.
                </p>
                
                {/* Bullet Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg font-normal text-gray-700">Complete Brand Foundation</span>
                  </div>
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg font-normal text-gray-700">Modern, High-Performing Websites & Apps</span>
                  </div>
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg font-normal text-gray-700">Growth-Focused Digital Marketing</span>
                </div>
                  <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base sm:text-lg font-normal text-gray-700">End-to-End Creative Support</span>
                  </div>
                </div>
                </div>
                <div className="w-full flex justify-center md:justify-end">
                  <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-96 md:h-[600px] lg:h-[700px] flex items-center justify-center">
                <Image
                  src="/hero.png"
                      alt="Shark Creative Agency"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
              </div>
            );
          })()}
          
          {/* CTAs and Microcopy - Full Width */}
          <div className="w-full text-center mt-8">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="btn-secondary-gradient text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0">
                Get Started
              </Link>
              <Link href="/contact-us" className="btn-primary text-center max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0">
                Book a Strategy Call
              </Link>
            </div>

            {/* Micro-Trust Line */}
            <p className="text-sm sm:text-base text-gray-600 mt-6">
              Community-backed. Proud collaborator of <span className="font-semibold text-gray-900">TrustRech Club</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Why Most Businesses Struggle
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
              Most founders and companies face the same obstacles:
            </p>
            
            {/* Problem List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <span className="text-base sm:text-lg font-normal text-gray-700">No Strong Brand Identity or Positioning</span>
            </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <span className="text-base sm:text-lg font-normal text-gray-700">Outdated or Inconsistent Digital Presence</span>
          </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <span className="text-base sm:text-lg font-normal text-gray-700">Websites or Apps That Don't Convert</span>
          </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <span className="text-base sm:text-lg font-normal text-gray-700">Ineffective Marketing Campaigns</span>
            </div>
          </div>
          
            {/* Closing Statement */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
              Businesses have ideas — but lack a full-service partner to bring them to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              A Complete Digital Transformation Partner
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
              Shark Creative Agency provides every service you need to launch, grow, and scale:
            </p>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 font-semibold">
              We handle:
            </p>
            
            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Brand Foundation</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Brand Identity</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Brand Experience</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Brand Marketing</span>
      </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Brand Improvement</span>
                </div>
              </div>

            {/* Closing Statements */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-gray-900">
              One agency. One team. One seamless workflow.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
              You focus on business — we take care of everything else.
            </p>
              </div>
              </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
              What We Do
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {/* Card 1 — Design Services */}
              <div className="bg-white border border-secondary-500/30 rounded-lg p-8 md:p-10 hover:border-secondary-500 hover:shadow-sm transition-all duration-200 flex flex-col h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <Palette className="w-12 h-12 text-secondary-500" viewBox="0 0 24 24" />
              </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-gray-900">
                    <span className="block">Design</span>
                    <span className="block">Services</span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-4 leading-[1.6]">
                    What We Create
                  </p>
                  <ul className="text-sm md:text-base text-gray-500 leading-[1.6] space-y-2 w-full text-left flex-1">
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Logo and Brand Identity Systems</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">UI/UX (User Interface / User Experience) Design for Web and Mobile</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Social Media Creatives & Campaign Assets</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Brochures, Banners, and Marketing Collaterals</span>
                    </li>
                  </ul>
                  <hr className="w-full border-t border-orange-100 my-6" />
                  <div className="mt-auto w-full">
                    <p className="text-sm md:text-base text-gray-700 font-medium leading-[1.6]">
                      Professional. Trustworthy. Unforgettable.
                    </p>
              </div>
              </div>
              </div>

              {/* Card 2 — Development Services */}
              <div className="bg-white border border-secondary-500/30 rounded-lg p-8 md:p-10 hover:border-secondary-500 hover:shadow-sm transition-all duration-200 flex flex-col h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <Code2 className="w-12 h-12 text-secondary-500" viewBox="0 0 24 24" />
              </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-gray-900">
                    <span className="block">Development</span>
                    <span className="block">Services</span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-4 leading-[1.6]">
                    What We Build
                  </p>
                  <ul className="text-sm md:text-base text-gray-500 leading-[1.6] space-y-2 w-full text-left flex-1">
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
              </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Responsive Websites (custom codebase, WordPress, Webflow)</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
              </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">E-commerce Platforms (Shopify, WooCommerce)</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
              </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Mobile Applications using Flutter and React Native</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
              </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Backend Systems & API</span>
                    </li>
                  </ul>
                  <hr className="w-full border-t border-orange-100 my-6" />
                  <div className="mt-auto w-full">
                    <p className="text-sm md:text-base text-gray-700 font-medium leading-[1.6]">
                      Fast, scalable, and secure digital experiences.
                    </p>
              </div>
              </div>
            </div>

              {/* Card 3 — Digital Marketing */}
              <div className="bg-white border border-secondary-500/30 rounded-lg p-8 md:p-10 hover:border-secondary-500 hover:shadow-sm transition-all duration-200 flex flex-col h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <TrendingUp className="w-12 h-12 text-secondary-500" viewBox="0 0 24 24" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-gray-900">
                    <span className="block">Digital</span>
                    <span className="block">Marketing</span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mb-4 leading-[1.6]">
                    How We Grow Brands
                  </p>
                  <ul className="text-sm md:text-base text-gray-500 leading-[1.6] space-y-2 w-full text-left flex-1">
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <Search className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Search Engine Optimization</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Paid Advertisements across Google & Meta</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Social Media Management</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Content Marketing & Brand Storytelling</span>
                    </li>
                    <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" />
                      </div>
                      <span className="text-sm md:text-base leading-[1.6] text-gray-500 text-left">Analytics, Tracking & Performance Optimization</span>
                    </li>
                  </ul>
                  <hr className="w-full border-t border-orange-100 my-6" />
                  <div className="mt-auto w-full">
                    <p className="text-sm md:text-base text-gray-700 font-medium leading-[1.6]">
                      More visibility. Better leads. Higher conversions.
                    </p>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
              How We Work With You
            </h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Discovery & Strategy</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    We understand your business, goals, competition, and opportunities.
            </p>
          </div>
            </div>
            
              {/* Step 2 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Brand & Experience Design</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    We craft your visual identity, user experience, and communication style.
              </p>
            </div>
            </div>
            
              {/* Step 3 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Build & Develop</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Websites, apps, systems, automations — built for scale and speed.
              </p>
            </div>
          </div>
          
              {/* Step 4 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Market & Grow</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    We launch campaigns, track analytics, and optimize for consistent growth.
                  </p>
          </div>
        </div>

              {/* Step 5 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Improve & Support</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Ongoing upgrades, creative support, and monthly management.
                  </p>
              </div>
              </div>
            </div>

            <div className="gradient-secondary border-b border-secondary-500/30 rounded-lg p-4 md:p-6 mt-6 text-center w-full">
              <p className="text-base sm:text-lg md:text-xl text-white font-semibold">
                <span className="text-white/90">Outcome:</span> A long-term partnership for sustainable success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              What Makes Us Different
            </h2>
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Expert Designers, Developers, and Marketers</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Industry-Specific Strategies—Not Generic Templates</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Transparent Communication Through Every Stage</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">On-Time Delivery With Milestone-Based Planning</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg font-normal text-gray-700">Full-Stack Digital Support: From Concept to Scale</span>
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-bold mt-8 md:mt-10">
              Shark Creative Agency is not just a service provider —<br className="hidden sm:block" />
              <span className="text-secondary-500">we become your digital team.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Cutting-edge tools and technologies that power our innovative solutions
            </p>
          </div>
          
          <div className="py-8 md:py-12 space-y-6">
            <LogoLoop
              logos={[
                { node: <SiReact className="w-12 h-12 text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs className="w-12 h-12 text-gray-900" />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiTypescript className="w-12 h-12 text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                { node: <SiTailwindcss className="w-12 h-12 text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                { node: <SiNodedotjs className="w-12 h-12 text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
                { node: <SiPython className="w-12 h-12 text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
              ]}
              speed={40}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners track 1"
            />
            <LogoLoop
              logos={[
                { node: <SiFigma className="w-12 h-12 text-[#F24E1E]" />, title: "Figma", href: "https://www.figma.com" },
                { node: <SiAdobe className="w-12 h-12 text-[#FF0000]" />, title: "Adobe", href: "https://www.adobe.com" },
                { node: <SiJavascript className="w-12 h-12 text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { node: <SiHtml5 className="w-12 h-12 text-[#E34F26]" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { node: <SiCss3 className="w-12 h-12 text-[#1572B6]" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { node: <SiMongodb className="w-12 h-12 text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
              ]}
              speed={40}
              direction="right"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners track 2"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-gray-50 site-section">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your Brand Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 max-w-3xl mx-auto px-4">
            Ready to turn your idea into a powerful digital brand?
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 max-w-3xl mx-auto px-4">
            Our team is here to design, develop, and grow everything you envision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="btn-secondary-gradient inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0 px-12">
              Start Your Project
            </Link>
            <Link href="/contact-us" className="btn-primary inline-block max-w-xs sm:max-w-sm md:max-w-md mx-auto sm:mx-0 px-12">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Follow Us on Instagram</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 mb-6">
              Get inspired by our latest creative work and behind-the-scenes content
            </p>
          </div>
          
          {instagramPosts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {instagramPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative w-full">
                    <Image
                      src={post.image}
                      alt={post.alt || `Instagram post ${index + 1}`}
                      width={800}
                      height={800}
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No Instagram posts found. Add URLs to content/instagram/posts.md</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

