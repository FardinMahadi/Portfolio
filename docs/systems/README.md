# Systems

Core technical systems for the v2 portfolio.

| System    | File                                         | Description                                      |
| --------- | -------------------------------------------- | ------------------------------------------------ |
| Animation | [animation-system.md](./animation-system.md) | Framer Motion variants in `config/animations.ts` |
| Blog      | [blog-system.md](./blog-system.md)           | MDX-based blog in `content/blog/*.mdx`           |
| Color     | [color-palette.md](./color-palette.md)       | Deep Magenta Signal CSS token system             |

> **Note:** `cursor-effects.md` documents the v0.1.1 cursor system which was
> removed in v2.

**Topics covered:**

- Framer Motion usage
- GSAP integration
- Animation patterns
- Performance optimization
- Best practices

### Blog System

[**Blog System**](./blog-system.md) - Blog architecture and content management.

**Topics covered:**

- Blog post structure
- Adding blog posts
- Markdown rendering
- Categories
- SEO implementation
- Routing

### Color Palette System

[**Color Palette System**](./color-palette.md) - Theme system and color
management.

**Topics covered:**

- Available palettes
- CSS variables
- Using palettes
- Adding new palettes
- Theme utility classes
- Implementation details

### Cursor Effects

[**Cursor Effects**](./cursor-effects.md) - Cursor animation system.

**Topics covered:**

- TargetCursor component
- BlogCursorEffect component
- Mobile detection
- Customization
- Implementation details

## Quick Reference

### Working with Animations

→ [Animation System](./animation-system.md)

### Managing Blog Content

→ [Blog System](./blog-system.md)

### Customizing Colors

→ [Color Palette System](./color-palette.md)

### Cursor Interactions

→ [Cursor Effects](./cursor-effects.md)

## System Architecture

### Animation Layer

- **Framer Motion**: Component animations, scroll reveals
- **GSAP**: Advanced cursor animations, complex sequences

### Content Management

- **JSON-based**: Projects, blog posts, social links stored in JSON
- **Markdown**: Blog post content uses Markdown
- **Type-safe**: Full TypeScript support

### Theming

- **Dynamic Palettes**: 6 built-in color palettes
- **CSS Variables**: Theme applied via CSS variables
- **Persistent**: User preferences saved in localStorage

### Interactive Effects

- **TargetCursor**: Animated cursor for main pages
- **BlogCursorEffect**: Label-following cursor for blog pages
- **Mobile-aware**: Automatically disabled on mobile devices

## Related Documentation

- [Getting Started](../getting-started/README.md) - Setup and workflow
- [Reference](../reference/README.md) - API and component reference
- [Content](../content/README.md) - Content management

---

**Back to**: [Documentation Index](../README.md)
