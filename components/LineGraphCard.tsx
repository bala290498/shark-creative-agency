'use client'

export default function LineGraphCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-48 h-32 border border-gray-200">
      <div className="flex flex-col h-full">
        <span className="text-xs text-gray-500 mb-2">Performance</span>
        <div className="flex-1 flex items-end gap-1">
          {/* First Line Graph */}
          <div className="flex-1 flex flex-col items-center">
            <svg className="w-full h-12 mb-1" viewBox="0 0 40 20" preserveAspectRatio="none">
              <polyline
                points="0,18 5,15 10,12 15,10 20,8 25,6 30,5 35,4 40,3"
                fill="none"
                stroke="#ff6b35"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[10px] text-gray-600">Growth</span>
          </div>
          
          {/* Second Line Graph */}
          <div className="flex-1 flex flex-col items-center">
            <svg className="w-full h-12 mb-1" viewBox="0 0 40 20" preserveAspectRatio="none">
              <polyline
                points="0,15 5,12 10,10 15,8 20,6 25,5 30,4 35,3 40,2"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[10px] text-gray-600">Revenue</span>
          </div>
        </div>
      </div>
    </div>
  )
}

