'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-[0_1px_3px_0_rgb(0,0,0,0.1)] overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="flex items-center justify-between py-4 md:py-0 md:h-16 min-w-0">
          <Link href="/" className="flex items-center flex-shrink-0 min-w-0">
            <Image 
              src="/logo.png" 
              alt="Shark Creative Agency" 
              width={220} 
              height={55}
              className="h-10 md:h-12 w-auto max-w-[180px] md:max-w-[220px]"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end flex-1 w-full ml-4 md:ml-8 gap-2 md:gap-3 lg:gap-4 overflow-x-auto">
            <Link href="/" className="text-gray-700 hover:text-secondary-500 transition-colors text-center py-2 px-2 md:px-3 rounded hover:bg-gray-50 whitespace-nowrap no-underline text-sm md:text-base">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-secondary-500 transition-colors text-center py-2 px-2 md:px-3 rounded hover:bg-gray-50 whitespace-nowrap no-underline text-sm md:text-base">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-secondary-500 transition-colors text-center py-2 px-2 md:px-3 rounded hover:bg-gray-50 whitespace-nowrap no-underline text-sm md:text-base">
              About Us
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-secondary-500 transition-colors text-center py-2 px-2 md:px-3 rounded hover:bg-gray-50 whitespace-nowrap no-underline text-sm md:text-base">
              Blog
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-secondary-500 transition-colors text-center py-2 px-2 md:px-3 rounded hover:bg-gray-50 whitespace-nowrap no-underline text-sm md:text-base">
              Careers
            </Link>
            <Link href="/internship" className="text-gray-700 hover:text-secondary-500 transition-colors text-center py-2 px-2 md:px-3 rounded hover:bg-gray-50 whitespace-nowrap no-underline text-sm md:text-base">
              Internship
            </Link>
            <Link href="/contact-us" className="btn-secondary-gradient whitespace-nowrap text-center px-3 md:px-4 lg:px-6 flex-shrink-0 no-underline text-sm md:text-base">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-secondary-500 text-center no-underline" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-secondary-500 text-center no-underline" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-secondary-500 text-center no-underline" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-secondary-500 text-center no-underline" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/careers" className="block text-gray-700 hover:text-secondary-500 text-center no-underline" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link href="/internship" className="block text-gray-700 hover:text-secondary-500 text-center no-underline" onClick={() => setIsOpen(false)}>
              Internship
            </Link>
            <div className="flex justify-center pt-2">
              <Link href="/contact-us" className="btn-secondary-gradient max-w-xs sm:max-w-sm md:max-w-md mx-auto w-full text-center no-underline" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

