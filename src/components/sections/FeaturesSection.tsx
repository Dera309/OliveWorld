import { ShieldCheck, MapPin, HeartHandshake, Sparkles, BarChart3, Clock } from 'lucide-react'

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: 'Verified Listings Only',
    description: 'Every property on OliveWorld is personally inspected and legally verified by our expert team before listing.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    Icon: MapPin,
    title: 'Prime Location Focus',
    description: 'We curate exclusively in highly sought-after neighborhoods, ensuring lasting value and desirable lifestyles.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    Icon: HeartHandshake,
    title: 'Dedicated Agent Support',
    description: 'Our seasoned agents walk with you from first showing to final signing — attentive, responsive and knowledgeable.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    Icon: Sparkles,
    title: 'Luxury Finishes Standard',
    description: 'OliveWorld properties are synonymous with exceptional quality — premium materials, smart systems and thoughtful design.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    Icon: BarChart3,
    title: 'Market-Driven Pricing',
    description: 'Our data analysts ensure every property is priced fairly and competitively using live market intelligence.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    Icon: Clock,
    title: 'Fast, Smooth Transactions',
    description: 'From offer to close, our streamlined process and legal team typically completes transactions in under 30 days.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #4A5D23 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #D4A843 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block font-body text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Why OliveWorld
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive-900 leading-tight">
              The OliveWorld
              <br />
              <span className="text-primary">Difference</span>
            </h2>
          </div>
          <p className="font-body text-olive-500 text-base leading-relaxed max-w-sm">
            More than a listing service — we're your trusted partner in finding, securing and loving your dream property.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-olive-100 hover:border-primary/20 hover:shadow-lg bg-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-olive-900 mb-3 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="font-body text-sm text-olive-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Imagery Strip */}
        <div className="mt-16 relative rounded-2xl overflow-hidden h-56 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1400&q=80"
            alt="Luxury OliveWorld properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-olive-950/70 to-transparent flex items-center">
            <div className="px-10 md:px-16 max-w-lg">
              <p className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                "OliveWorld turned our property search into an absolute pleasure."
              </p>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/40?u=testimonial-1" alt="Client" className="w-10 h-10 rounded-full border-2 border-white/40" />
                <div>
                  <p className="font-body text-white font-medium text-sm">Sarah & Michael Thornton</p>
                  <p className="font-body text-white/60 text-xs">Purchased a Villa in Los Angeles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
