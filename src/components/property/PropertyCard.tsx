import { Bed, Bath, SquareDashedBottom, MapPin, Heart } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Property } from '@/types/property'
import { formatPrice, formatSize } from '@/lib/utils'

interface PropertyCardProps {
  property: Property
  onViewDetails: (property: Property) => void
}

const STATUS_CONFIG: Record<Property['status'], { label: string; className: string }> = {
  featured: { label: 'Featured', className: 'bg-accent/15 text-accent-dark border-accent/30' },
  new: { label: 'New', className: 'bg-primary/15 text-primary-dark border-primary/30' },
  available: { label: 'Available', className: 'bg-olive-100 text-olive-700 border-olive-200' },
  sold: { label: 'Sold', className: 'bg-red-50 text-red-600 border-red-200' },
}

const TYPE_LABELS: Record<Property['type'], string> = {
  apartment: 'Apartment',
  villa: 'Villa',
  penthouse: 'Penthouse',
  townhouse: 'Townhouse',
  studio: 'Studio',
  duplex: 'Duplex',
}

export default function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  const [saved, setSaved] = useState(false)
  const status = STATUS_CONFIG[property.status]

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-olive-100 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <Badge className={`font-body text-xs font-semibold border ${status.className}`}>
            {status.label}
          </Badge>
        </div>

        {/* Type Badge */}
        <div className="absolute top-3 right-12">
          <Badge variant="secondary" className="font-body text-xs bg-white/90 text-olive-700 border-0">
            {TYPE_LABELS[property.type]}
          </Badge>
        </div>

        {/* Save Button */}
        <button
          onClick={() => setSaved(s => !s)}
          aria-label={saved ? 'Unsave property' : 'Save property'}
          className={`absolute top-3 right-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
            saved
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-olive-500 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} />
        </button>

        {/* Price on image */}
        <div className="absolute bottom-3 left-3">
          <span className="font-heading text-xl font-bold text-white drop-shadow-md">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg font-semibold text-olive-900 leading-snug group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-olive-500 mb-3">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-primary" />
          <span className="font-body text-sm">{property.location}, {property.city}</span>
        </div>

        <p className="font-body text-sm text-olive-500 leading-relaxed mb-4 line-clamp-2 flex-1">
          {property.description}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-4 py-3.5 border-t border-olive-100 mb-4">
          <div className="flex items-center gap-1.5 text-olive-600">
            <Bed className="w-4 h-4 text-primary/70" />
            <span className="font-body text-sm font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-olive-600">
            <Bath className="w-4 h-4 text-primary/70" />
            <span className="font-body text-sm font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-olive-600">
            <SquareDashedBottom className="w-4 h-4 text-primary/70" />
            <span className="font-body text-sm font-medium">{formatSize(property.size)}</span>
          </div>
        </div>

        {/* Agent & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-7 h-7 rounded-full object-cover border border-olive-200"
            />
            <span className="font-body text-xs text-olive-500">{property.agent.name}</span>
          </div>
          <Button
            size="sm"
            onClick={() => onViewDetails(property)}
            className="bg-primary hover:bg-primary-dark text-white font-body font-medium text-xs h-8 px-4"
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  )
}
