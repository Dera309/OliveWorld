import { useState, useMemo } from 'react'
import { Building2 } from 'lucide-react'
import PropertyCard from '@/components/property/PropertyCard'
import FilterBar from '@/components/property/FilterBar'
import PropertyDetailModal from '@/components/property/PropertyDetailModal'
import { PROPERTIES } from '@/data/properties'
import type { Property, FilterState } from '@/types/property'

interface ListingsSectionProps {
  initialFilters?: Partial<FilterState>
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

export default function ListingsSection({ initialFilters }: ListingsSectionProps) {
  const [filters, setFilters] = useState<FilterState>({
    ...DEFAULT_FILTERS,
    ...initialFilters,
  })
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filtered = useMemo(() => {
    return PROPERTIES.filter(p => {
      const q = filters.search.toLowerCase()
      if (q && !p.title.toLowerCase().includes(q) && !p.city.toLowerCase().includes(q) && !p.location.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false
      if (filters.location && p.city !== filters.location) return false
      if (filters.type && p.type !== filters.type) return false
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false
      if (p.size < filters.minSize || p.size > filters.maxSize) return false
      if (filters.bedrooms) {
        const minBeds = parseInt(filters.bedrooms)
        if (!isNaN(minBeds) && p.bedrooms < minBeds) return false
      }
      return true
    })
  }, [filters])

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property)
    setModalOpen(true)
  }

  return (
    <section id="listings" className="py-20 bg-gradient-to-b from-olive-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Browse Properties
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive-900 mb-4">
            Explore Our Listings
          </h2>
          <p className="font-body text-olive-500 text-lg max-w-xl mx-auto leading-relaxed">
            Hand-selected properties across the world's most desirable addresses — find your perfect match.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8">
          <FilterBar
            filters={filters}
            onFilterChange={setFilters}
            resultCount={filtered.length}
          />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(property => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-2xl bg-olive-100 flex items-center justify-center mx-auto mb-5">
              <Building2 className="w-8 h-8 text-olive-400" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-olive-800 mb-2">
              No Properties Found
            </h3>
            <p className="font-body text-olive-400 text-sm max-w-sm mx-auto">
              Try adjusting your search filters to discover more properties.
            </p>
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}
