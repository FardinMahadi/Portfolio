# Content

All content is MDX files. No JSON content files in v2.

## Blog Posts

Location: `content/blog/*.mdx`

Each file's filename becomes the URL slug. E.g.
`content/blog/react-server-components.mdx` → `/blog/react-server-components`.

See [Blog System](../systems/blog-system.md) for the full frontmatter schema.

## Project Case Studies

Location: `content/projects/*.mdx`

Used by the `/projects/[slug]` dynamic route for extended case study pages.

## Blog Topic Ideas

See `blog-topics.md` in this folder for a list of planned post topics.

- General topics
- Learning path recommendations

## Content Management

### Blog Posts

Blog posts are managed in `src/data/blogPosts.json`. See:

- [Blog System](../systems/blog-system.md) - Complete blog system documentation
- [Data Structures](../reference/data-structures.md) - Blog post data structure

### Projects

Projects are managed in `src/data/projects.json`. See:

- [Data Structures](../reference/data-structures.md) - Project data structure
- [Component Reference](../reference/components.md) - ProjectsSection component

### Social Links

Social links are managed in `src/data/socialLinks.json`. See:

- [Data Structures](../reference/data-structures.md) - Social links data
  structure

## Quick Reference

### Finding Blog Topics

→ [Blog Topics](./blog-topics.md)

### Managing Content

→ [Blog System](../systems/blog-system.md) - Blog content management →
[Data Structures](../reference/data-structures.md) - Content data formats

## Related Documentation

- [Blog System](../systems/blog-system.md) - Blog architecture
- [Data Structures](../reference/data-structures.md) - Content schemas
- [Component Reference](../reference/components.md) - Content components

---

**Back to**: [Documentation Index](../README.md)
