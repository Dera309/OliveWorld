import { Search, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import type { FilterState } from '@/types/property'
import { LOCATIONS, PROPERTY_TYPES, BEDROOM_OPTIONS } from '@/data/properties'
import { formatPrice } from '@/lib/utils'
import { useState } from 'react'

interface FilterBarProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  resultCount: number
}

const DEFAULT_FILTERS: FilterState = {
  search: '',
  location: '',
  type: '',
  minPrice: 0,
  maxPrice: 10000000,
  minSize: 0,
  maxSize: 10000,
  bedrooms: '',
}

export default function FilterBar({ filters, onFilterChange, resultCount }: FilterBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const update = (partial: Partial<FilterState>) =>
    onFilterChange({ ...filters, ...partial })

  const hasActiveFilters =
    filters.search ||
    filters.location ||
    filters.type ||
    filters.minPrice > 0 ||
    filters.maxPrice < 10000000 ||
    filters.minSize > 0 ||
    filters.maxSize < 10000 ||
    filters.bedrooms

  const reset = () => onFilterChange({ ...DEFAULT_FILTERS })

  return (
    <div className="bg-white rounded-2xl border border-olive-100 shadow-sm overflow-hidden">
      {/* Main Filter Row */}
      <div className="p-4 md:p-5 flex flex-wrap items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-400" />
          <input
            type="text"
            placeholder="Search properties..."
            value={filters.search}
            onChange={e => update({ search: e.target.value })}
            className="w-full h-10 bg-olive-50 border border-olive-200 rounded-xl pl-10 pr-4 text-sm font-body text-olive-800 placeholder-olive-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
          />
        </div>

        {/* Location */}
        <div className="w-40">
          <Select value={filters.location || 'all'} onValueChange={v => update({ location: (v === 'all' || v === null) ? '' : v })}>
            <SelectTrigger className="h-10 font-body text-sm bg-olive-50 border-olive-200 rounded-xl text-olive-700 focus:ring-primary/20">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent className="font-body">
              {LOCATIONS.map(loc => (
                <SelectItem key={loc} value={loc === 'All Locations' ? 'all' : loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="w-36">
          <Select value={filters.type || 'all'} onValueChange={v => update({ type: (v === 'all' || v === null) ? '' : v })}>
            <SelectTrigger className="h-10 font-body text-sm bg-olive-50 border-olive-200 rounded-xl text-olive-700 capitalize focus:ring-primary/20">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="font-body">
              {PROPERTY_TYPES.map(t => (
                <SelectItem key={t} value={t === 'All Types' ? 'all' : t} className="capitalize">{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        <div className="w-28">
          <Select value={filters.bedrooms || 'any'} onValueChange={v => update({ bedrooms: (v === 'any' || v === null) ? '' : v })}>
            <SelectTrigger className="h-10 font-body text-sm bg-olive-50 border-olive-200 rounded-xl text-olive-700 focus:ring-primary/20">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent className="font-body">
              {BEDROOM_OPTIONS.map(b => (
                <SelectItem key={b} value={b === 'Any' ? 'any' : b}>{b === 'Any' ? 'Any Beds' : `${b} Beds`}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAdvanced(s => !s)}
          className={`h-10 gap-2 font-body text-sm border-olive-200 rounded-xl ${showAdvanced ? 'bg-primary text-white border-primary hover:bg-primary-dark' : 'text-olive-700 hover:text-primary'}`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-accent" />
          )}
        </Button>

        {/* Results & Reset */}
        <div className="ml-auto flex items-center gap-3">
          {hasActiveFilters && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 text-xs text-olive-500 hover:text-red-500 font-body transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
          <Badge variant="secondary" className="bg-olive-100 text-olive-700 font-body font-medium px-3 py-1 rounded-full">
            {resultCount} {resultCount === 1 ? 'property' : 'properties'}
          </Badge>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvanced && (
        <div className="border-t border-olive-100 bg-olive-50/50 px-4 md:px-5 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Price Range */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-sm font-semibold text-olive-700">Price Range</span>
                <span className="font-body text-xs text-primary font-medium">
                  {formatPrice(filters.minPrice)} — {filters.maxPrice >= 10000000 ? 'Any' : formatPrice(filters.maxPrice)}
                </span>
              </div>
              <Slider
                min={0}
                max={10000000}
                step={50000}
                value={[filters.minPrice, filters.maxPrice]}
                onValueChange={(v) => { const vals = v as number[]; update({ minPrice: vals[0], maxPrice: vals[1] }) }}
                className="[&>[data-slot=slider-thumb]]:border-primary [&>[data-slot=slider-range]]:bg-primary"
              />
              <div className="flex justify-between mt-2">
                <span className="font-body text-xs text-olive-400">$0</span>
                <span className="font-body text-xs text-olive-400">$10M+</span>
              </div>
            </div>

            {/* Size Range */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-sm font-semibold text-olive-700">Size (sqft)</span>
                <span className="font-body text-xs text-primary font-medium">
                  {filters.minSize.toLocaleString()} — {filters.maxSize >= 10000 ? 'Any' : filters.maxSize.toLocaleString() + ' sqft'}
                </span>
              </div>
              <Slider
                min={0}
                max={10000}
                step={100}
                value={[filters.minSize, filters.maxSize]}
                onValueChange={(v) => { const vals = v as number[]; update({ minSize: vals[0], maxSize: vals[1] }) }}
                className="[&>[data-slot=slider-thumb]]:border-primary [&>[data-slot=slider-range]]:bg-primary"
              />
              <div className="flex justify-between mt-2">
                <span className="font-body text-xs text-olive-400">0 sqft</span>
                <span className="font-body text-xs text-olive-400">10,000+ sqft</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
