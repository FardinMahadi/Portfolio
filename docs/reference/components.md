# Component Reference

v2 component architecture as defined in [IMPLEMENTATION_PLAN.md](../../IMPLEMENTATION_PLAN.md). Components are organized by folder under `src/components/`.

---

## `components/layout/`

Structural shell — rendered by `app/layout.tsx`.

| Component | Description | Key tokens |
|---|---|---|
| `Navbar.tsx` | Fixed top nav; transparent → `rgba(245,241,237,0.94) blur(16px)` after 60px scroll | `--canvas`, `--mag-500` active border |
| `NavLink.tsx` | Individual link with active state: `--mag-600` color + `2px solid --mag-500` bottom border | `--n500` default, `--mag-500` active |
| `MobileNav.tsx` | Hamburger → full-screen overlay drawer | `--canvas-dark` background |
| `Footer.tsx` | Nav links + social links + copyright | `--mag-900` bg, `--teal-300` values |
| `PageTransition.tsx` | Framer Motion `AnimatePresence` fade-up wrapper | `fadeUp` variant from `config/animations.ts` |

**Nav link order:** Home · About · Projects · Experience · Blog · **[Download CV]** (button, right)

---

## `components/ui/`

Design system primitives. Build these before any section or page component.

| Component | Props | Token usage |
|---|---|---|
| `Button.tsx` | `variant: 'primary'\|'secondary'\|'teal'\|'ghost'\|'dark'`, `size: 'sm'\|'md'\|'lg'` | `--mag-700→--mag-500` gradient (primary), `--r-sm` border-radius |
| `Badge.tsx` | `variant: 'neutral'\|'violet'\|'teal'\|'plum'\|'dark'` | `--r-xs` (3px) — always rectangular, never pill |
| `FileTab.tsx` | `path: string`, `active?: boolean` | `--canvas-sunken` bg, `2px solid --mag-500` bottom when active |
| `TerminalBlock.tsx` | `filename?: string`, `children` | `#080612` bg, `#100D1C` titlebar, `--mag-300` prompt |
| `TerminalPrompt.tsx` | `children` | `--mag-300` color, DM Mono |
| `SectionEyebrow.tsx` | `label: string`, `number?: string` | `--mag-500` line accent, `--n400` text, DM Mono uppercase |
| `SectionHeading.tsx` | `children`, `accent?: string` | `--mag-500` on `.accent` span |
| `Cursor.tsx` | — | `--mag-400` blinking cursor |
| `PulseDot.tsx` | `color?: 'teal'\|'mag'` | CSS `@keyframes pulse`, `--teal-400` default |
| `AvailabilityChip.tsx` | `status: 'available'\|'busy'\|'open'` | `--teal-100` bg, `--r-pill` (100px) — the only pill shape |
| `Divider.tsx` | `label?: string` | `--n200` line, `--n400` label |
| `NoiseOverlay.tsx` | `opacity?: number` (default `0.03`) | SVG filter over dark sections |

**Usage pattern:**

```tsx
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

<Button variant="primary" size="md">View Projects</Button>
<Badge variant="neutral">Next.js</Badge>
```

---

## `components/sections/`

Homepage sections. Each is a standalone component; `app/page.tsx` composes them in order.

| Component | Purpose | Data source |
|---|---|---|
| `HeroSection.tsx` | Full hero: text left + dark diagonal photo panel right | `lib/data/site.ts` |
| `StatsStrip.tsx` | Dark bar: 4 count-up stats (years, projects, etc.) | `lib/data/site.ts` |
| `WhatIDoSection.tsx` | 3 service pillar cards | `lib/data/site.ts` |
| `FeaturedProjectsSection.tsx` | 2–3 featured `ProjectCard`s | `lib/data/projects.ts` |
| `ExperienceHighlight.tsx` | Timeline preview (2 most recent roles) | `lib/data/experience.ts` |
| `TechStackSection.tsx` | Grouped `Badge` clusters by category | `lib/data/skills.ts` |
| `TestimonialsSection.tsx` | Social proof cards | `lib/data/testimonials.ts` |
| `BlogTeaserStrip.tsx` | 2-article minimal teaser | MDX file list |
| `CtaSection.tsx` | Full-bleed dark CTA block | `lib/data/site.ts` |
| `ContactSection.tsx` | Form left + terminal status right | — |

