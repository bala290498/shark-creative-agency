import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-screen-lg section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 min-w-0">
          {/* About Section */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-gray-900">About Shark</h4>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Shark Creative Agency helps businesses of all sizes build powerful digital brands. We combine strategy, design, development, and marketing to deliver exceptional results that drive growth.
            </p>
          </div>
          
          {/* Our Services Section */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-gray-900">Our Services</h4>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Web Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">App Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Search Engine Optimization</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Graphic Design</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Content Writing</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Brand Identity</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">UI/UX Design</Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links Section */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
              <li>
                <Link href="/" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Services</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Careers</Link>
              </li>
              <li>
                <Link href="/internship" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Internship</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Blog</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-secondary-500 hover:text-secondary-600 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Follow Us Section */}
          <div className="min-w-0">
            <h4 className="font-semibold mb-4 text-gray-900">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com/sharkcreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-500 hover:bg-secondary-600 text-white p-2 rounded-lg transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/sharkcreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-500 hover:bg-secondary-600 text-white p-2 rounded-lg transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/sharkcreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-500 hover:bg-secondary-600 text-white p-2 rounded-lg transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/sharkcreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-500 hover:bg-secondary-600 text-white p-2 rounded-lg transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@sharkcreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-500 hover:bg-secondary-600 text-white p-2 rounded-lg transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="Shark Creative Agency" 
                width={300} 
                height={75}
                className="h-20 sm:h-24 w-auto"
              />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Shark Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
