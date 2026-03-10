import { useState } from 'react'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

const CONTACT_INFO = [
  { Icon: Phone, label: 'Phone', value: '+1 (800) 555-OLIVE', sub: 'Mon–Fri, 9am–6pm EST' },
  { Icon: Mail, label: 'Email', value: 'hello@oliveworld.com', sub: 'We reply within 24 hours' },
  { Icon: MapPin, label: 'Office', value: '350 Fifth Ave, New York', sub: 'NY 10118, United States' },
  { Icon: Clock, label: 'Hours', value: 'Monday – Friday', sub: '9:00 AM – 6:00 PM EST' },
]

const INQUIRY_TYPES = [
  'General Inquiry',
  'Schedule a Viewing',
  'Property Valuation',
  'Investment Advice',
  'Partnership Inquiry',
]

interface FormState {
  name: string
  email: string
  phone: string
  inquiry: string
  message: string
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  inquiry: '',
  message: '',
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)

  const update = (field: keyof FormState, value: string) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }))
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setForm(EMPTY_FORM)
    toast.success('Message sent!', {
      description: "Thank you for reaching out. An OliveWorld agent will contact you within 24 hours.",
    })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-olive-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-olive-900 mb-4">
            Let's Find Your
            <span className="text-primary"> Perfect Home</span>
          </h2>
          <p className="font-body text-olive-500 text-lg max-w-xl mx-auto leading-relaxed">
            Our expert team is ready to guide you. Send us a message and we'll get back to you within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden h-52 mb-6">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                alt="OliveWorld office"
                className="w-full h-full object-cover"
              />
            </div>

            {CONTACT_INFO.map(({ Icon, label, value, sub }) => (
              <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-olive-100">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-olive-400 uppercase tracking-wide">{label}</p>
                  <p className="font-body text-sm font-semibold text-olive-800 mt-0.5">{value}</p>
                  <p className="font-body text-xs text-olive-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-olive-100 shadow-sm p-8 space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-body text-sm font-medium text-olive-700">
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                    className={`font-body text-sm rounded-xl border-olive-200 focus:border-primary focus:ring-primary/20 ${errors.name ? 'border-red-300 focus:border-red-400' : ''}`}
                  />
                  {errors.name && <p className="font-body text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-body text-sm font-medium text-olive-700">
                    Email Address <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    className={`font-body text-sm rounded-xl border-olive-200 focus:border-primary focus:ring-primary/20 ${errors.email ? 'border-red-300 focus:border-red-400' : ''}`}
                  />
                  {errors.email && <p className="font-body text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="font-body text-sm font-medium text-olive-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    className="font-body text-sm rounded-xl border-olive-200 focus:border-primary focus:ring-primary/20"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1.5">
                  <Label className="font-body text-sm font-medium text-olive-700">
                    Inquiry Type
                  </Label>
                  <Select onValueChange={v => update('inquiry', v)} value={form.inquiry}>
                    <SelectTrigger className="font-body text-sm rounded-xl border-olive-200 focus:ring-primary/20 text-olive-700">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="font-body">
                      {INQUIRY_TYPES.map(t => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="font-body text-sm font-medium text-olive-700">
                  Message <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your dream property or any questions you have..."
                  rows={5}
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  className={`font-body text-sm rounded-xl border-olive-200 focus:border-primary focus:ring-primary/20 resize-none ${errors.message ? 'border-red-300' : ''}`}
                />
                {errors.message && <p className="font-body text-xs text-red-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-body font-semibold rounded-xl gap-2 shadow-sm transition-all hover:shadow-md"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="font-body text-xs text-olive-400 text-center">
                By submitting, you agree to our{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                {' '}and{' '}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