**Homepage order (locked):**

```
HeroSection → StatsStrip → WhatIDoSection → FeaturedProjectsSection
→ ExperienceHighlight → TechStackSection → TestimonialsSection
→ BlogTeaserStrip → CtaSection → ContactSection
```

---

## `components/hero/`

Sub-components assembled by `HeroSection.tsx`.

| Component | Purpose |
|---|---|
| `HeroText.tsx` | Name (solid) + second line (outline `-webkit-text-stroke: 2px var(--mag-500)`) + tagline + role |
| `HeroPhoto.tsx` | Photo in dark diagonal panel — `clip-path: polygon(14% 0, 100% 0, 100% 100%, 0% 100%)`, `grad-hero` bg |
| `HeroStats.tsx` | `2+ yrs · 10+ projects` mini-bar with `PulseDot` |
| `HeroCtas.tsx` | Primary: "View Projects" (btn-primary) + secondary: "Get In Touch" (btn-secondary) |

---

## `components/cards/`

| Component | Purpose |
|---|---|
| `ProjectCard.tsx` | Featured card: dark left image zone + light right content, `--r-xl` radius |
| `ProjectGalleryCard.tsx` | Compact version for `/projects` gallery grid |
| `BlogCard.tsx` | `3px solid --mag-500` left border, DM Mono metadata |
| `BlogTeaserCard.tsx` | Minimal card for homepage strip |
| `ServiceCard.tsx` | "What I Do" pillar card |
| `TestimonialCard.tsx` | Quote + name + role + company |
| `ExperienceCard.tsx` | Timeline entry: role, company, date, stack badges |
| `StatCard.tsx` | Single count-up number + label |

---

## `components/forms/`

| Component | Purpose |
|---|---|
| `ContactForm.tsx` | Full validated form; POSTs to `/api/contact` |
| `FormField.tsx` | Reusable input/textarea with `const name =` DM Mono label |
| `FormSuccess.tsx` | Terminal-style success confirmation |

---

## `components/project/`

| Component | Purpose |
|---|---|
| `CaseStudyHero.tsx` | Project name + role + brief |
| `CaseStudyBody.tsx` | Problem / Decision / Result blocks |
| `ProjectImageGallery.tsx` | Screenshot carousel/grid |
| `ProjectMeta.tsx` | Stack, role, date, links sidebar |
| `ProjectFilter.tsx` | Filter buttons for `/projects` |
| `ProjectGrid.tsx` | Responsive grid of `ProjectGalleryCard`s |

---

## `components/blog/`

| Component | Purpose |
|---|---|
| `BlogGrid.tsx` | Blog listing grid |
| `BlogMeta.tsx` | DM Mono: `Category · Date · X min read` |
| `BlogBody.tsx` | MDX renderer with prose styles from `styles/typography.css` |
| `BlogTableOfContents.tsx` | Sticky TOC for articles |

---

## `components/experience/`

| Component | Purpose |
|---|---|
| `Timeline.tsx` | Full vertical timeline with `grad-signal` line |
| `TimelineEntry.tsx` | Individual role card |
| `EducationSection.tsx` | Education block |

---

**Back to**: [Reference Index](./README.md)

---

## Landing Page Components

### HeroSection

**Location**: `src/components/LandingPage/HeroSection.tsx`

**Description**: Main hero section with animated text and call-to-action
buttons.

**Props**: None (uses internal state)

**Features**:

- Animated typing effect for name
- Floating gradient orbs
- Scroll indicator
- Magnetic button effects
- Responsive design

**Usage**:

```typescript
import { HeroSection } from "@/components/LandingPage/HeroSection";

<HeroSection />
```

---

### Navigation

**Location**: `src/components/LandingPage/Navigation.tsx`

**Description**: Main navigation component with mobile menu and theme switcher.

**Props**: None

**Features**:

- Responsive mobile menu
- Active section highlighting
- Color palette switcher
- Smooth scroll navigation
- Sticky header on scroll

**Usage**:

```typescript
import { Navigation } from "@/components/LandingPage/Navigation";

<Navigation />
```

**Internal State**:

