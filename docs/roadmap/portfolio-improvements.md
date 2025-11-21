# Portfolio Improvements Roadmap

Documenting the ideas you've surfaced so the team can pick the highest-impact work in follow-up
sprints. The new light palette and Discord link updates are already deployed; the remaining items
are grouped by area with motivation and metrics where applicable.

## ✅ Recent updates

- **Light Mode palette (Dec 2025)** – Adds a bright background/surface/text option in the palette
  switcher while keeping the existing accent colors, letting visitors evaluate the portfolio in a
  high-contrast layout without disrupting the current theme selector logic.
- **Hero CTA refresh & Discord invite (Dec 2025)** – “View Projects”/“Get in Touch” remain the
  primary actions while new helper buttons surface “Hire Me”, “View GitHub”, “Connect on LinkedIn”,
  and “Join Discord”; the Discord entry now points to a reliable invite link instead of the profile
  URL.

## 1. Portfolio Layout & Content

- **Project metrics** – Highlight KPIs (users, conversion lifts, performance gains) next to each
  featured project to show measurable impact.
- **Dedicated skills section** – Promote a filterable “Skills” matrix or pill list so the technology
  stack isn’t buried in the hero copy.
- **Case studies** – Add two hero projects with problem → solution → results narratives, including
  tooling, process, and impact.
- **Expanded descriptions** – Enrich every project card with the challenges overcome and the
  instruments used to build the experience.

## 2. Experience Section

- **Timeline view** – Introduce a visual timeline (horizontal or vertical) across roles to show
  progression at a glance.
- **Education & certifications** – Surface degrees/certifications from `resumeData.json` in this
  section to round out the experience.
- **Per-role achievements** – Annotate each role with bulletized achievements, metrics (users
  reached, revenue supported), and tech stacks used.

## 3. Call-to-Action Optimization

- **Multiple CTA placements** – Keep primary CTAs in the hero but also sprinkle “Hire Me”, “View
  GitHub”, and “Connect on LinkedIn” buttons in other sections (footer, contact, blog).
- **Availability status** – Show “Currently available for contract work” or similar messaging near
  CTAs to create urgency.
- **Newsletter/Signup** – Add an email capture or Calendly schedule link for
  recruiters/collaborators who want to talk.

## 4. Technical Improvements

- **Dark/light mode toggle** – Consider replacing the palette switcher with an explicit day/night
  toggle while retaining the more playful color options.
- **Mobile UX refinements** – Smooth out any responsive breakpoints where menus or layouts
  misbehave, especially on tablet/mobile sizes.
- **Loading & toast states** – Add visual feedback (spinners, toasts) when the contact form is
  submitting as well as success/error messages.
- **Form honeypot** – Add a hidden field to reduce spam submissions.

## 5. SEO & Discoverability

- **Meta descriptions** – Add SEO-friendly meta descriptions for each page/section.
- **Open Graph + Twitter cards** – Define OG tags (title, description, image) for hero, blog, and
  resume pages so previews look polished.
- **JSON-LD** – Publish structured data (Person, CreativeWork) using `next/head` or a shared helper.
- **Sitemap.xml** – Generate a sitemap covering app routes, blogs, and resume downloads for
  crawlers.

## 6. Blog Section Enhancement

- **Search/filter** – Add a keyword search/filter UI for the blog index.
- **Related posts** – Show contextual recommendations beneath each article.
- **Author bio** – Create a consistent author block for every post (photo, bio, socials).
- **Share controls** – Add social share buttons to help readers spread the content.
- **Reading time accuracy** – Keep the `estimated reading time` component up to date with content
  length calculations.

## 7. Resume Section Improvements

- **Preview modal** – Allow visitors to preview the PDF resume in a modal before downloading.
- **Template comparison** – Offer side-by-side comparisons of templates with highlights on their
  differences.
- **Default template control** – Let visitors customize which resume template loads first.
- **Version history** – Display when each template was last refreshed, possibly by committing
  metadata to `resumeData.json`.

## 8. Contact & Social Integration

- **Contact preference CTA** – Provide a toggle or copy describing preferred contact channels (email
  first, Discord invite, LinkedIn, etc.).
- **Response SLA** – State “I typically reply within 24 hours” near the form and CTA buttons.
- **Scheduling link** – Include a Calendly or other scheduler link to let people book time directly.

## 9. Visual & Branding

- **Refined palette set** – Reduce the theme variants to 2-3 signature colors if the variety dilutes
  the brand story.
- **Whitespace** – Add breathing room between major sections to emphasize structure.
- **Real imagery** – Replace placeholder tech logos with screenshots or photos of launched work.
- **Subtle animations** – Animate elements (fade/slide) as they enter the viewport to reinforce
  polish.

## 10. Professional Details

- **Testimonials** – Add social proof from clients, managers, or collaborators.
- **Talks & events** – Mention speaking engagements or workshops if applicable.
- **GitHub stats** – Embed a contributions graph or display a language usage breakdown.
- **Certifications** – Surface relevant certs (AWS, Google, etc.) with badges or cards.

## 11. Accessibility

- **Color contrast** – Audit text/background combinations against WCAG AA; adjust as needed.
- **Skip links** – Keep the “Skip to main content” link visible and test keyboard flows.
- **Alt text** – Ensure every image (projects, illustrations) has descriptive alt text.
- **Keyboard navigation** – Test for tab order and focus states across interactive elements.

## 12. Performance

- **Image optimization** – Compress project imagery and keep `next/image` lazy loading.
- **Analytics** – Add tracking to measure which projects or CTAs get traction.
- **Core Web Vitals** – Monitor LCP/FID/CLS as new hero animations or content are added.

This roadmap captures the high-level requests; feel free to convert each bullet into an issue/PR
when you're ready to tackle it.
