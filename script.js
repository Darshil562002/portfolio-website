// ============================================
// Theme Toggle
// ============================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-theme');
}

themeToggle?.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// ============================================
// Scroll Progress Bar
// ============================================

const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight);
    scrollProgress.style.transform = `scaleX(${scrolled})`;
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks?.classList.remove('active');
        }
    });
});

// ============================================
// Navigation Scroll Effect
// ============================================

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
});

// ============================================
// Mobile Menu Toggle
// ============================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav?.contains(e.target) && navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
    }
});

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.section-header, .timeline-item, .project-card, .skill-category').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ============================================
// Contact Form Handling (Using Formspree)
// ============================================

const contactForm = document.getElementById('contactForm');
let formSubmitted = false;

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (formSubmitted) return;
        
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            // Using Formspree free tier - you'll need to verify your email first
            // Alternative: Use Web3Forms.com or EmailJS
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
                formSubmitted = true;
                setTimeout(() => { formSubmitted = false; }, 3000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            // Fallback to mailto if fetch fails
            console.log('Using mailto fallback');
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:darshilshethia5602@gmail.com?subject=${subject}&body=${body}`;
            
            showNotification('Opening your email client...', 'info');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// ============================================
// Notification System
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#667eea'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ============================================
// Performance Optimization
// ============================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ============================================
// Form Validation
// ============================================

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const emailInput = document.getElementById('email');
emailInput?.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = '#ef4444';
        showNotification('Please enter a valid email address', 'error');
    } else {
        this.style.borderColor = '';
    }
});

// ============================================
// Console Easter Egg
// ============================================

console.log('%c👋 Hello There!', 'font-size: 24px; font-weight: bold; color: #667eea; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%c💼 Interested in working together?', 'font-size: 16px; color: #9ca3af;');
console.log('%c📧 Email: darshilshethia5602@gmail.com', 'font-size: 14px; color: #667eea;');
console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/darshildipenshethia/', 'font-size: 14px; color: #667eea;');
console.log('%c💻 GitHub: https://github.com/Darshil562002', 'font-size: 14px; color: #667eea;');

// ============================================
// Preloader
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // Trigger initial visibility checks
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});
