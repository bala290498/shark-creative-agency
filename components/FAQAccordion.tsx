'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 border-l-4 border-secondary-500 overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
            style={{ border: 'none', background: 'transparent' }}
          >
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
              {item.question}
            </h4>
            <ChevronDown
              className={`w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div
              id={`faq-answer-${index}`}
              className="px-6 pb-6 pt-0"
            >
              <p className="text-base sm:text-lg text-gray-700">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