- `isScrolled` - Whether page is scrolled
- `activeSection` - Currently active section
- `isMobileMenuOpen` - Mobile menu state

---

### AboutSection

**Location**: `src/components/LandingPage/about/AboutSection.tsx`

**Description**: About section displaying personal information and skills.

**Props**: None

**Features**:

- Animated reveal on scroll
- Technology stack display
- Personal introduction
- Responsive layout

**Usage**:

```typescript
import { AboutSection } from "@/components/LandingPage/about/AboutSection";

<AboutSection />
```

---

### ProjectsSection

**Location**: `src/components/LandingPage/ProjectsSection.tsx`

**Description**: Displays portfolio projects in a grid with modal gallery.

**Props**: None (uses `projects` from `@/lib/projects`)

**Features**:

- Project grid layout
- Project screenshot modal
- Gallery navigation
- Keyboard navigation
- Structured data (JSON-LD)
- Live and code links

**Usage**:

```typescript
import { ProjectsSection } from "@/components/LandingPage/ProjectsSection";

<ProjectsSection />
```

**Internal State**:

- `selectedProjectIndex` - Currently selected project
- `focusReturnElement` - Element to return focus to

---

### ExperienceSection

**Location**: `src/components/LandingPage/experience/ExperienceSection.tsx`

**Description**: Displays work experience timeline.

**Props**: None (uses internal `experiences` array)

**Features**:

- Timeline layout
- Company information
- Responsibilities list
- Technology tags
- Date ranges
- External links

**Usage**:

```typescript
import { ExperienceSection } from "@/components/LandingPage/experience/ExperienceSection";

<ExperienceSection />
```

**Experience Data Structure**:

```typescript
interface ExperienceProps {
  company: string;
  position: string;
  type: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
}
```

---

### BlogSection

**Location**: `src/components/LandingPage/BlogSection.tsx`

**Description**: Displays featured blog posts on the landing page.

**Props**: None (uses `getAllBlogPosts()` from `@/lib/blogData`)

**Features**:

- Featured blog posts
- Category filtering
- Read time display
- Link to full blog page
- Animated cards

**Usage**:

```typescript
import { BlogSection } from "@/components/LandingPage/BlogSection";

<BlogSection />
```

---

### ContactSection

**Location**: `src/components/LandingPage/ContactSection.tsx`

**Description**: Contact form and social links section.

**Props**: None

**Features**:

- Contact form with validation
- Email integration (Resend)
- Social media links
- Form error handling
- Success/error states
- Terminal-styled form

**Usage**:

```typescript
import { ContactSection } from "@/components/LandingPage/ContactSection";

<ContactSection />
```

**Internal State**:

- `formData` - Form field values
- `errors` - Validation errors
- `isSubmitting` - Submission state
- `submitStatus` - Success/error status
- `submitMessage` - Status message

**Form Fields**:

- `name` - Required string
- `email` - Required valid email
- `message` - Required string (max 5000 chars)

---

### Footer

**Location**: `src/components/LandingPage/Footer.tsx`

**Description**: Site footer with links and copyright.

**Props**: None

**Features**:

- Social links
- Navigation links
- Copyright information
- Responsive layout

**Usage**:

```typescript
import { Footer } from "@/components/LandingPage/Footer";

<Footer />
```

---

## Blog Components

### BlogIndexPage

**Location**: `src/components/blog/BlogIndexPage.tsx`

**Description**: Main blog listing page with category filtering.

**Props**: None

**Features**:

- Blog post grid
- Category filter
- Search functionality
- Pagination (if needed)
- Structured data

**Usage**:

```typescript
import { BlogIndexPage } from "@/components/blog/BlogIndexPage";

<BlogIndexPage />
```

---

### BlogPostContent

**Location**: `src/components/blog/BlogPostContent.tsx`

**Description**: Individual blog post page layout.

**Props**:

```typescript
interface BlogPostContentProps {
  post: BlogPostsProps;
}
```

**Features**:

- Markdown rendering
- Post metadata
- Reading time
- Category display
- Navigation
- SEO metadata

**Usage**:

```typescript
import { BlogPostContent } from "@/components/blog/BlogPostContent";

<BlogPostContent post={post} />
```

---

### MarkdownRenderer

**Location**: `src/components/blog/MarkdownRenderer.tsx`

