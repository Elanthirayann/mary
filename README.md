# St. Mary's Matriculation School — Website

A responsive React + Vite website for St. Mary's Matriculation School, Paiyanur, Chennai.

## Tech Stack
- React 18 + Vite
- React Router v6
- Tailwind CSS
- Framer Motion (scroll reveals, counters, carousel)
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/
    common/     -> Button, SectionHeading, Reveal, EnquiryForm, FloatingButtons, PageHero
    layout/     -> Navbar, TopBar, Ticker, Footer
    home/       -> All homepage sections (Hero, Toppers, Testimonials, etc.)
  data/         -> Editable content: school.js, toppers.js, events.js,
                   testimonials.js, facilities.js, gallery.js
  pages/        -> Home, About, Academics, Admissions, Facilities,
                   Gallery, Achievements, Contact, NotFound
  Layout.jsx    -> Shared page chrome (navbar, footer, floating buttons)
  App.jsx       -> Route definitions
```

## Editing Content

All site content (toppers, events, testimonials, facilities, gallery, stats,
contact info) lives in plain JS files under `src/data/`. Update those files —
no JSX changes needed — to change names, photos, percentages, addresses, etc.

## Notes
- All images are placeholder Unsplash photos. Swap the `image`/`photo` URLs in
  `src/data/*.js` with real campus photography before going live.
- The enquiry/contact forms validate client-side and `console.log` the
  submission — wire up a real endpoint in `EnquiryForm.jsx`'s `handleSubmit`.
- Update phone/email/address/WhatsApp number and the Google Maps embed in
  `src/data/school.js`.
