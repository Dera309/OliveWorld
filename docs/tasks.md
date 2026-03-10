# Task List

## Phase 1: Project Setup

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 1 | [ ] Bootstrap Vite + React + TypeScript project | A1 | All |
| 2 | [ ] Install Tailwind CSS v4 and `@tailwindcss/vite` plugin | A2 | All |
| 3 | [ ] Install shadcn component library and run `npx shadcn@latest init` | A3 | All |
| 4 | [ ] Configure `@/` path aliases in `tsconfig.app.json` and `vite.config.ts` | A4 | All |
| 5 | [ ] Set up React Router v7 in `main.tsx` with `BrowserRouter` | A5 | REQ-1 |
| 6 | [ ] Define design tokens (color palette, fonts) in `src/index.css` | A6 | All |
| 7 | [ ] Install `@fontsource/playfair-display` and `@fontsource/raleway` | A7 | All |
| 8 | [ ] Import fonts and configure `--font-heading` / `--font-body` CSS variables | A7 | All |
| 9 | [ ] Install `vite-plugin-svgr` and configure in `vite.config.ts` | A1 | All |
| 10 | [ ] Install `lucide-react`, `sonner`, `clsx`, `tailwind-merge` dependencies | A1 | All |
| 11 | [ ] Create `src/lib/utils.ts` with `cn`, `formatPrice`, `formatSize` utilities | D3 | REQ-4 |
| 12 | [ ] Add shadcn components: `button`, `input`, `select`, `slider`, `card`, `badge`, `textarea`, `label`, `separator`, `sheet`, `dialog`, `sonner` | A3 | All |

---

## Phase 2: Data & Types

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 13 | [ ] Create `src/types/property.ts` — define `Property`, `FilterState`, `PropertyType`, `PropertyStatus` types | D1 | REQ-4, REQ-5 |
| 14 | [ ] Create `src/data/properties.ts` — add 9+ mock properties with real Unsplash image URLs | D2 | REQ-4 |
| 15 | [ ] Add location, type and bedroom option arrays to `properties.ts` for filter dropdowns | D2 | REQ-5 |

---

## Phase 3: Layout Components

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 16 | [ ] Create `src/components/layout/Navbar.tsx` — logo, desktop nav links, mobile sheet drawer | B1, B3 | REQ-1 |
| 17 | [ ] Implement scroll-aware background transition in `Navbar` | B2 | REQ-1 |
| 18 | [ ] Implement smooth-scroll on each nav link click and mobile close-on-navigate | B4 | REQ-1 |
| 19 | [ ] Create `src/components/layout/Footer.tsx` — brand column, link columns, social icons, copyright | B5 | REQ-2 |
| 20 | [ ] Add CTA strip at the top of `Footer` linking to contact section | B6 | REQ-2 |

---

## Phase 4: Hero & Stats

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 21 | [ ] Create `src/components/sections/HeroSection.tsx` — background image, overlay, headline, subheadline | C1 | REQ-3 |
| 22 | [ ] Add animated badge and scroll indicator to `HeroSection` | C1 | REQ-3 |
| 23 | [ ] Implement inline search bar (keyword, location select, type select, search button) in `HeroSection` | C2 | REQ-3 |
| 24 | [ ] Wire hero search to emit `onSearch` callback, pre-populating the listings filter | C3 | REQ-3, REQ-5 |
| 25 | [ ] Add statistics row with 4 metrics inside the hero section | C4 | REQ-3, REQ-8 |
| 26 | [ ] Create `src/components/sections/StatsBar.tsx` — 4 KPI tiles with icons below hero | C5 | REQ-8 |

---

## Phase 5: Property Listings

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 27 | [ ] Create `src/components/property/PropertyCard.tsx` — image, price overlay, badges, specs, save button, agent row, CTA | E1 | REQ-4, REQ-9 |
| 28 | [ ] Implement save (heart) toggle state within `PropertyCard` | E1 | REQ-9 |
| 29 | [ ] Create `src/components/property/FilterBar.tsx` — keyword input, location/type/bedroom selects, results badge, clear button | E2, E5, E6 | REQ-5 |
| 30 | [ ] Implement advanced filter panel toggle in `FilterBar` | E3 | REQ-5 |
| 31 | [ ] Add `Slider` for price range and size range inside advanced filter panel | E3 | REQ-5 |
| 32 | [ ] Create `src/components/sections/ListingsSection.tsx` — 3-column responsive grid with `useMemo` filter logic | E4, E8 | REQ-4, REQ-5 |
| 33 | [ ] Implement empty state UI in `ListingsSection` | E7 | REQ-4 |

---

## Phase 6: Property Detail Modal

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 34 | [ ] Create `src/components/property/PropertyDetailModal.tsx` using shadcn `Dialog` | F1 | REQ-6 |
| 35 | [ ] Display hero image, price, title, specs grid in modal header | F1 | REQ-6 |
| 36 | [ ] Display description, year built, and amenities checklist in modal body | F2 | REQ-6 |
| 37 | [ ] Display agent card with Call and Email Agent buttons at modal footer | F3 | REQ-6 |
| 38 | [ ] Implement modal open/close state in `ListingsSection` | F1 | REQ-6 |

---

## Phase 7: Features & Trust

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 39 | [ ] Create `src/components/sections/FeaturesSection.tsx` — 6 feature cards with icons, titles, descriptions | G1 | REQ-8 |
| 40 | [ ] Add decorative background elements to `FeaturesSection` | G1 | REQ-8 |
| 41 | [ ] Add full-width testimonial image strip at the bottom of `FeaturesSection` | G2 | REQ-8 |

---

## Phase 8: Contact Form

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 42 | [ ] Create `src/components/sections/ContactSection.tsx` — two-column layout (info + form) | H1 | REQ-7 |
| 43 | [ ] Implement form fields: name, email, phone, inquiry type select, message textarea | H2 | REQ-7 |
| 44 | [ ] Implement client-side validation: required fields and email format check | H3 | REQ-7 |
| 45 | [ ] Show inline error messages beneath each invalid field | H3 | REQ-7 |
| 46 | [ ] Implement loading state on submit button | H4 | REQ-7 |
| 47 | [ ] Show Sonner success toast and reset form on successful submission | H4 | REQ-7 |
| 48 | [ ] Render company contact info cards (phone, email, address, hours) in left column | H5 | REQ-7 |

---

## Phase 9: App Assembly

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 49 | [ ] Create `src/App.tsx` — compose all sections in correct order, pass hero search state to listings | All | All |
| 50 | [ ] Add `<Toaster>` component from Sonner to `App.tsx` | H4 | REQ-7 |
| 51 | [ ] Add `favicon.svg` to `public/` | A1 | All |
| 52 | [ ] Update `index.html` meta title and description | A1 | All |

---

## Phase 10: Spec Documentation

| # | Task | Plan Ref | Requirements Ref |
|---|------|----------|-----------------|
| 53 | [ ] Create `docs/requirements.md` — user stories with acceptance criteria | I1 | All |
| 54 | [ ] Create `docs/plan.md` — implementation plan with priorities and requirement links | I2 | All |
| 55 | [ ] Create `docs/tasks.md` (this file) — phased task checklist | I3 | All |
| 56 | [ ] Create `.junie/guidelines.md` — task checklist workflow instructions | I4 | All |
