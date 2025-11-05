'use client'

export default function ProgressCircleCard({ percentage = 75 }: { percentage?: number }) {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="bg-white rounded-full shadow-lg p-4 w-32 h-32 border border-gray-200 flex items-center justify-center">
      <div className="relative">
        <svg className="transform -rotate-90" width="80" height="80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#ff6b35"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-tiger-orange">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

