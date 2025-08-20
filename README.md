# Awkward Media - SEO Agency Website

A modern, SEO-optimized website for Awkward Media, a Canadian SEO agency. Built with vanilla HTML, CSS, and JavaScript, following modern web standards and ShadCN design principles.

## Features

- 🚀 **Performance Optimized**: Fast loading times with optimized assets
- 📱 **Responsive Design**: Mobile-first approach with beautiful animations
- 🔍 **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- 🎨 **Modern UI**: ShadCN-inspired design system with clean aesthetics
- 🐳 **Docker Ready**: Containerized with multi-stage builds for production
- 🔄 **CI/CD Pipeline**: Automated testing, building, and deployment with GitHub Actions
- ♿ **Accessible**: WCAG compliant with proper semantic markup
- 🔒 **Secure**: Security headers and best practices implemented

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Containerization**: Docker with Nginx Alpine
- **CI/CD**: GitHub Actions
- **Testing**: HTML5 Validator, Lighthouse CI
- **Fonts**: Inter (Google Fonts)

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/awkward-media.git
cd awkward-media
```

2. Open `index.html` in your browser or serve with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### Docker Development

1. Build and run with Docker Compose:
```bash
docker-compose up --build
```

2. Visit `http://localhost:3000`

### Production Deployment

1. Build Docker image:
```bash
docker build -t awkward-media .
```

2. Run container:
```bash
docker run -p 8080:8080 awkward-media
```

## Project Structure

```
awkward-media/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Main stylesheet (ShadCN inspired)
├── js/
│   └── main.js            # JavaScript functionality
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions CI/CD
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose for development
├── .dockerignore         # Docker ignore file
├── lighthouserc.json     # Lighthouse CI configuration
└── README.md             # This file
```

## SEO Features

- ✅ Semantic HTML5 structure
- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph and Twitter Card meta tags
- ✅ JSON-LD structured data for organization
- ✅ Canonical URLs
- ✅ XML sitemap ready
- ✅ robots.txt ready
- ✅ Mobile-first responsive design
- ✅ Fast loading times (<3s FCP)
- ✅ Optimized images with lazy loading
- ✅ HTTPS redirect ready
- ✅ Clean URL structure

## Performance Optimizations

- **CSS**: Minified and optimized with critical CSS inlined
- **JavaScript**: Vanilla JS with efficient event handling
- **Images**: Lazy loading and WebP format ready
- **Fonts**: Preloaded and optimized loading
- **Caching**: Nginx cache headers configured
- **Compression**: Gzip compression enabled
- **CDN Ready**: Static assets optimized for CDN delivery

## CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Testing**: HTML validation and Lighthouse performance tests
2. **Building**: Multi-platform Docker image build
3. **Staging Deployment**: Automatic deployment to staging environment
4. **Production Deployment**: Manual approval required for production
5. **Notifications**: Slack notifications for deployment status

### Required Secrets

Set these secrets in your GitHub repository:

```
STAGING_HOST           # Staging server IP/domain
STAGING_USERNAME       # SSH username for staging
STAGING_SSH_KEY        # SSH private key for staging
PROD_HOST             # Production server IP/domain
PROD_USERNAME         # SSH username for production
PROD_SSH_KEY          # SSH private key for production
SLACK_WEBHOOK         # Slack webhook URL for notifications
```

## Customization

### Updating Content

1. Edit `index.html` for content changes
2. Modify `css/styles.css` for styling updates
3. Update `js/main.js` for functionality changes

### Brand Colors

Update CSS custom properties in `styles.css`:

```css
:root {
  --brand-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --brand-primary: 220.9 39.3% 11%;
}
```

### Contact Information

Update contact details in:
- HTML meta tags and structured data
- Footer contact information
- CTA form submission endpoint

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with ES6 support

## Performance Targets

- **Lighthouse Performance**: >90
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Total Blocking Time**: <200ms
- **Cumulative Layout Shift**: <0.1

## Security Features

- Content Security Policy headers
- X-Frame-Options protection
- XSS protection headers
- No inline JavaScript (except structured data)
- HTTPS enforcement
- Secure cookie settings

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Create an issue on GitHub
- Contact: hello@awkwardmedia.ca
- Website: https://awkwardmedia.ca

---

Built with ❤️ by Awkward Media