**Description**: Renders markdown content with syntax highlighting.

**Props**:

```typescript
interface MarkdownRendererProps {
  content: string;
}
```

**Features**:

- Markdown parsing
- Syntax highlighting
- Code blocks
- Tables
- Lists
- Links
- Custom styling

**Usage**:

```typescript
import { MarkdownRenderer } from "@/components/blog/MarkdownRenderer";

<MarkdownRenderer content={post.content} />
```

**Supported Markdown**:

- Headings (h1-h4)
- Paragraphs
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Inline code
- Links
- Bold and italic
- Blockquotes
- Tables (via remark-gfm)
- Horizontal rules

---

### CategoryFilter

**Location**: `src/components/blog/CategoryFilter.tsx`

**Description**: Category filter component for blog posts.

**Props**:

```typescript
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}
```

**Usage**:

```typescript
import { CategoryFilter } from "@/components/blog/CategoryFilter";

<CategoryFilter
  categories={categories}
  selectedCategory={selectedCategory}
  onCategoryChange={setSelectedCategory}
/>
```

---

## Effects Components

### TargetCursor

**Location**: `src/components/effects/TargetCursor.tsx`

**Description**: Animated cursor that responds to interactive elements.

**Props**:

```typescript
interface TargetCursorProps {
  targetSelector?: string; // Default: ".cursor-target"
  spinDuration?: number; // Default: 2
  hideDefaultCursor?: boolean; // Default: true
}
```

**Features**:

- GSAP animations
- Corner animations on hover
- Mobile detection (auto-disables)
- Smooth following
- Click animations

**Usage**:

```typescript
import { TargetCursor } from "@/components/effects/TargetCursor";

<TargetCursor targetSelector=".cursor-target" />
```

**Note**: Automatically included in root layout, disabled on mobile.

---

### BlogCursorEffect

**Location**: `src/components/effects/BlogCursorEffect.tsx`

**Description**: Cursor effect specifically for blog pages with label following.

**Props**:

```typescript
interface BlogCursorEffectProps {
  children: React.ReactNode;
  className?: string;
  label?: string; // Default: "Creative Reading"
  targetSelector?: string; // Default: "[data-blog-category]"
}
```

**Features**:

- Label following cursor
- Category-based labels
- Mobile detection
- Theme-aware styling

**Usage**:

```typescript
import { BlogCursorEffect } from "@/components/effects/BlogCursorEffect";

<BlogCursorEffect label="Creative Reading">
  {/* Blog content */}
</BlogCursorEffect>
```

---

### MagneticButton

**Location**: `src/components/effects/MagneticButton.tsx`

**Description**: Button with magnetic hover effect using GSAP.

**Props**:

```typescript
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

**Usage**:

```typescript
import { MagneticButton } from "@/components/effects/MagneticButton";

<MagneticButton onClick={handleClick}>
  Click Me
</MagneticButton>
```

---

### ProjectScreenshotModal

**Location**: `src/components/effects/ProjectScreenshotModal.tsx`

**Description**: Modal for displaying project screenshots in a gallery.

**Props**:

```typescript
interface ProjectScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
  }>;
  initialIndex?: number;
  focusReturnElement?: HTMLElement | null;
}
```

**Features**:

- Image gallery
- Keyboard navigation (arrow keys, ESC)
- Thumbnail navigation
- Focus management
- Accessibility

**Usage**:

```typescript
import { ProjectScreenshotModal } from "@/components/effects/ProjectScreenshotModal";

<ProjectScreenshotModal
  isOpen={isOpen}
  onClose={handleClose}
  images={project.gallery}
  initialIndex={0}
/>
```

---

### ScrollProgressIndicator

**Location**: `src/components/effects/ScrollProgressIndicator.tsx`

**Description**: Visual indicator showing scroll progress.

**Props**: None

**Usage**:

```typescript
import { ScrollProgressIndicator } from "@/components/effects/ScrollProgressIndicator";

<ScrollProgressIndicator />
```

---

### GlassmorphismPanel

**Location**: `src/components/effects/GlassmorphismPanel.tsx`

**Description**: Panel with glassmorphism effect.

**Props**:

```typescript
interface GlassmorphismPanelProps {
  children: React.ReactNode;
  className?: string;
}
```

**Usage**:

```typescript
import { GlassmorphismPanel } from "@/components/effects/GlassmorphismPanel";

