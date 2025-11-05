import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Works',
  description: 'Explore our portfolio of creative projects, digital solutions, and successful campaigns. See how Shark Creative Agency has helped businesses transform their brands.',
  openGraph: {
    title: 'Our Works | Shark Creative Agency',
    description: 'Explore our portfolio of creative projects and digital solutions.',
  },
}

export default function Works() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      category: 'Web Design',
      description: 'Complete redesign of a modern e-commerce platform with improved UX and conversion optimization.',
      image: '/logo.png', // Placeholder - replace with actual project images
    },
    {
      id: 2,
      title: 'Brand Identity Transformation',
      category: 'Branding',
      description: 'Complete brand overhaul including logo, color palette, typography, and brand guidelines.',
      image: '/logo.png',
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      description: 'Multi-platform social media campaign that increased engagement by 300% and brand awareness.',
      image: '/logo.png',
    },
    {
      id: 4,
      title: 'Mobile App Design',
      category: 'App Design',
      description: 'User-centered mobile app design with intuitive interface and seamless user experience.',
      image: '/logo.png',
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Modern, responsive corporate website with advanced features and optimal performance.',
      image: '/logo.png',
    },
    {
      id: 6,
      title: 'Product Launch Campaign',
      category: 'Marketing',
      description: 'Comprehensive product launch campaign across multiple channels with measurable results.',
      image: '/logo.png',
    },
  ]

  const categories = ['All', 'Web Design', 'Branding', 'Digital Marketing', 'App Design', 'Marketing']

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Showcasing our creative excellence and successful projects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:border-tiger-orange hover:text-tiger-orange transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 bg-gradient-to-br from-tiger-orange to-tiger-orange-600 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <p className="text-sm opacity-90">Project Image</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-tiger-orange font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href="#"
                    className="text-tiger-orange font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch with us today.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary inline-block w-full sm:w-auto px-12">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

