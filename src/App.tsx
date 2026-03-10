import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import StatsBar from '@/components/sections/StatsBar'
import ListingsSection from '@/components/sections/ListingsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ContactSection from '@/components/sections/ContactSection'
import { useState } from 'react'
import type { FilterState } from '@/types/property'

function HomePage() {
  const [heroFilters, setHeroFilters] = useState<Partial<FilterState>>({})

  const handleHeroSearch = (location: string, type: string, search: string) => {
    setHeroFilters({ location, type, search })
  }

  return (
    <>
      <HeroSection onSearch={handleHeroSearch} />
      <StatsBar />
      <ListingsSection initialFilters={heroFilters} key={JSON.stringify(heroFilters)} />
      <FeaturesSection />
      <ContactSection />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          className: 'font-body',
          duration: 5000,
        }}
      />
    </div>
  )
}
