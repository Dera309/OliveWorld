# Requirements Document

## Introduction

**OliveWorld** is a premium real estate listing website that showcases properties available for sale across multiple locations. The platform allows prospective buyers to browse, search and filter a curated catalogue of buildings and homes, view detailed property information, and contact the company directly via a structured enquiry form. The website is designed to serve both first-time buyers and seasoned investors seeking their next premium acquisition.

---

## Requirements

### Group 1: Navigation & Site Structure

**Requirement 1 — Persistent Navigation**

> As a user, I want a clear and accessible navigation bar so that I can easily move between sections of the website at any time.

- WHEN the page loads THEN the system SHALL display a fixed navigation bar with the OliveWorld logo, section links (Properties, Features, Contact) and two call-to-action buttons.
- WHEN the user scrolls beyond 60px from the top THEN the navigation bar SHALL transition from transparent to a frosted white background with a subtle shadow.
- WHEN the viewport is below the `md` breakpoint THEN the system SHALL replace the desktop nav links with a mobile hamburger menu that opens a slide-in drawer.
- WHEN a navigation link is clicked THEN the system SHALL smooth-scroll to the corresponding section.

**Requirement 2 — Footer**

> As a user, I want a well-structured footer so that I can find company contact information, additional links and social channels.

- WHEN the footer renders THEN the system SHALL display office address, email, phone number, a categorised link grid (Properties, Company, Support) and social media icons.
- WHEN the user clicks a social icon THEN the system SHALL navigate to the corresponding social profile page.
- WHEN the footer renders THEN the system SHALL show a final CTA strip above the main footer columns with a "Start Your Journey" button linking to the contact section.

---

### Group 2: Hero & Introduction

**Requirement 3 — Hero Section**

> As a user, I want a visually compelling hero section so that I immediately understand OliveWorld's value proposition and can begin searching for properties.

- WHEN the hero section renders THEN the system SHALL display a full-viewport background image with a dark overlay, a headline, sub-headline, and an inline search bar.
- WHEN the hero search bar is submitted (button click or Enter key) THEN the system SHALL pre-populate the listings filter and smooth-scroll to the listings section.
- WHEN the hero section renders THEN the system SHALL display at least four headline statistics (e.g., total properties, cities, satisfaction, sales value).

---

### Group 3: Property Listings & Search

**Requirement 4 — Property Listings Grid**

> As a user, I want to browse all available properties in a grid layout so that I can quickly compare options and identify properties of interest.

- WHEN the listings section renders THEN the system SHALL display all available properties in a responsive grid (1 column on mobile, 2 on tablet, 3 on desktop).
- WHEN there are no matching properties THEN the system SHALL display an empty-state message with a clear icon and instructions to adjust filters.
- WHEN a property card renders THEN the system SHALL display the property image, title, price, location, status badge, type badge, bedrooms, bathrooms, floor area and agent name.

**Requirement 5 — Search & Filter**

> As a user, I want to search and filter properties by location, price, size, type and number of bedrooms so that I can find properties that match my specific criteria.

- WHEN the filter bar renders THEN the system SHALL display a keyword search field, location dropdown, property type dropdown and a bedroom count dropdown.
- WHEN the user expands the Advanced Filters panel THEN the system SHALL reveal price range and size sliders.
- WHEN any filter value changes THEN the system SHALL immediately re-filter the property grid without requiring a page reload.
- WHEN results are present THEN the system SHALL display the number of matching properties in a badge.
- WHEN the "Clear" button is clicked THEN the system SHALL reset all filters to their default values.

**Requirement 6 — Property Detail Modal**

> As a user, I want to view full details of a property in a focused modal so that I can make an informed decision without leaving the listings page.

- WHEN the user clicks "View Details" on a property card THEN the system SHALL open a modal containing: the property image, price, title, location, bedrooms, bathrooms, floor area, year built, description, amenities list, and agent contact details.
- WHEN the modal is open THEN the user SHALL be able to close it via the close button or by clicking outside the modal.
- WHEN the user clicks "Email Agent" within the modal THEN the system SHALL scroll to and focus the contact form.

---

### Group 4: Contact & Enquiry

**Requirement 7 — Contact Form**

> As a user, I want to send an enquiry to OliveWorld using a contact form so that I can ask questions, schedule viewings or request a property valuation.

- WHEN the contact section renders THEN the system SHALL display a form with fields for: full name, email address, phone number (optional), inquiry type (dropdown) and message.
- WHEN the user submits the form with one or more required fields empty THEN the system SHALL display inline validation error messages without submitting.
- WHEN the email field contains an invalid email format THEN the system SHALL display a specific validation error.
- WHEN the form is successfully submitted THEN the system SHALL display a success toast notification and reset the form to its empty state.
- WHEN the contact section renders THEN the system SHALL display company contact information (phone, email, address, office hours) alongside the form.

---

### Group 5: Trust & Credibility

**Requirement 8 — Statistics & Proof**

> As a user, I want to see key performance statistics and testimonials so that I can trust OliveWorld with one of the most important purchases of my life.

- WHEN the statistics bar renders THEN the system SHALL display at least four key metrics (e.g., total sales value, years of experience, happy homeowners, cities covered).
- WHEN the features section renders THEN the system SHALL display a minimum of six differentiating features, each with an icon, title and description.
- WHEN the features section renders THEN the system SHALL include a highlighted client testimonial quote with the client's name and property purchase details.

**Requirement 9 — Save / Wishlist**

> As a user, I want to save properties I am interested in so that I can quickly reference them during my search.

- WHEN the user clicks the heart icon on a property card THEN the system SHALL toggle the saved state of that property and update the icon appearance accordingly.
- WHEN a property is saved THEN the heart icon SHALL appear filled and red to visually confirm the saved state.
