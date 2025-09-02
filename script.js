// DOM Elements
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const filterBtns = document.querySelectorAll('.filter-btn');
const carouselModal = document.getElementById('carouselModal');
const closeCarousel = document.querySelector('.close-carousel');

// Portfolio 3D Carousel State
let currentSlide = 0;
let totalSlides = 0;
let isCarouselOpen = false;

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('show');
    }

    // Update active nav link
    updateActiveNavLink();
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Hero CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.textContent.includes('Portfolio')) {
            e.preventDefault();
            document.querySelector('#portfolio').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (button.textContent.includes('Touch')) {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Certificate cards
    document.querySelectorAll('.certificate-card').forEach(card => {
        observer.observe(card);
    });

    // Portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        observer.observe(item);
    });

    // Other animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
});

// Portfolio filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    });
});

// Initialize portfolio items as visible
portfolioItems.forEach(item => {
    item.classList.add('show');
});

// Project data with multiple images and individual descriptions
const projectData = {
    1: {
        title: "Tech Startup Logo Design",
        description: "Complete brand identity design for a cutting-edge tech startup. This project included logo design, color palette development, typography selection, and brand guidelines that reflect innovation and professionalism.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1400&h=900&fit=crop",
                description: "Primary logo design with modern typography and geometric elements that represent innovation and technology."
            },
            {
                url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&h=900&fit=crop",
                description: "Brand color palette exploration featuring vibrant gradients and professional color combinations."
            },
            {
                url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1400&h=900&fit=crop",
                description: "Business card and stationery design showcasing the brand identity across different mediums."
            },
            {
                url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&h=900&fit=crop",
                description: "Digital brand guidelines document outlining proper logo usage, spacing, and brand applications."
            }
        ]
    },
    2: {
        title: "E-commerce Banner Campaign",
        description: "Dynamic banner design series for a major e-commerce platform's seasonal campaign. The designs feature bold typography and strategic color usage that increased conversion rates.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&h=900&fit=crop",
                description: "Hero banner design with compelling call-to-action and seasonal promotional messaging."
            },
            {
                url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop",
                description: "Product showcase banner highlighting key features and benefits with dynamic layouts."
            },
            {
                url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=900&fit=crop",
                description: "Mobile-optimized banner variations ensuring consistent brand experience across devices."
            },
            {
                url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1400&h=900&fit=crop",
                description: "Social media banner adaptations for various platforms maintaining visual consistency."
            }
        ]
    },
    3: {
        title: "Premium Event Flyer",
        description: "Elegant flyer design for an exclusive networking event. The design combines sophisticated typography with strategic use of whitespace and premium materials.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&h=900&fit=crop",
                description: "Main event flyer featuring elegant typography and sophisticated color palette."
            },
            {
                url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&h=900&fit=crop",
                description: "Digital invitation design with interactive elements and RSVP functionality."
            },
            {
                url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1400&h=900&fit=crop",
                description: "Print materials including tickets, programs, and promotional collateral."
            },
            {
                url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&h=900&fit=crop",
                description: "Event branding guidelines and signage design for venue decoration."
            }
        ]
    },
    4: {
        title: "Product Mockup Collection",
        description: "Comprehensive 3D mockup collection showcasing product designs in realistic environments with accurate lighting, materials, and environmental context.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop",
                description: "Photorealistic product mockup with studio lighting and professional photography setup."
            },
            {
                url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=900&fit=crop",
                description: "Environmental mockup showing product in real-world context and usage scenarios."
            },
            {
                url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop",
                description: "Multiple angle views and color variations demonstrating product versatility."
            },
            {
                url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&h=900&fit=crop",
                description: "Packaging design mockup with unboxing experience and brand presentation."
            }
        ]
    },
    5: {
        title: "Restaurant Brand Identity",
        description: "Complete branding solution for an upscale restaurant including logo design, menu layouts, signage, and digital assets that create a cohesive dining experience.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1400&h=900&fit=crop",
                description: "Restaurant logo design with elegant typography reflecting culinary excellence."
            },
            {
                url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1400&h=900&fit=crop",
                description: "Menu design layout with sophisticated typography and appetizing food photography."
            },
            {
                url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&h=900&fit=crop",
                description: "Interior signage and wayfinding system creating immersive dining atmosphere."
            },
            {
                url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop",
                description: "Digital presence including website design and social media brand templates."
            }
        ]
    },
    6: {
        title: "Social Media Campaign Assets",
        description: "Comprehensive social media asset package including post templates, story designs, and promotional graphics that maintain brand consistency across platforms.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop",
                description: "Instagram post templates with engaging layouts and brand-consistent styling."
            },
            {
                url: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&h=900&fit=crop",
                description: "Story design templates with interactive elements and call-to-action buttons."
            },
            {
                url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=900&fit=crop",
                description: "Facebook and LinkedIn promotional graphics optimized for each platform."
            },
            {
                url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1400&h=900&fit=crop",
                description: "Animated social media content and video templates for dynamic engagement."
            }
        ]
    },
    7: {
        title: "Fashion Brand Identity",
        description: "Luxury fashion brand identity featuring elegant typography, sophisticated color palette, and premium packaging design for high-end market positioning.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&h=900&fit=crop",
                description: "Luxury brand logo with minimalist design and premium typography selection."
            },
            {
                url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1400&h=900&fit=crop",
                description: "High-end packaging design with embossed details and premium materials."
            },
            {
                url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop",
                description: "Fashion lookbook layout with editorial photography and brand storytelling."
            },
            {
                url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1400&h=900&fit=crop",
                description: "Retail environment design and brand experience across physical touchpoints."
            }
        ]
    },
    8: {
        title: "Mobile App Design",
        description: "Modern mobile app interface design with intuitive user experience, contemporary visual elements, and seamless navigation flow.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&h=900&fit=crop",
                description: "App interface design with clean layouts and intuitive navigation patterns."
            },
            {
                url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1400&h=900&fit=crop",
                description: "User experience flow diagrams and wireframe development process."
            },
            {
                url: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&h=900&fit=crop",
                description: "Interactive prototype showcasing app functionality and user interactions."
            },
            {
                url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop",
                description: "App store presentation materials and marketing assets for launch campaign."
            }
        ]
    }
};

