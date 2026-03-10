# Implementation Plan

## Overview

This plan is derived from `docs/requirements.md` and describes the complete implementation strategy for the OliveWorld real estate website. Each item references the corresponding requirement(s), is assigned a priority level, and is grouped logically by concern.

---

## Group A: Project Foundation (Priority: High)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| A1 | Bootstrap Vite + React + TypeScript project with npm | All | High |
| A2 | Install and configure Tailwind CSS v4 with `@tailwindcss/vite` plugin | All | High |
| A3 | Install and initialise shadcn component library with `new-york` style | All | High |
| A4 | Configure path aliases (`@/`) in `tsconfig.app.json` and `vite.config.ts` | All | High |
| A5 | Set up React Router v7 in declarative mode | REQ-1 | High |
| A6 | Define design tokens (colors, fonts, spacing) in `src/index.css` | All | High |
| A7 | Install Google Fonts (Playfair Display + Raleway) via `@fontsource` packages | All | High |

---

## Group B: Layout & Navigation (Priority: High)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| B1 | Implement `Navbar` component: logo, nav links, CTA buttons | REQ-1 | High |
| B2 | Implement scroll-aware style transition in Navbar (transparent → frosted white) | REQ-1 | High |
| B3 | Implement mobile hamburger drawer in Navbar using shadcn `Sheet` | REQ-1 | High |
| B4 | Implement smooth-scroll on nav link click | REQ-1 | High |
| B5 | Implement `Footer` component: brand, links, social icons, contact info | REQ-2 | High |
| B6 | Implement CTA strip in Footer | REQ-2 | Medium |

---

## Group C: Hero & Introduction (Priority: High)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| C1 | Implement `HeroSection` with full-viewport background image and gradient overlay | REQ-3 | High |
| C2 | Implement inline search bar (keyword, location, type) in hero | REQ-3 | High |
| C3 | Wire hero search to pre-populate listings filter and scroll to listings | REQ-3, REQ-5 | High |
| C4 | Display statistics row inside hero section | REQ-3, REQ-8 | High |
| C5 | Implement `StatsBar` component below hero | REQ-8 | Medium |

---

## Group D: Property Data Layer (Priority: High)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| D1 | Define `Property` and `FilterState` TypeScript interfaces in `src/types/property.ts` | REQ-4, REQ-5 | High |
| D2 | Create mock property data in `src/data/properties.ts` (9+ properties with images) | REQ-4 | High |
| D3 | Implement `formatPrice` and `formatSize` utility functions | REQ-4 | High |

---

## Group E: Property Listings (Priority: High)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| E1 | Implement `PropertyCard` component: image, price, title, specs, badges, save button | REQ-4, REQ-9 | High |
| E2 | Implement `FilterBar` component: keyword, location, type, bedrooms selects | REQ-5 | High |
| E3 | Implement advanced filter panel: price range and size range sliders | REQ-5 | High |
| E4 | Implement client-side filter logic with `useMemo` in `ListingsSection` | REQ-5 | High |
| E5 | Display results count badge in filter bar | REQ-5 | Medium |
| E6 | Implement clear-all-filters button | REQ-5 | Medium |
| E7 | Implement empty state UI in listings grid | REQ-4 | Medium |
| E8 | Implement `ListingsSection` responsive grid (1/2/3 columns) | REQ-4 | High |

---

## Group F: Property Detail (Priority: Medium)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| F1 | Implement `PropertyDetailModal` with full property info using shadcn `Dialog` | REQ-6 | Medium |
| F2 | Display amenities list with check icons in modal | REQ-6 | Medium |
| F3 | Display agent card with Call and Email Agent buttons in modal | REQ-6 | Medium |

---

## Group G: Trust & Features (Priority: Medium)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| G1 | Implement `FeaturesSection` with 6 feature cards (icon, title, description) | REQ-8 | Medium |
| G2 | Add testimonial quote strip in features section | REQ-8 | Medium |

---

## Group H: Contact Form (Priority: High)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| H1 | Implement `ContactSection` layout: form column + contact info column | REQ-7 | High |
| H2 | Implement contact form fields: name, email, phone, inquiry type, message | REQ-7 | High |
| H3 | Implement client-side form validation with inline error messages | REQ-7 | High |
| H4 | Implement success toast notification on submit using Sonner | REQ-7 | High |
| H5 | Display company contact info cards alongside form | REQ-7 | Medium |

---

## Group I: Spec Documentation (Priority: High)

| ID | Plan Item | Linked Requirements | Priority |
|----|-----------|---------------------|----------|
| I1 | Create `docs/requirements.md` with all user stories and acceptance criteria | All | High |
| I2 | Create `docs/plan.md` (this file) | All | High |
| I3 | Create `docs/tasks.md` with phased task checklist | All | High |
| I4 | Create `.junie/guidelines.md` with task checklist workflow instructions | All | High |