<GlassmorphismPanel>
  Content
</GlassmorphismPanel>
```

---

## UI Components

### Button

**Location**: `src/components/ui/button.tsx`

**Description**: Reusable button component (shadcn/ui).

**Props**: Standard button props + variants

**Variants**:

- `default`
- `destructive`
- `outline`
- `secondary`
- `ghost`
- `link`

**Usage**:

```typescript
import { Button } from "@/components/ui/button";

<Button variant="default">Click Me</Button>
```

---

### Input

**Location**: `src/components/ui/input.tsx`

**Description**: Text input component (shadcn/ui).

**Props**: Standard input props

**Usage**:

```typescript
import { Input } from "@/components/ui/input";

<Input type="email" placeholder="Email" />
```

---

### Textarea

**Location**: `src/components/ui/textarea.tsx`

**Description**: Textarea component (shadcn/ui).

**Props**: Standard textarea props

**Usage**:

```typescript
import { Textarea } from "@/components/ui/textarea";

<Textarea placeholder="Message" rows={5} />
```

---

### ColorPaletteSwitcher

**Location**: `src/components/ui/ColorPaletteSwitcher.tsx`

**Description**: Component for switching color palettes.

**Props**: None (uses `useColorPalette` hook)

**Usage**:

```typescript
import { ColorPaletteSwitcher } from "@/components/ui/ColorPaletteSwitcher";

<ColorPaletteSwitcher />
```

---

### Loading Components

**Location**: `src/components/ui/loading/`

**Components**:

- `LoadingSpinner` - Spinner component
- `SkeletonLoader` - Skeleton loading states
- `PageLoader` - Full page loader
- `ContentSkeleton` - Content-specific skeletons
- `NavigationLoader` - Navigation loading state

**Usage**:

```typescript
import {
  LoadingSpinner,
  SkeletonLoader,
  PageLoader,
  ContentSkeleton
} from "@/components/ui/loading";

<LoadingSpinner />
<SkeletonLoader variant="text" />
<PageLoader message="Loading..." />
<ContentSkeleton type="blogList" count={3} />
```

---

## Type Definitions

All type definitions are located in `src/components/types/`:

- `BlogPostsProps.tsx` - Blog post types
- `ProjectsProps.tsx` - Project types
- `SocialLinksProps.tsx` - Social link types
- `NavItemsProps.tsx` - Navigation item types
- `ExperienceProps.tsx` - Experience types
- `TechStackProps.tsx` - Technology stack types
- `ErrorBoundaryProps.ts` - Error boundary types
- `ImageWithFallbackProps.tsx` - Image component types
- `ParticleProps.tsx` - Particle effect types
- `ProjectScreenshotModalProps.ts` - Modal types

---

## Component Best Practices

1. **Use TypeScript**: All components should have proper type definitions
2. **Accessibility**: Include ARIA attributes and semantic HTML
3. **Responsive**: Design for mobile-first approach
4. **Performance**: Use `useMemo` and `useCallback` where appropriate
5. **Animation**: Use Framer Motion for scroll animations
6. **Theme**: Use color palette CSS variables
7. **Error Handling**: Include error boundaries where needed
8. **Loading States**: Provide loading indicators for async operations

---

## Component Dependencies

### Core Dependencies

- `react` - React library
- `next` - Next.js framework
- `framer-motion` - Animations
- `gsap` - Advanced animations (cursor effects)
- `lucide-react` - Icons
- `tailwindcss` - Styling

### Data Dependencies

- `@/lib/projects` - Project data
- `@/lib/blogData` - Blog post data
- `@/data/socialLinks.json` - Social links

### Context Dependencies

- `@/contexts/ColorPaletteContext` - Color palette management

---

## Summary

| Category     | Components     | Location                      |
| ------------ | -------------- | ----------------------------- |
| Landing Page | 8 components   | `src/components/LandingPage/` |
| Blog         | 4 components   | `src/components/blog/`        |
| Effects      | 6 components   | `src/components/effects/`     |
| UI           | 10+ components | `src/components/ui/`          |
| Types        | 10+ types      | `src/components/types/`       |
