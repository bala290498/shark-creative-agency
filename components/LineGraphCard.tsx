'use client'

export default function LineGraphCard() {
  const growthPercentage = 85
  const revenuePercentage = 72

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-48 h-32 border border-gray-200">
      <div className="flex flex-col h-full">
        <span className="text-xs text-gray-500 mb-4">Performance</span>
        <div className="flex-1 flex flex-col gap-4">
          {/* Growth Progress Bar */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-gray-600">Growth</span>
              <span className="text-[10px] font-semibold text-tiger-orange">{growthPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-tiger-orange rounded-full transition-all duration-500"
                style={{ width: `${growthPercentage}%` }}
              />
            </div>
          </div>
          
          {/* Revenue Progress Bar */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-gray-600">Revenue</span>
              <span className="text-[10px] font-semibold text-indigo-600">{revenuePercentage}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${revenuePercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

