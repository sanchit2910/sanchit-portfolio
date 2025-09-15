// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Initialize theme
  initializeTheme();
  
  // Initialize navigation
  initializeNavigation();
  
  // Initialize mobile menu
  initializeMobileMenu();
  
  // Initialize smooth scrolling
  initializeSmoothScrolling();
  
  // Initialize form handling
  initializeFormHandling();
  
  // Initialize scroll tracking for active sections
  initializeScrollTracking();
});

// Theme Management
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply theme
  applyTheme(savedTheme);
  
  // Theme toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const currentTheme = body.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  const body = document.body;
  
  if (theme === 'dark') {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.removeAttribute('data-theme');
  }
}

// Navigation Management
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Close mobile menu if open
        closeMobileMenu();
        
        // Smooth scroll to section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active link
        updateActiveNavLink(targetId);
      }
    });
  });
}

function updateActiveNavLink(activeSection) {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href').substring(1);
    if (href === activeSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Mobile Menu Management
function initializeMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      const isActive = mobileToggle.classList.contains('active');
      
      if (isActive) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }
}

function openMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
  // Already handled in navigation, but adding global scroll function
  window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
}

// Scroll Tracking for Active Sections
function initializeScrollTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        updateActiveNavLink(sectionId);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Fallback scroll listener for better compatibility
  let ticking = false;
  
  function updateActiveSection() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 100;
        
        let activeSection = 'home';
        
        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection = section.id;
          }
        });
        
        updateActiveNavLink(activeSection);
        ticking = false;
      });
      
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', updateActiveSection);
}

// Form Handling
function initializeFormHandling() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // For static sites using Formspree, we let the form submit naturally
      // But we can add client-side validation here
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      if (!name || !email || !message) {
        e.preventDefault();
        showToast('Missing information', 'Please fill in all required fields.', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        showToast('Invalid email', 'Please enter a valid email address.', 'error');
        return;
      }
      
      // If validation passes, show success message
      // Note: For Formspree, you might want to handle the redirect or success differently
      showToast('Message sent!', 'Thank you for your message. I\'ll get back to you soon.', 'success');
    });
  }
}

// Toast Notification System
function showToast(title, description, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  
  if (!toastContainer) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-description">${description}</div>
  `;
  
  toastContainer.appendChild(toast);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 5000);
  
  // Allow manual dismissal by clicking
  toast.addEventListener('click', () => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  });
}

// Utility Functions
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

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Header background effect on scroll
function initializeHeaderEffects() {
  const header = document.getElementById('header');
  
  if (header) {
    const handleScroll = throttle(() => {
      const scrolled = window.scrollY > 50;
      
      if (scrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
  }
}

// Initialize header effects
document.addEventListener('DOMContentLoaded', initializeHeaderEffects);

// Handle window resize
window.addEventListener('resize', debounce(() => {
  // Close mobile menu on resize to larger screen
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
}, 250));

// Performance optimization: Lazy load images
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Add smooth reveal animations for sections
function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.section');
  
  if ('IntersectionObserver' in window) {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
      animationObserver.observe(el);
    });
  }
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

// Error handling for missing elements
function handleMissingElements() {
  console.warn('Some elements might be missing from the DOM. Please check the HTML structure.');
}

// Global error handler
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
});

// Service Worker registration (for PWA capabilities if needed)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment if you add a service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(registrationError => console.log('SW registration failed'));
  });
}