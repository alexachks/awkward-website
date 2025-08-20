// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });
    });
    
    // CTA form functionality
    const ctaForm = document.querySelector('.cta-form');
    const ctaInput = document.querySelector('.cta-input');
    const ctaButton = document.querySelector('.cta-form .btn');
    
    if (ctaForm && ctaInput && ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const url = ctaInput.value.trim();
            
            if (!url) {
                alert('Please enter your website URL');
                ctaInput.focus();
                return;
            }
            
            // Basic URL validation
            try {
                new URL(url.startsWith('http') ? url : 'https://' + url);
            } catch {
                alert('Please enter a valid website URL');
                ctaInput.focus();
                return;
            }
            
            // Simulate form submission
            ctaButton.textContent = 'Processing...';
            ctaButton.disabled = true;
            
            setTimeout(() => {
                alert('Thank you! We will send your SEO audit report within 24 hours.');
                ctaInput.value = '';
                ctaButton.textContent = 'Get Free Audit';
                ctaButton.disabled = false;
            }, 2000);
        });
        
        // Enter key support
        ctaInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                ctaButton.click();
            }
        });
    }
    
    // Animated counters for stats
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number, .metric-value');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isMultiplier = target.includes('x');
            const hasPlus = target.includes('+');
            
            let numValue = 0;
            if (isPercentage) {
                numValue = parseInt(target.replace(/[^0-9]/g, ''));
            } else if (isMultiplier) {
                numValue = parseInt(target.replace(/[^0-9]/g, ''));
            } else if (hasPlus) {
                numValue = parseInt(target.replace(/[^0-9]/g, ''));
            } else if (target.includes('TOP')) {
                return; // Skip TOP 3 animation
            } else if (target.includes('mo')) {
                numValue = parseInt(target.replace(/[^0-9]/g, ''));
            } else {
                numValue = parseInt(target.replace(/[^0-9]/g, ''));
            }
            
            if (isNaN(numValue)) return;
            
            const increment = numValue / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= numValue) {
                    current = numValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(current);
                if (isPercentage) {
                    counter.textContent = `+${displayValue}%`;
                } else if (isMultiplier) {
                    counter.textContent = `${displayValue}x`;
                } else if (hasPlus) {
                    counter.textContent = `+${displayValue}%`;
                } else if (target.includes('mo')) {
                    counter.textContent = `${displayValue} mo`;
                } else {
                    counter.textContent = `${displayValue}+`;
                }
            }, 50);
        });
    };
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hero-stats') || 
                    entry.target.classList.contains('metrics-dashboard')) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
                
                // Add animation classes
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero-stats, .metrics-dashboard, .service-card, .benefit');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Header scroll effect
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'hsl(var(--background) / 0.95)';
            header.style.backdropFilter = 'blur(12px)';
        } else {
            header.style.backgroundColor = 'hsl(var(--background) / 0.95)';
            header.style.backdropFilter = 'blur(8px)';
        }
        
        lastScrollY = currentScrollY;
    });
});

// Performance optimization: Lazy loading for images (if added later)
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}