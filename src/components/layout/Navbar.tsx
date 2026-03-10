import { useState, useEffect } from 'react'
import { Menu, X, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const NAV_LINKS = [
  { label: 'Properties', href: '#listings' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-olive-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm group-hover:bg-primary-dark transition-colors">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-olive-900 tracking-tight">
            Olive<span className="text-primary">World</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                scrolled ? 'text-olive-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNavClick('#contact')}
            className={`font-body font-medium border-primary/30 hover:bg-primary hover:text-white hover:border-primary transition-all ${
              scrolled ? 'text-primary' : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary'
            }`}
          >
            Get in Touch
          </Button>
          <Button
            size="sm"
            onClick={() => handleNavClick('#listings')}
            className="bg-primary hover:bg-primary-dark text-white font-body font-medium shadow-sm"
          >
            View Properties
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-olive-800' : 'text-white'}`}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white pt-8">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-olive-900 tracking-tight">
                Olive<span className="text-primary">World</span>
              </span>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-olive-800 font-body font-medium rounded-lg hover:bg-olive-50 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white font-body"
                  onClick={() => handleNavClick('#contact')}
                >
                  Get in Touch
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary-dark text-white font-body"
                  onClick={() => handleNavClick('#listings')}
                >
                  View Properties
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
