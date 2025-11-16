'use client'

export default function GrowthGraphCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-48 h-32 border border-gray-200">
      <div className="flex items-center justify-between h-full">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 mb-1">Growth</span>
          <span className="text-2xl font-bold text-secondary-500">+85%</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          <div className="w-3 bg-gray-200 rounded-t" style={{ height: '40%' }}></div>
          <div className="w-3 bg-gray-200 rounded-t" style={{ height: '55%' }}></div>
          <div className="w-3 bg-gray-200 rounded-t" style={{ height: '70%' }}></div>
          <div className="w-3 bg-secondary-500 rounded-t" style={{ height: '100%' }}></div>
          <div className="w-3 bg-secondary-500 rounded-t" style={{ height: '90%' }}></div>
        </div>
      </div>
    </div>
  )
}

