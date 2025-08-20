# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, SEO-optimized website for Awkward Media (a Canadian SEO agency) built with vanilla HTML, CSS, and JavaScript. The project emphasizes performance, SEO optimization, and modern web standards with a ShadCN-inspired design system.

## Development Commands

### Local Development
- `npm run dev` or `npm start` - Start development server with live-server on port 3000
- `npm run serve` - Serve on port 8080 for production testing

### Testing & Quality
- `npm test` - Run all tests (HTML validation + Lighthouse)
- `npm run test:html` - Validate HTML structure
- `npm run test:lighthouse` - Run Lighthouse performance tests
- `npm run lint:css` - Lint CSS with stylelint
- `npm run lint:html` - Validate HTML
- `npm run format` - Format code with Prettier

### Build & Optimization
- `npm run build` - Build optimized assets (minify CSS and JS)
- `npm run minify:css` - Minify CSS to dist/css/styles.min.css
- `npm run minify:js` - Minify JS to dist/js/main.min.js

### Docker Development
- `npm run docker:dev` - Start development with Docker Compose
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:stop` - Stop Docker services

## Architecture

### File Structure
- `index.html` - Single-page website with semantic HTML5 structure
- `css/styles.css` - ShadCN-inspired design system with CSS custom properties
- `js/main.js` - Vanilla JavaScript with modern ES6+ features
- `Dockerfile` - Nginx-based container with security headers and performance optimizations
- `docker-compose.yml` - Development container orchestration
- `lighthouserc.json` - Performance testing configuration

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

- Website uses vanilla technologies - no build frameworks like React/Vue
- All animations use CSS transitions and Intersection Observer
- Form submissions are currently simulated (alerts) - integrate with backend as needed
- Service Worker registration present but sw.js file not included
- Brand colors and content can be customized via CSS custom properties
- Contact information needs to be updated from placeholder values