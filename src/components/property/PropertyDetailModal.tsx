import { X, Bed, Bath, SquareDashedBottom, MapPin, Phone, Mail, Calendar, Check } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { Property } from '@/types/property'
import { formatPrice, formatSize } from '@/lib/utils'

interface PropertyDetailModalProps {
  property: Property | null
  open: boolean
  onClose: () => void
}

export default function PropertyDetailModal({ property, open, onClose }: PropertyDetailModalProps) {
  if (!property) return null

  return (
    <Dialog open={open} onOpenChange={open => !open && onClose()}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-2xl gap-0 font-body">
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-5">
            <p className="font-heading text-2xl font-bold text-white">{formatPrice(property.price)}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[55vh]">
          <DialogHeader className="text-left mb-4">
            <div className="flex items-start justify-between gap-3">
              <DialogTitle className="font-heading text-2xl font-bold text-olive-900 leading-tight">
                {property.title}
              </DialogTitle>
              <Badge className="shrink-0 capitalize bg-primary/10 text-primary border-primary/20 font-body">
                {property.type}
              </Badge>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body text-sm text-olive-500">{property.location}, {property.city}, {property.country}</span>
            </div>
          </DialogHeader>

          {/* Specs Row */}
          <div className="grid grid-cols-3 gap-4 bg-olive-50 rounded-xl p-4 mb-5">
            {[
              { Icon: Bed, label: 'Bedrooms', value: property.bedrooms },
              { Icon: Bath, label: 'Bathrooms', value: property.bathrooms },
              { Icon: SquareDashedBottom, label: 'Size', value: formatSize(property.size) },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="w-5 h-5 text-primary mb-1" />
                <span className="font-heading text-lg font-bold text-olive-800">{value}</span>
                <span className="font-body text-xs text-olive-400">{label}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="font-body text-sm text-olive-600 leading-relaxed mb-5">{property.description}</p>

          {/* Year Built */}
          <div className="flex items-center gap-2 text-sm text-olive-500 mb-4 font-body">
            <Calendar className="w-4 h-4 text-primary/60" />
            Built in {property.yearBuilt}
          </div>

          <Separator className="mb-5" />

          {/* Amenities */}
          <div className="mb-5">
            <h4 className="font-heading font-semibold text-olive-800 mb-3">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map(amenity => (
                <div key={amenity} className="flex items-center gap-1.5 bg-olive-50 px-3 py-1.5 rounded-lg border border-olive-100">
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="font-body text-xs text-olive-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="mb-5" />

          {/* Agent */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img src={property.agent.avatar} alt={property.agent.name} className="w-11 h-11 rounded-full border-2 border-olive-200" />
              <div>
                <p className="font-body font-semibold text-sm text-olive-800">{property.agent.name}</p>
                <p className="font-body text-xs text-olive-400">Listing Agent</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1.5 font-body border-olive-200 text-olive-700 hover:text-primary rounded-xl">
                <Phone className="w-4 h-4" />
                Call
              </Button>
              <Button size="sm" className="gap-1.5 bg-primary hover:bg-primary-dark text-white font-body rounded-xl">
                <Mail className="w-4 h-4" />
                Email Agent
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
