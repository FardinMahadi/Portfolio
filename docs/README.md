# Documentation Index

Fardin Mahadi Portfolio — v2 Redesign documentation.

> **Status:** Active redesign · Theme: Deep Magenta Signal · Previous version live at `/v0.1.1/`

---

## Quick Start

1. [Development Workflow](./getting-started/development-workflow.md) — Local setup and commands
2. [Implementation Plan](../IMPLEMENTATION_PLAN.md) — Full phase-by-phase build order
3. [Design System](../DESIGN_SYSTEM.md) — Color tokens, typography, spacing, component specs
4. [UX Architecture](../UX_ARCHITECTURE.md) — UX audit, strategy, and routing decisions

---

## Documentation Structure

### Getting Started

- **[Development Workflow](./getting-started/development-workflow.md)** — Local setup, commands, Git workflow
- **[Contributing](./getting-started/contributing.md)** — Code conventions and PR process
- **[Environment Variables](./getting-started/environment-variables.md)** — Required env vars and setup

### Reference

- **[Component Reference](./reference/components.md)** — All new v2 components, props, and locations
- **[Data Structures](./reference/data-structures.md)** — TypeScript types and data schema for v2
- **[Style Guide](./reference/style-guide.md)** — Coding standards and patterns
- **[API Documentation](./reference/api.md)** — API routes and request/response formats

### Systems

- **[Animation System](./systems/animation-system.md)** — Framer Motion variants and GSAP patterns
- **[Blog System](./systems/blog-system.md)** — MDX-based blog architecture
- **[Color System](./systems/color-palette.md)** — Deep Magenta Signal token system

### Content

- **[Blog Topics](./content/blog-topics.md)** — Blog topic suggestions
- **[Content Structure](./content/README.md)** — MDX content management guide

### Roadmap

- **[Portfolio Improvements](./roadmap/portfolio-improvements.md)** — v2 phase tracking

### AI Documentation

- **[AI Training Guide](./ai/training-guide.md)** — Quick reference for AI assistants

### Archive

- **[v0.1.1 Feature Plan](./archive/feature-plan.md)** — Old feature backlog (superseded)
- **Code Archive** — `src/archive/v0.1.1/` — Full code snapshot of v0.1.1
- **Live Preview** — `/v0.1.1/` — Running version of the old portfolio

---

## Documentation by Role

### For Developers

1. [Development Workflow](./getting-started/development-workflow.md)
2. [Implementation Plan](../IMPLEMENTATION_PLAN.md) — build sequence
3. [Component Reference](./reference/components.md)
4. [Style Guide](./reference/style-guide.md)

### For AI Assistants

1. [AI Training Guide](./ai/training-guide.md)
2. [Style Guide](./reference/style-guide.md)
3. [Design System](../DESIGN_SYSTEM.md)
4. [Component Reference](./reference/components.md)
5. [Data Structures](./reference/data-structures.md)
2. [Development Workflow](./getting-started/development-workflow.md)
3. [Component Reference](./reference/components.md)

## Quick Reference

### Common Tasks

