import type { Metadata } from 'next'
import Link from 'next/link'
import { Timeline } from '@/components/ui/timeline'
import { Brain, Laptop, Settings, Sparkles, Users, Handshake, Palette, MapPin, Fish, Scroll, Rocket, Building2, Wrench, TrendingUp, Dna, Globe, Award, Link2, BarChart3, Lightbulb, Sprout } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Works',
  description: 'Explore our portfolio of creative projects, digital solutions, and successful campaigns. See how Shark Creative Agency has helped businesses transform their brands.',
  openGraph: {
    title: 'Our Works | Shark Creative Agency',
    description: 'Explore our portfolio of creative projects and digital solutions.',
  },
}

export default function Works() {
  const timelineData = [
    {
      title: '2020',
      subtitle: 'The Beginning',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Brain className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Vision Tile</h4>
            <p className="text-gray-600 text-sm">One designer, one dream — crafting digital impact.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Laptop className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Snapshot</h4>
            <p className="text-gray-600 text-sm">Showcase 2–3 early freelance works (logos, websites).</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Settings className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Tools Used</h4>
            <p className="text-gray-600 text-sm">Adobe Photoshop, Illustrator, Figma</p>
          </div>
          <div className="md:col-span-3 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Sparkles className="w-8 h-8 text-tiger-orange mb-3" />
            <p className="text-gray-900 text-lg font-semibold">"Started with passion, powered by creativity."</p>
          </div>
        </div>
      ),
    },
    {
      title: '2021',
      subtitle: 'The Community Era',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Tile</h4>
            <p className="text-gray-600 text-sm">Photos or avatars of the first community members.</p>
          </div>
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Handshake className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration Tile</h4>
            <p className="text-gray-600 text-sm">From solo work to a creative collective.</p>
          </div>
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Palette className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Showcase Tile</h4>
            <p className="text-gray-600 text-sm">Highlights of joint design projects or brand work.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-8 h-8 text-tiger-orange mb-3" />
            <p className="text-gray-900 text-sm font-semibold">"When talent meets purpose, creativity thrives."</p>
          </div>
        </div>
      ),
    },
    {
      title: '2022',
      subtitle: 'The Birth of Shark Creative Agency',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Fish className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Brand Reveal Tile</h4>
            <p className="text-gray-600 text-sm">Shark logo, color palette, and design identity.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Scroll className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Launch Announcement</h4>
            <p className="text-gray-600 text-sm">Officially established: Shark Creative Agency.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Rocket className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Milestone Tile</h4>
            <p className="text-gray-600 text-sm">First major client project delivered.</p>
          </div>
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Building2 className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Behind the Scenes</h4>
            <p className="text-gray-600 text-sm">Agency setup visuals or team workspace.</p>
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      subtitle: 'Expansion & Innovation',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Wrench className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Tools Tile</h4>
            <p className="text-gray-600 text-sm">AI-powered design tools: Midjourney, ChatGPT</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <TrendingUp className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Growth Metrics</h4>
            <p className="text-gray-600 text-sm">Team doubled, Clients +150%</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Dna className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation Tile</h4>
            <p className="text-gray-600 text-sm">AI + creativity = new possibilities</p>
          </div>
          <div className="md:col-span-3 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Globe className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-gray-900 text-lg font-semibold mb-2">Marketing Revolution</h4>
            <p className="text-gray-600 text-sm">Shaping the future of digital storytelling.</p>
          </div>
        </div>
      ),
    },
    {
      title: '2024',
      subtitle: 'Diversification',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Building2 className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Division Tiles</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gray-900">Branding</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gray-900">Digital Marketing</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gray-900">AI Design</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gray-900">Media</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Globe className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Projects</h4>
            <p className="text-gray-600 text-sm">Showcase map or brands across countries.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Award className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h4>
            <p className="text-gray-600 text-sm">Awards, recognitions, or press features.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Link2 className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Partnership Tile</h4>
            <p className="text-gray-600 text-sm">Logos or icons of key collaborations.</p>
          </div>
        </div>
      ),
    },
    {
      title: '2025',
      subtitle: 'Continuous Growth',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <BarChart3 className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Progress Tile</h4>
            <p className="text-gray-600 text-sm">Key growth numbers or graphs (clients, revenue, reach).</p>
          </div>
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Rocket className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-gray-900 text-lg font-semibold mb-2">Future Vision</h4>
            <p className="text-gray-600 text-sm">Designing tomorrow's creative ecosystem.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Lightbulb className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation Pipeline</h4>
            <p className="text-gray-600 text-sm">Teaser of upcoming tech integrations.</p>
          </div>
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Sprout className="w-8 h-8 text-tiger-orange mb-3" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Culture Tile</h4>
            <p className="text-gray-600 text-sm">Photos showing team values, sustainability, and creativity.</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline 
          data={timelineData}
          heading="Our Creative Journey"
          description="A timeline showcasing our portfolio of successful projects and achievements in digital design, branding, and marketing."
        />
      </div>
      
      {/* CTA Section */}
      <section className="bg-white section-padding relative z-10">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Let&apos;s work together to create something amazing. Get in touch with us today.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary inline-block w-full sm:w-auto px-12">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

