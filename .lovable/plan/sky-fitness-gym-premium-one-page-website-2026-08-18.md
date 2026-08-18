# Sky Fitness Gym — Premium One-Page Website

A single cinematic landing page at `/` for Sky Fitness Gym, Arali, Solapur, built around your real gym photos, sky-blue-on-navy identity, and a clear path to WhatsApp/call enquiries.

## Brand facts used (nothing invented)

- Sky Fitness Gym, Arali, Solapur, Maharashtra
- Phone 7942696356 → `tel:+917942696356`, WhatsApp `https://wa.me/917942696356`
- ₹600 / 1 month, ₹1,500 / 3 months (saves ₹300), BEST VALUE on the 3-month card
- Directions button links to the Google Maps share link you provided
- No trainers, hours, programs, facilities, testimonials, awards, or social links — those sections are structured so you can drop details in later

## Visuals

- Palette: near-black `#05080D` / deep navy `#07111F` backgrounds, white `#F8FAFC` text, sky blue `#38BDF8` + `#0EA5E9` for CTAs, borders, highlights, active nav
- Typography: bold condensed display face for headings, clean sans for body
- Your 8 uploads become the site's imagery: strongest interior shot as the hero, machines/dumbbells/floor shots for gallery, about, and the full-width break; the round logo goes in the navbar and footer. All images `object-cover`, no stretching, gradient overlays only where text sits on top.

## Sections (in order)

1. Sticky navbar — transparent over hero, glass/blur + darker after scroll; HOME ABOUT MEMBERSHIP GALLERY CONTACT + JOIN NOW; mobile hamburger with animated full-screen menu
2. Hero — full-screen photo, navy gradient from left/bottom, eyebrow `SKY FITNESS GYM • ARALI, SOLAPUR`, H1 `BUILD YOUR STRONGER SELF.` (STRONGER SELF in sky blue), supporting line, JOIN NOW + WHATSAPP US, "Memberships starting at just ₹600/month", animated SCROLL TO EXPLORE
3. Value strip — SMART TRAINING / REAL RESULTS / AFFORDABLE MEMBERSHIP
4. About — split screen, photo left, `YOUR TRAINING. YOUR GOALS. YOUR JOURNEY.`, 01 Training / 02 Consistency / 03 Progress, START YOUR JOURNEY CTA
5. Membership — two cards, ₹600 and ₹1,500 (prominent, BEST VALUE badge); each CTA opens WhatsApp with the pre-filled enquiry text
6. More Than A Workout — editorial feature blocks: strength, consistency, confidence, routine
7. Gallery — asymmetric grid, hover zoom, lightbox with arrow/Esc keys and mobile swipe
8. Break section — full-width photo, `NO EXCUSES. JUST PROGRESS.`, JOIN SKY FITNESS
9. Final CTA — navy with sky-blue glow, JOIN NOW / WHATSAPP US / CALL 7942696356
10. Contact — address block, CALL NOW / WHATSAPP / GET DIRECTIONS, embedded map area, and a Name/Phone/Message enquiry form that sends the composed message to WhatsApp (no backend needed)
11. Footer — logo, location, phone, nav links, `© 2026 Sky Fitness Gym. All rights reserved.` No social icons until you give links.
12. Floating CTAs — WhatsApp + Call bar on mobile, single WhatsApp bubble bottom-right on desktop

## Motion

Framer Motion, scroll-triggered and restrained: heading reveals upward, image fade+scale, staggered cards, gentle hero parallax. Full `prefers-reduced-motion` respect.

## Technical notes

- TanStack Start route `src/routes/index.tsx` (replaces the placeholder) + components under `src/components/sky/`
- Uploaded photos published as CDN assets (`lovable-assets`) so the repo stays light; lazy-loading below the fold
- Design tokens (sky blue, navy, glow, glass) added to `src/styles.css` — no hardcoded colour classes in components
- SEO: title `Sky Fitness Gym | Gym in Arali, Solapur`, the meta description you supplied, og/twitter tags, single H1, alt text on every image, `LocalBusiness`/`Gym` JSON-LD with only verified fields (name, area, phone, price range)
- Mobile-first, verified at 360/390/430/768/1024/1440 with no horizontal overflow

## Left as easy-to-edit placeholders

Opening hours, trainers, facilities, testimonials, social links, exact street address — clearly marked in code so they can be filled in when you share the details.
