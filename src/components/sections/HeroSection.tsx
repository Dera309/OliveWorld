import { useState } from 'react'
import { Search, MapPin, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LOCATIONS, PROPERTY_TYPES } from '@/data/properties'

interface HeroSectionProps {
  onSearch: (location: string, type: string, query: string) => void
}

const STATS = [
  { value: '2,400+', label: 'Properties Listed' },
  { value: '48', label: 'Cities Covered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$4.2B', label: 'Total Sales' },
]

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')

  const handleSearch = () => {
    onSearch(location, type, query)
    document.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-olive-950/70 via-olive-950/60 to-olive-950/80" />

      {/* Floating pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center pt-32 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-body text-sm text-white/90 tracking-wide">Premium Real Estate Since 2008</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6">
          Find Your
          <span className="block text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #c8d96a 0%, #a8c44a 40%, #6c9e30 100%)' }}>
            Dream Home
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover hand-selected properties in the world's most sought-after locations — from sun-drenched villas to skyline penthouses.
        </p>

        {/* Search Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 md:p-4 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Keyword */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search by keyword..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                className="w-full h-12 bg-white/10 border border-white/20 rounded-xl pl-11 pr-4 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
              />
            </div>

            {/* Location */}
            <div className="md:w-44">
              <Select onValueChange={setLocation}>
                <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white font-body text-sm rounded-xl focus:ring-2 focus:ring-white/30 [&>span]:text-white/60 hover:bg-white/15">
                  <MapPin className="w-4 h-4 mr-1.5 text-white/50 shrink-0" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="font-body">
                  {LOCATIONS.slice(1).map(loc => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type */}
            <div className="md:w-40">
              <Select onValueChange={setType}>
                <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white font-body text-sm rounded-xl focus:ring-2 focus:ring-white/30 [&>span]:text-white/60 hover:bg-white/15">
                  <ChevronDown className="w-4 h-4 mr-1.5 text-white/50 shrink-0" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="font-body capitalize">
                  {PROPERTY_TYPES.slice(1).map(t => (
                    <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSearch}
              className="h-12 px-8 bg-primary hover:bg-primary-dark text-white font-body font-semibold rounded-xl shadow-lg transition-all hover:scale-[1.02]"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mt-12 max-w-3xl mx-auto border border-white/10">
          {STATS.map(stat => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-sm px-6 py-5 text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="font-body text-xs text-white/55 tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
