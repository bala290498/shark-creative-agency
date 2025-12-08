import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import TextType from '@/components/TextType'
import { Testimonials } from '@/components/ui/testimonials'
import CurvedLoop from '@/components/ui/curved-loop'
import LogoLoop from '@/components/ui/logo-loop'
import { Palette, Laptop, Smartphone, Search, Rocket, Target, Handshake, Eye } from 'lucide-react'
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
      <section className="bg-white text-gray-900 section-padding pb-4 md:pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-2">
                  Shark Creative Agency
                </h1>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 min-h-[3rem] md:min-h-[4rem]">
                <TextType 
                  text={[
                    "Transform Your Brand",
                    "Innovative Digital Solutions",
                    "Elevate Your Brand"
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-gray-900"
                  cursorClassName="text-secondary-500"
                />
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-700">
                We're a full-service creative agency specializing in digital solutions, branding, and marketing that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Link href="/services" className="btn-primary text-center w-full sm:w-auto">
                  Our Services
                </Link>
                <Link href="/contact" className="btn-secondary-gradient text-center w-full sm:w-auto">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="hidden md:block">
              <div className="scale-[1.2] origin-center">
                <Image
                  src="/hero.png"
                  alt="Hero"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Mobile: Show hero image */}
            <div className="md:hidden">
              <div className="scale-[1.2] origin-center">
                <Image
                  src="/hero.png"
                  alt="Hero"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved Loop Marquee - Extended Belt with Image */}
      <div className="bg-white relative">
        <div className="gradient-secondary relative h-[320px] md:h-[400px] w-full overflow-hidden">
          {/* Top Loop - Above Image */}
          <div className="absolute inset-x-0 top-0 md:top-4 h-1/2 md:h-auto flex items-center px-4 md:px-0 z-0">
            <CurvedLoop 
              marqueeText="MARKET CONTENT MARKETING"
              speed={0.5}
              curveAmount={0}
              direction="left"
              interactive={false}
              className="text-[22vw] sm:text-[14vw] md:text-[6vw] lg:text-[5vw]"
            />
          </div>
          
          {/* Image - Middle Layer */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto h-full">
              <Image
                src="/slider.png"
                alt="Slider"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Bottom Loop - Below Image with spacing */}
          <div className="absolute inset-x-0 bottom-0 md:bottom-4 h-1/2 md:h-auto flex items-center px-4 md:px-0 z-20">
            <CurvedLoop 
              marqueeText="MEDIA ON SOCIAL MEDIA"
              speed={0.5}
              curveAmount={0}
              direction="right"
              interactive={false}
              className="text-[22vw] sm:text-[14vw] md:text-[6vw] lg:text-[5vw]"
            />
          </div>
        </div>
      </div>

      {/* Brand Insights Bento Grid Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Bento Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Large Card - Happy Clients */}
              <div className="col-span-2 gradient-secondary rounded-lg p-4 md:p-5 flex flex-col justify-center shadow-lg">
                <div className="text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                  <div className="text-sm md:text-base font-semibold mb-0.5">Happy Clients</div>
                  <div className="text-xs md:text-sm opacity-90">Satisfied customers</div>
                </div>
              </div>

              {/* Lines of Code */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">2M+</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Lines of Code</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Written & optimized</div>
              </div>

              {/* Projects Delivered */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">350+</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Projects</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Delivered</div>
              </div>

              {/* Years of Experience */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">7+</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Years</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Experience</div>
              </div>

              {/* Countries Served */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">25+</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Countries</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Global reach</div>
              </div>

              {/* Team Members */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">50+</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Team Members</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Expert professionals</div>
              </div>

              {/* Awards Won */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">15+</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Awards</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Industry recognition</div>
              </div>

              {/* Client Retention */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">90%</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Retention</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Client satisfaction</div>
              </div>

              {/* Support Hours */}
              <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-secondary-500 mb-1">24/7</div>
                <div className="text-xs md:text-sm font-medium text-gray-900">Support</div>
                <div className="text-[10px] md:text-xs text-gray-600 mt-0.5">Always available</div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Impact in Numbers</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                Our track record speaks for itself. With over 500 happy clients across 25+ countries, we've built a reputation for delivering exceptional results. Our team has written over 2 million lines of code, powering 350+ successful projects.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                With 7+ years of experience in the creative industry, we've helped businesses transform their digital presence and achieve their goals. Every project is crafted with precision, creativity, and a commitment to excellence.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                These numbers represent more than just statistics—they represent trust, dedication, and the countless hours we've invested in making our clients successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive solutions to elevate your brand and drive business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Palette className="w-10 h-10 text-secondary-500 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Brand Identity</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Create a memorable brand that resonates with your audience and stands out in the market.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Laptop className="w-10 h-10 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-gray-600">
                Modern, responsive websites that convert visitors into customers and drive business growth.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Smartphone className="w-10 h-10 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Strategic marketing campaigns that increase visibility and generate qualified leads.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Search className="w-10 h-10 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p className="text-gray-600">
                Improve your search engine rankings and drive organic traffic to your website.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary-gradient inline-block w-full sm:w-auto px-12">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Statistics Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">7+</div>
                <p className="text-sm md:text-base text-gray-900 font-medium">Years of Experience</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">90%</div>
                <p className="text-sm md:text-base text-gray-900 font-medium">Client Retention</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">350+</div>
                <p className="text-sm md:text-base text-gray-900 font-medium">Projects Delivered</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">150+</div>
                <p className="text-sm md:text-base text-gray-900 font-medium">Clients Worldwide</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Track Record</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                With over 7 years of experience in the creative industry, we've built a reputation for delivering exceptional results. Our commitment to excellence has earned us the trust of clients worldwide, with a remarkable 90% client retention rate.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
                We've successfully completed 350+ projects across various industries, helping businesses transform their digital presence and achieve their goals. Our global reach extends to 150+ clients, each benefiting from our innovative solutions and personalized approach.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                At Shark Creative Agency, numbers tell a story, but our client relationships tell the real story of our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Technologies We Use</h2>
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

      {/* Why Choose Us */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why Choose Shark Creative Agency?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We combine creativity with strategy to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Rocket className="w-12 h-12 text-secondary-500 mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We stay ahead of trends and use cutting-edge technology to deliver innovative solutions that set you apart.
              </p>
            </div>
            
            <div className="text-center">
              <Target className="w-12 h-12 text-secondary-500 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-600">
                Every project is designed with your business goals in mind, ensuring measurable results and ROI.
              </p>
            </div>
            
            <div className="text-center">
              <Handshake className="w-12 h-12 text-secondary-500 mb-4 mx-auto" />
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Ready to Transform Your Brand?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 max-w-2xl mx-auto px-4">
            Let's work together to create something amazing. Get in touch with us today.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-secondary-gradient inline-block w-full sm:w-auto px-12">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">Follow Us on Instagram</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
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
