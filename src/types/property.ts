export type PropertyType = 'apartment' | 'villa' | 'penthouse' | 'townhouse' | 'studio' | 'duplex'
export type PropertyStatus = 'available' | 'featured' | 'new' | 'sold'

export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  city: string
  country: string
  type: PropertyType
  status: PropertyStatus
  bedrooms: number
  bathrooms: number
  size: number // sqft
  yearBuilt: number
  images: string[]
  amenities: string[]
  agent: {
    name: string
    phone: string
    avatar: string
  }
}

export interface FilterState {
  search: string
  location: string
  type: string
  minPrice: number
  maxPrice: number
  minSize: number
  maxSize: number
  bedrooms: string
}