// 3D Carousel Class
class Portfolio3DCarousel {
    constructor() {
        this.modal = document.getElementById('carouselModal');
        this.closeBtn = document.querySelector('.close-carousel');
        this.track = null;
        this.indicators = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.title = null;
        this.description = null;
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.isAnimating = false;

        this.init();
    }

    init() {
        // Portfolio item click handlers
        portfolioItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const projectId = item.getAttribute('data-project');
                const project = projectData[projectId];

                if (project) {
                    this.openCarousel(project);
                }
            });
        });

        // Close carousel
        this.closeBtn?.addEventListener('click', () => this.closeCarousel());

        // Close when clicking outside
        this.modal?.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeCarousel();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (isCarouselOpen) {
                switch (e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.prevSlide();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.nextSlide();
                        break;
                    case 'Escape':
                        this.closeCarousel();
                        break;
                }
            }
        });
    }

    openCarousel(project) {
        if (!this.modal) return;

        // Create carousel HTML
        this.modal.innerHTML = `
            <div class="carousel-container">
                <button class="close-carousel">&times;</button>
                <div class="carousel-wrapper">
                    <div class="carousel-track" id="carouselTrack">
                        ${project.images.map((img, index) => `
                            <div class="carousel-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <img src="${img.url}" alt="Project Image ${index + 1}">
                                <div class="slide-overlay">
                                    <p class="slide-description">${img.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="carousel-controls">
                    <button class="carousel-btn prev-btn" id="prevBtn">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="carousel-indicators" id="carouselIndicators">
                        ${project.images.map((_, index) => `
                            <div class="carousel-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></div>
                        `).join('')}
                    </div>
                    <button class="carousel-btn next-btn" id="nextBtn">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="carousel-info">
                    <h3 id="carouselTitle">${project.title}</h3>
                    <p id="carouselDescription" class="current-description">${project.images[0].description}</p>
                </div>
            </div>
        `;

        // Get new elements
        this.track = document.getElementById('carouselTrack');
        this.indicators = document.getElementById('carouselIndicators');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.title = document.getElementById('carouselTitle');
        this.description = document.getElementById('carouselDescription');
        this.currentProject = project;

        // Set initial state
        this.currentSlide = 0;
        this.totalSlides = project.images.length;

        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        // Indicator clicks
        this.indicators?.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch support
        this.addTouchSupport();

        // Show modal
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        isCarouselOpen = true;

        // Update positions
        setTimeout(() => this.updateSlidePositions(), 100);

        // Re-bind close button
        document.querySelector('.close-carousel')?.addEventListener('click', () => this.closeCarousel());
    }

    closeCarousel() {
        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            isCarouselOpen = false;
        }
    }

    updateSlidePositions() {
        if (!this.track) return;

        const slides = this.track.querySelectorAll('.carousel-slide');
        const indicators = this.indicators?.querySelectorAll('.carousel-indicator');

        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next', 'hidden');

            const position = this.getSlidePosition(index);
            slide.classList.add(position);
        });

        // Update indicators
        indicators?.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });

        // Update description for current slide
        if (this.currentProject && this.description && this.currentProject.images[this.currentSlide]) {
            this.description.textContent = this.currentProject.images[this.currentSlide].description;
        }
    }

    getSlidePosition(index) {
        const diff = index - this.currentSlide;

        if (diff === 0) return 'active';
        if (diff === 1 || diff === -(this.totalSlides - 1)) return 'next';
        if (diff === -1 || diff === this.totalSlides - 1) return 'prev';
        if (diff === 2 || diff === -(this.totalSlides - 2)) return 'far-next';
        if (diff === -2 || diff === this.totalSlides - 2) return 'far-prev';

        return 'hidden';
    }

    nextSlide() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlidePositions();

        setTimeout(() => {
            this.isAnimating = false;
        }, 1000);
    }

    prevSlide() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlidePositions();

        setTimeout(() => {
            this.isAnimating = false;
        }, 1000);
    }

    goToSlide(index) {
        if (this.isAnimating || index === this.currentSlide) return;

        this.isAnimating = true;
        this.currentSlide = index;
        this.updateSlidePositions();

        setTimeout(() => {
            this.isAnimating = false;
        }, 1000);
    }

    addTouchSupport() {
        if (!this.track) return;

        let startX = 0;
        let startY = 0;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.track.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            // Only trigger if horizontal swipe is more significant
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.prevSlide();
                } else {
                    this.nextSlide();
                }
            }
        });
    }
}

// Initialize 3D Carousel
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio3DCarousel = new Portfolio3DCarousel();
});

// Back to top button
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// WhatsApp contact functionality
document.querySelector('.whatsapp-btn')?.addEventListener('click', (e) => {
    // Analytics or tracking can be added here
    showNotification('Opening WhatsApp...', 'success');
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Notification styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });

    // Type-specific styles
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #00d4ff, #00a8cc)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ff6b35, #cc5429)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #666, #444)';
    }

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Typing animation for hero subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;

    setTimeout(() => {
        typeWriter(subtitle, originalText, 30);
    }, 2000);
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.remove('loading');
    });

    if (!img.complete) {
        img.classList.add('loading');
    }
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

console.log('🎨 Premium Portfolio Website Loaded Successfully!');
console.log('✨ 3D Carousel ready with new orange theme!');
console.log('🚀 Click any portfolio item to see the 3D carousel!');

class Carousel3D {
    constructor() {
        this.carousel = document.getElementById('carousel3d');
        this.cards = document.querySelectorAll('.certificate-card-3d');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicators = document.querySelectorAll('.indicator');
        this.currentIndex = 0;
        this.totalCards = this.cards.length;
        this.isAnimating = false;

        this.init();
    }

    init() {
        if (!this.carousel || this.cards.length === 0) return;

        // Set initial positions
        this.updateCarousel();

        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.prev());
        this.nextBtn?.addEventListener('click', () => this.next());

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto-rotate every 5 seconds
        this.startAutoRotate();

        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoRotate());
        this.carousel.addEventListener('mouseleave', () => this.startAutoRotate());

        // Touch/swipe support
        this.addTouchSupport();
    }

    updateCarousel() {
        if (this.isAnimating) return;

        this.cards.forEach((card, index) => {
            card.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');

            const position = this.getCardPosition(index);
            card.classList.add(position);
        });

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    getCardPosition(index) {
        const diff = index - this.currentIndex;

        if (diff === 0) return 'active';
        if (diff === 1 || diff === -(this.totalCards - 1)) return 'next';
        if (diff === -1 || diff === this.totalCards - 1) return 'prev';
        if (diff === 2 || diff === -(this.totalCards - 2)) return 'far-next';
        if (diff === -2 || diff === this.totalCards - 2) return 'far-prev';

        return 'hidden';
    }

    next() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.currentIndex = (this.currentIndex + 1) % this.totalCards;
        this.updateCarousel();

        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }

    prev() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.currentIndex = (this.currentIndex - 1 + this.totalCards) % this.totalCards;
        this.updateCarousel();

        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }

    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;

        this.isAnimating = true;
        this.currentIndex = index;
        this.updateCarousel();

        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }

    startAutoRotate() {
        this.stopAutoRotate();
        this.autoRotateInterval = setInterval(() => {
            this.next();
        }, 5000);
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }

    addTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            // Only trigger if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    this.prev();
                } else {
                    this.next();
                }
            }
        });
    }
}

// Initialize 3D Carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for all elements to be rendered
    setTimeout(() => {
        window.carousel3D = new Carousel3D();
    }, 100);
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (!window.carousel3D) return;

    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            window.carousel3D.prev();
            break;
        case 'ArrowRight':
            e.preventDefault();
            window.carousel3D.next();
            break;
    }
});

console.log('🎠 3D Carousel functionality loaded!');