import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              Transforming brands through innovative digital solutions and creative excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-secondary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary-500 transition-colors">Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Web Design</li>
              <li>Branding</li>
              <li>Digital Marketing</li>
              <li>SEO</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="mailto:contact@sharkcreativeagency.com" className="hover:text-secondary-500 transition-colors">
                  contact@sharkcreativeagency.com
                </a>
              </li>
              <li>
                <a href="tel:+917010584543" className="hover:text-secondary-500 transition-colors">
                  +91 7010584543
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-secondary-500 transition-colors" aria-label="Facebook">Facebook</a>
                <a href="#" className="hover:text-secondary-500 transition-colors" aria-label="Twitter">Twitter</a>
                <a href="#" className="hover:text-secondary-500 transition-colors" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" className="hover:text-secondary-500 transition-colors" aria-label="Instagram">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Shark Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

