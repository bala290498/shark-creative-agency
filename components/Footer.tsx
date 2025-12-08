import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Shark Creative Agency" 
                width={220} 
                height={55}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600">
              Shark Creative Agency — Where ideas transform into impact.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Careers</Link>
              </li>
              <li>
                <Link href="/internship" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Internship</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Our Services</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/works" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Our Works</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="mailto:contact@sharkcreativeagency.com" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">
                  contact@sharkcreativeagency.com
                </a>
              </li>
              <li>
                <a href="tel:+919677691237" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">
                  +91 9677691237
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <Link href="/privacy" className="hover:text-secondary-500 transition-colors focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus-visible:outline-none rounded">Privacy Policy</Link>
          </div>
          <p>&copy; {currentYear} Shark Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

