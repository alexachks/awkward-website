# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, SEO-optimized Astro website for Awkward Media (a Canadian SEO agency) built with CMS integration. The project uses Astro for static site generation and includes comprehensive CMS tags for content management through the Awkward CMS system. The design emphasizes performance, SEO optimization, and modern web standards.

## Development Commands

### Local Development
- `npm run dev` or `npm start` - Start Astro development server on port 4321
- `npm run preview` - Preview built site locally
- `npm run serve` - Serve on port 8080 for production testing

### Build & Deployment
- `npm run build` - Build Astro site to dist/ directory
- `npm run cms:analyze` - Analyze CMS tags in the project (placeholder command)
- `npm run format` - Format Astro/JS files with Prettier
- `npm test` or `npm run test:html` - Run HTML validation tests (placeholder command)

### Docker Development
- `npm run docker:dev` - Start development with Docker Compose
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:stop` - Stop Docker services

### Deployment
- Auto-deploys to staging on push to main branch
- Staging URL: awkward.dev.pushkarev.xyz (port 3001)
- Simple workflow: HTML validation → Docker build on server → Deploy

## Architecture

### File Structure
- `src/pages/index.astro` - Main homepage with CMS tags
- `src/layouts/Layout.astro` - Base layout with SEO meta tags
- `src/templates/service-page.astro` - CMS template for service pages
- `css/styles.css` - ShadCN-inspired design system with CSS custom properties
- `js/main.js` - Vanilla JavaScript with modern ES6+ features
- `astro.config.mjs` - Astro configuration with Tailwind integration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `Dockerfile` - Nginx-based container serving Astro build output
- `docker-compose.yml` - Development container orchestration

### CMS Integration
The site uses Awkward CMS tags throughout:
- `<!-- cms:text key="..." -->` - Single-line text fields
- `<!-- cms:textarea key="..." -->` - Multi-line text fields  
- `<!-- cms:richtext key="..." -->` - Rich HTML content
- `<!-- cms:image key="..." -->` - Image uploads
- `<!-- cms:link key="..." -->` - Link fields with URL and text
- `<!-- cms:repeater key="..." -->` - Repeating content blocks
- `<!-- cms:select key="..." -->` - Dropdown selections
- `<!-- cms:date key="..." -->` - Date fields

All CMS tags include unique keys following hierarchical naming (e.g., `hero.title`, `services.items`)

### Design System
The CSS uses a ShadCN-inspired design system with:
- CSS custom properties for consistent theming (`--background`, `--foreground`, etc.)
- Brand gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Mobile-first responsive design
- Inter font family from Google Fonts

### JavaScript Architecture
- Event-driven vanilla JavaScript (no frameworks)
- Intersection Observer API for scroll animations and lazy loading
- Mobile menu functionality with smooth scrolling
- Animated counters for statistics
- Form validation for CTA inputs
- Service Worker registration (optional PWA features)

### Performance Features
- Critical CSS inlined, external CSS preloaded
- Lazy loading support for images
- Intersection Observer for animation triggers
- Gzip compression via Nginx
- Cache headers for static assets (1 year expiry)
- WebP format support for images

### SEO Optimization
- Comprehensive meta tags (title, description, keywords)
- Open Graph and Twitter Card support
- JSON-LD structured data for organization
- Semantic HTML5 structure
- XML sitemap and robots.txt ready
- Canonical URL implementation

## Docker Configuration

The Dockerfile uses nginx:alpine and implements:
- Security headers (X-Frame-Options, CSP, XSS Protection)
- Non-root user execution for security
- Health checks
- Performance optimizations (gzip, caching)
- Port 8080 (non-privileged)

## Testing Standards

Lighthouse CI configuration requires:
- Performance: min 90% (warn)
- Accessibility: min 95% (error)
- Best Practices: min 90% (error) 
- SEO: min 95% (error)
- PWA: min 80% (warn)

## Development Notes

- Built with Astro for static site generation, no client-side frameworks
- All animations use CSS transitions and Intersection Observer
- Form submissions are currently simulated (alerts) - integrate with backend as needed
- Service Worker registration present but sw.js file not included
- Brand colors and content can be customized via CSS custom properties
- Contact information needs to be updated from placeholder values
- **Critical**: Minimize JavaScript usage - only add JS when CSS cannot solve the task. Always ask before adding JavaScript functionality.