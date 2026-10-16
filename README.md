# Aarav Mehta — Professional Anchor & Emcee Portfolio

A modern, high-conversion website for Indian event anchor and emcee **Aarav Mehta** — *"The Voice of Every Celebration"*, developed as a professional portfolio demo by **Stack & Pixel**.

---

## Brand & Visual System
- **Brand Palette:**
  - Midnight Black (`#101014`)
  - Deep Charcoal (`#161622` / `#1D1D24`)
  - Champagne Gold (`#D6B36A` / `#E5C77E`)
  - Warm White (`#F8F6F0`)
  - Electric Orange (`#FF7043`)
- **Typography:** Outfit (Display / Brand) & Plus Jakarta Sans (Prose & Body).
- **Primary Market:** Pune & Mumbai, available for destination weddings and corporate galas across India.

---

## Key Features & Modules
1. **Homepage Hero:**
   - Editorial headline: *"I Bring the Energy. You Make the Memories."*
   - Rotating punchy brand taglines.
   - Dual CTAs: *Book Me for Your Event* and *Watch Showreel*.
   - Instant WhatsApp, Instagram, and direct phone contact badges.
   - 4-metric stage presence row below the split.

2. **About the Anchor:**
   - Biography, hosting styles, and multilingual capabilities (English, Hindi, Marathi, Gujarati).
   - Interactive vocal cadence simulator (Sangeet vs Corporate vs Campus Arena).

3. **Event Hosting Services (6 Cards):**
   - Wedding Anchoring, Corporate Galas, College Festivals, Brand Activations, Private Parties, Concerts.
   - Direct *"Enquire About This Event"* triggers pre-populating the enquiry form.

4. **Portfolio & Past Events:**
   - Real-time category filters (All, Weddings, Corporate, College Festivals, Brand Activations, Private Celebrations, Live Shows).
   - Live search by venue, city, or tag.
   - Responsive Lightbox modal with next/previous controls and event quotes.

5. **Showreel & Video Player:**
   - Responsive video player simulation with timeline scrubbing, chapter markers, sound wave visualizer, and 4 companion reels.

6. **Why Choose Me:**
   - 5 structured value pillars: Audience Connection, Adaptable Hosting, Smooth Event Flow, Memorable Moments, Professional Coordination.

7. **How Booking Works:**
   - 4-step transparent roadmap from enquiry to showtime.

8. **Testimonials & Social Proof:**
   - Categorized client feedback cards and collaborated venue/brand strip.

9. **Booking Enquiry Form & WhatsApp Integration:**
   - Complete 9-field validation form.
   - Instant WhatsApp message generator with URL encoding.
   - Copy summary to clipboard & clear demo data transparency notice.

10. **Instagram & BTS Feed:**
    - *"Life Behind the Mic"* social card grid with stage moments and follow CTA.

11. **FAQ Section:**
    - 8 expandable accordions covering pricing, outstation logistics, script personalization, and booking lead times.

12. **Live Demo Customizer Drawer:**
    - Floating settings panel allowing clients to test custom host names, WhatsApp numbers, cities, and email in real time.

---

## Configuration & Replacement Guide
To customize for a real anchor:
1. **Host details, contact info & WhatsApp:**
   Edit `src/data/config.ts` (`INITIAL_PROFILE`).
2. **Services & Portfolio:**
   Update `SERVICES` and `PORTFOLIO_EVENTS` in `src/data/config.ts`.
3. **Showreel Videos:**
   Update `SHOWREELS` in `src/data/config.ts` with real video embeds or YouTube links.
4. **SEO & Social Cards:**
   Update `<title>`, `<meta>`, and Schema.org JSON-LD in `index.html`.
