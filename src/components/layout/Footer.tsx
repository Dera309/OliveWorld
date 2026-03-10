import { Home, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const FOOTER_LINKS = {
  Properties: ['Apartments', 'Villas', 'Penthouses', 'Townhouses', 'Studios', 'Duplexes'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press'],
  Support: ['FAQ', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
}

const SOCIAL = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-olive-950 text-white">
      {/* CTA Strip */}
      <div className="bg-primary py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Let our expert team guide you to the perfect home. Every OliveWorld property is hand-selected for quality and lifestyle.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-colors shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Olive<span className="text-primary-light">World</span>
              </span>
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              OliveWorld connects discerning buyers with exceptional properties across the world's most desirable locations.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-white/60">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <span className="font-body">+1 (800) 555-OLIVE</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/60">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <span className="font-body">hello@oliveworld.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                <span className="font-body">350 Fifth Ave, New York, NY 10118</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/60 hover:text-primary-light transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/40">
            © {new Date().getFullYear()} OliveWorld Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
