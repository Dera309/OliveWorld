# OliveWorld 🏡

> **Premium Real Estate, Curated for You.**  
> Browse, filter and enquire on a handpicked catalogue of luxury homes and investment properties across the United States.

---

## About

OliveWorld is a premium real estate listing website that helps prospective buyers — from first-time homeowners to seasoned investors — discover their ideal property. The platform provides a rich browsing experience with advanced search and filter capabilities, detailed property modals, a save/wishlist feature, and a direct enquiry contact form.

---

## Features

- 🔍 **Hero Search** — Inline keyword, location and type search that pre-populates the listings filter
- 🏘️ **Responsive Listings Grid** — 1 / 2 / 3 column layout adapting to all screen sizes
- 🎛️ **Advanced Filters** — Keyword, location, property type, bedrooms, price range & floor size sliders
- 🪟 **Property Detail Modal** — Full specs, amenities checklist and agent contact card
- ❤️ **Save / Wishlist** — Toggle a heart icon to save properties of interest
- 📬 **Contact Form** — Inline validation, loading state and Sonner success toast
- 📊 **Stats & Trust Bar** — Key metrics, feature highlights and client testimonial strip
- 📱 **Mobile-First Navbar** — Scroll-aware frosted glass header with slide-in hamburger drawer
- 🌙 **Theme Ready** — `next-themes` integrated for future dark mode support

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) + [Vite 6](https://vitejs.dev) |
| Language | TypeScript 5.7 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Component Library | [shadcn](https://ui.shadcn.com) — New York style |
| Routing | [React Router v7](https://reactrouter.com) (declarative mode) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Playfair Display · Raleway via [@fontsource](https://fontsource.org) |
| Notifications | [Sonner](https://sonner.emilkowal.ski) |
| Animation | tw-animate-css |

---

## Project Structure

```
oliveworld/
├── public/                  # Static assets (favicon)
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── property/        # PropertyCard, FilterBar, PropertyDetailModal
│   │   ├── sections/        # HeroSection, StatsBar, ListingsSection,
│   │   │                    # FeaturesSection, ContactSection
│   │   └── ui/              # shadcn generated components
│   ├── data/
│   │   └── properties.ts    # Mock property catalogue & filter options
│   ├── lib/
│   │   └── utils.ts         # cn(), formatPrice(), formatSize()
│   ├── types/
│   │   └── property.ts      # Property, FilterState, PropertyType, PropertyStatus
│   ├── App.tsx
│   ├── index.css            # Tailwind v4 entry + design tokens
│   └── main.tsx
├── docs/
│   ├── requirements.md      # User stories & acceptance criteria
│   ├── plan.md              # Prioritised implementation plan
│   └── tasks.md             # Phased task checklist
├── .junie/
│   └── guidelines.md        # Task checklist workflow instructions
├── components.json          # shadcn configuration
├── vite.config.ts
└── index.html
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- npm v9 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/oliveworld.git
cd oliveworld

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Documentation

| File | Purpose |
|---|---|
| [`docs/requirements.md`](docs/requirements.md) | User stories and acceptance criteria |
| [`docs/plan.md`](docs/plan.md) | Prioritised implementation plan |
| [`docs/tasks.md`](docs/tasks.md) | Phased enumerated task checklist |
| [`.junie/guidelines.md`](.junie/guidelines.md) | Task checklist workflow instructions |

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ by the OliveWorld team</p>
