import { TrendingUp, Award, Users, Globe } from 'lucide-react'

const STATS = [
  { Icon: TrendingUp, value: '$4.2B', label: 'Total Property Sales', color: 'text-primary' },
  { Icon: Award, value: '15 yrs', label: 'Industry Experience', color: 'text-accent' },
  { Icon: Users, value: '12,000+', label: 'Happy Homeowners', color: 'text-primary' },
  { Icon: Globe, value: '48', label: 'Cities Worldwide', color: 'text-accent' },
]

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-olive-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(({ Icon, value, label, color }, index) => (
            <div
              key={label}
              className="flex flex-col items-center text-center group relative"
            >
              <div className={`w-12 h-12 rounded-xl bg-olive-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${color}`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-olive-900 mb-1.5">
                {value}
              </div>
              <div className="font-body text-sm text-olive-500 tracking-wide">
                {label}
              </div>
              {index < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-olive-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