**Setting up locally:** →
[Development Workflow - Local Setup](./getting-started/development-workflow.md#local-setup)

**Adding a new component:** → [Component Reference](./reference/components.md) +
[Style Guide - Component Patterns](./reference/style-guide.md#component-patterns)

**Adding a blog post:** →
[Blog System - Adding Blog Posts](./systems/blog-system.md#adding-blog-posts)

**Deploying to production:** → [Deployment Guide](./guides/deployment.md)

**Fixing build errors:** →
[Troubleshooting - Build Errors](./guides/troubleshooting.md#build-errors)

**Understanding the color system:** →
[Color Palette System](./systems/color-palette.md)

**Working with animations:** → [Animation System](./systems/animation-system.md)

**API integration:** → [API Documentation](./reference/api.md)

**Mobile development:** → [Mobile Setup Guide](./guides/mobile-setup.md)

## Documentation Categories

### Architecture & Design

- [Style Guide](./reference/style-guide.md) - Project architecture and patterns
- [Component Reference](./reference/components.md) - Component structure
- [Data Structures](./reference/data-structures.md) - Data organization

### Features & Systems

- [Color Palette System](./systems/color-palette.md) - Theme switching
- [Animation System](./systems/animation-system.md) - Animations and motion
- [Cursor Effects](./systems/cursor-effects.md) - Interactive cursor
- [Blog System](./systems/blog-system.md) - Blog functionality

### Development

- [Development Workflow](./getting-started/development-workflow.md) - Daily
  workflow
- [Contributing](./getting-started/contributing.md) - Contribution process
- [Troubleshooting](./guides/troubleshooting.md) - Problem solving

### Deployment

- [Deployment Guide](./guides/deployment.md) - Production deployment
- [Environment Variables](./getting-started/environment-variables.md) -
  Configuration
- [API Documentation](./reference/api.md) - API endpoints

### Mobile

- [Mobile Setup Guide](./guides/mobile-setup.md) - Mobile app setup
- [Mobile Module README](../src/mobile/README.md) - Mobile module technical
  reference

## File Structure

```
docs/
├── README.md                          # This file - documentation index
├── getting-started/
│   ├── README.md                      # Getting started index
│   ├── development-workflow.md        # Development process
│   ├── environment-variables.md       # Environment configuration
│   └── contributing.md                # Contribution guidelines
├── guides/
│   ├── README.md                      # Guides index
│   ├── deployment.md                  # Deployment instructions
│   ├── troubleshooting.md             # Common issues and solutions
│   └── mobile-setup.md                # Mobile app setup guide
├── reference/
│   ├── README.md                      # Reference index
│   ├── api.md                         # API routes documentation
│   ├── components.md                  # Component catalog
│   ├── data-structures.md             # Data schemas and types
│   └── style-guide.md                 # Coding standards and patterns
├── systems/
│   ├── README.md                      # Systems index
│   ├── animation-system.md            # Animation patterns
│   ├── blog-system.md                 # Blog system architecture
│   ├── color-palette.md               # Color system documentation
│   └── cursor-effects.md              # Cursor effects documentation
├── content/
│   ├── README.md                      # Content index
│   └── blog-topics.md                 # Blog topic suggestions
├── ai/
│   ├── README.md                      # AI documentation index
│   ├── training-guide.md              # AI assistant quick reference
│   ├── quick-prompt.md                # Quick ESLint setup prompt
│   └── setup-prompt.md                # Detailed ESLint setup instructions
└── archive/
    ├── mobile-integration-plan.md     # Original mobile integration plan
    ├── mobile-setup-complete.md       # Mobile setup completion status
    ├── mobile-reorganization.md       # Mobile code reorganization notes
    └── feature-plan.md                # Feature backlog/planning document
```

## Getting Help

If you can't find what you're looking for:

1. **Search the documentation** - Use your editor's search
2. **Check Troubleshooting** -
   [Troubleshooting Guide](./guides/troubleshooting.md)
3. **Review Style Guide** - [Style Guide](./reference/style-guide.md)
4. **Ask for help** - Open a GitHub issue or discussion

## Contributing to Documentation

Documentation improvements are welcome! See:

- [Contributing Guide](./getting-started/contributing.md)
- [Development Workflow](./getting-started/development-workflow.md)

When updating docs:

- Keep language clear and concise
- Add examples where helpful
- Update related documentation
- Test code snippets
- Update links when moving files

Before reshaping architecture or mentoring behavior, read
`.cursor/commands/code-structure.md` and `.cursor/commands/tutor.md` (and the
new companion guides) so you understand the expected checkpoints, decision
logging, and learner-facing tone that keep the project consistent.

## Documentation Maintenance

### Keeping Docs Updated

When making changes:

- Update relevant documentation
- Add examples for new features
- Update code snippets
- Keep links working

### Documentation Standards

- Use clear, concise language
- Include code examples
- Add table of contents for long docs
- Cross-reference related docs
- Keep formatting consistent

## Summary

This documentation covers:

- ✅ Project setup and development
- ✅ Code standards and patterns
- ✅ Component architecture
- ✅ System documentation
- ✅ Deployment and operations
- ✅ Mobile app development
- ✅ Troubleshooting and support
- ✅ Content management
- ✅ AI assistant resources

**Start with**:
[Development Workflow](./getting-started/development-workflow.md) for setup, or
[Style Guide](./reference/style-guide.md) for coding standards.

---

_Last updated: Documentation restructured and reorganized for better navigation_
