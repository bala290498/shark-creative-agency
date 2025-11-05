'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-0 md:h-16 relative">
          <Link href="/" className="flex items-center mb-4 md:mb-0 md:flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Shark Creative Agency" 
              width={220} 
              height={55}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end flex-1 w-full ml-8 space-x-2 md:space-x-4 lg:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-tiger-orange transition-colors flex-1 text-center py-2 px-4 rounded hover:bg-gray-50 min-w-0">
              Home
            </Link>
            <Link href="/works" className="text-gray-700 hover:text-tiger-orange transition-colors flex-1 text-center py-2 px-4 rounded hover:bg-gray-50 min-w-0">
              Our Works
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-tiger-orange transition-colors flex-1 text-center py-2 px-4 rounded hover:bg-gray-50 min-w-0">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-tiger-orange transition-colors flex-1 text-center py-2 px-4 rounded hover:bg-gray-50 min-w-0">
              About Us
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-tiger-orange transition-colors flex-1 text-center py-2 px-4 rounded hover:bg-gray-50 min-w-0">
              Careers
            </Link>
            <Link href="/contact" className="btn-primary flex-1 text-center min-w-0">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 absolute top-4 right-4"
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
            <Link href="/" className="block text-gray-700 hover:text-tiger-orange text-center" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/works" className="block text-gray-700 hover:text-tiger-orange text-center" onClick={() => setIsOpen(false)}>
              Our Works
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-tiger-orange text-center" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-tiger-orange text-center" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/careers" className="block text-gray-700 hover:text-tiger-orange text-center" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <div className="flex justify-center pt-2">
              <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

