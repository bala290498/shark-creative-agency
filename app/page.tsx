import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import TextType from '@/components/TextType'
import { Testimonials } from '@/components/ui/testimonials'
import LogoLoop from '@/components/ui/logo-loop'
import { Rocket, Target, Handshake, Eye, X, CheckCircle2, Palette, Code, TrendingUp, Search, Lightbulb, Paintbrush, Smartphone, Globe, BarChart3, Users, MessageSquare, Clock, Zap, Building2, Sparkles } from 'lucide-react'
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
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We help entrepreneurs and businesses turn ideas into powerful brands with strategy, design, development, and marketing — all handled by one expert team.
            </p>
            
            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Complete brand foundation</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Modern, high-performing websites & apps</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Growth-focused digital marketing</span>
            </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">End-to-end creative support</span>
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
          
          {/* CTAs and Microcopy - Full Width */}
          <div className="w-full text-center mt-8 md:mt-12">
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
            <p className="text-sm sm:text-base text-gray-600 mt-4 md:mt-6">
              Community-backed. Proud collaborator of <span className="font-semibold text-gray-900">TrustRech Club</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 md:mb-8">
              Why Most Businesses Struggle
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700">
              Most founders and companies face the same obstacles:
            </p>
            
            {/* Problem List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 md:mb-8 max-w-4xl mx-auto">
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">No strong brand identity or positioning</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Outdated or inconsistent digital presence</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Websites or apps that don't convert</span>
          </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-red-500">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Ineffective marketing campaigns</span>
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
            <h2 className="mb-6 md:mb-8">
              A Complete Digital Transformation Partner
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700">
              Shark Creative Agency provides every service you need to launch, grow, and scale:
            </p>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 font-semibold">
              We handle:
            </p>
            
            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 md:mb-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Brand foundation</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Brand identity</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Brand experience</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Brand marketing</span>
              </div>
              <div className="bg-gray-50 p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Brand improvement</span>
                </div>
              </div>

            {/* Closing Statements */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
              One agency. One team. One seamless workflow.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
              You focus on business — we take care of everything else.
            </p>
              </div>
              </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 md:mb-8 text-center">
              What We Do
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {/* Design Services */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className=" mb-4 text-gray-900">Design Services</h3>
                <ul className="space-y-2 mb-6 text-gray-700 w-full">
                  <li className="flex items-start">
                    <Paintbrush className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Logo and brand identity systems</span>
                  </li>
                  <li className="flex items-start">
                    <Smartphone className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">UI/UX (User Interface / User Experience) design for web and mobile</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Social media creatives & campaign assets</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Brochures, banners, and marketing collaterals</span>
                  </li>
                </ul>
                <p className="text-sm sm:text-base text-gray-600 font-medium text-center">
                  <span className="text-secondary-500">Outcome:</span> A brand that looks professional, trustworthy, and unforgettable.
                </p>
              </div>
              </div>

              {/* Development Services */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Code className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className=" mb-4 text-gray-900">Development Services</h3>
                <ul className="space-y-2 mb-6 text-gray-700 w-full">
                  <li className="flex items-start">
                    <Globe className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Responsive websites (custom codebase, WordPress, Webflow)</span>
                  </li>
                  <li className="flex items-start">
                    <Building2 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">E-commerce platforms (Shopify, WooCommerce)</span>
                  </li>
                  <li className="flex items-start">
                    <Smartphone className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Mobile apps using Flutter and React Native </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Backend systems & API integrations</span>
                  </li>
                </ul>
                <p className="text-sm sm:text-base text-gray-600 font-medium text-center">
                  <span className="text-secondary-500">Outcome:</span> Fast, scalable, secure digital platforms built for performance.
                </p>
              </div>
            </div>

              {/* Digital Marketing */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-500 mb-4" />
                  <h3 className=" mb-4 text-gray-900">Digital Marketing</h3>
                <ul className="space-y-2 mb-6 text-gray-700 w-full">
                  <li className="flex items-start">
                    <Search className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Search engine optimization </span>
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Paid ads across Google & Meta</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Social media management</span>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Content marketing & brand storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Analytics, tracking, and performance optimization</span>
                  </li>
                </ul>
                <p className="text-sm sm:text-base text-gray-600 font-medium text-center">
                  <span className="text-secondary-500">Outcome:</span> Visibility, leads, conversions, and long-term growth.
                </p>
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
            <h2 className="mb-8 md:mb-12 text-center">
              How We Work With You
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              {/* Step 1 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Search className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">Discovery & Strategy</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    We understand your business, goals, competition, and opportunities.
            </p>
          </div>
            </div>
            
              {/* Step 2 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">Brand & Experience Design</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    We craft your visual identity, user experience, and communication style.
              </p>
            </div>
            </div>
            
              {/* Step 3 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">Build & Develop</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Websites, apps, systems, automations — built for scale and speed.
              </p>
            </div>
          </div>
          
              {/* Step 4 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">Market & Grow</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    We launch campaigns, track analytics, and optimize for consistent growth.
                  </p>
          </div>
        </div>

              {/* Step 5 */}
              <div className="bg-white p-6 md:p-8 text-center">
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-500 mb-4" />
                  <h3 className=" mb-2 text-gray-900">Improve & Support</h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    Ongoing upgrades, creative support, and monthly management.
                  </p>
              </div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium text-center mt-6 md:mt-8">
              <span className="text-secondary-500">Outcome:</span> A long-term partnership for sustainable success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 md:mb-8">
              What Makes Us Different
            </h2>
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Expert designers, developers, and marketers</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Industry-specific strategies—not generic templates</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Transparent communication through every stage</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">On-time delivery with milestone-based planning</span>
              </div>
              <div className="bg-white p-4 flex items-start border-l-4 border-secondary-500">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-base sm:text-lg text-gray-700">Full-stack digital support: from concept to scale</span>
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 font-bold">
              Shark Creative Agency is not just a service provider —<br className="hidden sm:block" />
              <span className="text-secondary-500">we become your digital team.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center mb-12">
            <h2 className="mb-3 md:mb-4">Technologies We Use</h2>
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
      <section className="bg-white site-section">
        <div className="container-custom text-center">
          <h2 className="mb-6 md:mb-8">
            Let's Build Your Brand Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-3xl mx-auto px-4">
            Ready to turn your idea into a powerful digital brand?
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-3xl mx-auto px-4">
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
      <section className="bg-gray-50 site-section">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center">
            <h2 className="mb-6 md:mb-8">Follow Us on Instagram</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 mb-6 md:mb-8">
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

