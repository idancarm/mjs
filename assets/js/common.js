// Common JavaScript utilities and shared functionality

// Modal System
class ModalManager {
    constructor() {
        this.modal = null;
        this.modalTitle = null;
        this.modalSubtitle = null;
        this.modalText = null;
        this.closeBtn = null;
        this.isInitialized = false;
    }

    init() {
        if (this.isInitialized) return;
        
        this.modal = document.getElementById('modal');
        this.modalTitle = document.getElementById('modal-title');
        this.modalSubtitle = document.getElementById('modal-subtitle');
        this.modalText = document.getElementById('modal-text');
        this.closeBtn = document.querySelector('.modal__close-btn');

        if (this.modal && this.closeBtn) {
            this.setupEventListeners();
            this.isInitialized = true;
        }
    }

    setupEventListeners() {
        // Close button
        this.closeBtn.addEventListener('click', () => this.close());

        // Click outside to close
        this.modal.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.close();
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.modal.classList.contains('is-active')) {
                this.close();
            }
        });
    }

    open(content) {
        if (!this.isInitialized) return;
        
        if (this.modalTitle) this.modalTitle.textContent = content.title || '';
        if (this.modalSubtitle) this.modalSubtitle.textContent = content.subtitle || '';
        if (this.modalText) this.modalText.innerHTML = content.text || '';
        
        this.modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.isInitialized) return;
        
        this.modal.classList.remove('is-active');
        document.body.style.overflow = 'auto';
    }
}

// Animation utilities
const AnimationUtils = {
    // Intersection Observer for scroll-triggered animations
    createScrollAnimation(selector, options = {}) {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;

        const defaultOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observerOptions = { ...defaultOptions, ...options };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        elements.forEach(element => observer.observe(element));
        return observer;
    },

    // Staggered animation sequence
    createStaggeredAnimation(containerSelector, itemSelector, delay = 400) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const items = container.querySelectorAll(itemSelector);
        if (!items.length) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * delay);
                });
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        observer.observe(container);
        return observer;
    }
};

// Card flip functionality
const CardFlip = {
    init(containerSelector = '.gallery-container') {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.addEventListener('click', (event) => {
            const card = event.target.closest('.mj-card');
            if (card) {
                card.classList.toggle('is-flipped');
            }
        });
    }
};

// Utility functions
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Simple template engine for replacing placeholders
    template(str, data) {
        return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return data[key] || match;
        });
    },

    // Format currency for pricing
    formatCurrency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    }
};

// Initialize common functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize modal manager if modal exists on page
    if (document.getElementById('modal')) {
        window.modalManager = new ModalManager();
        window.modalManager.init();
    }

    // Initialize card flip functionality if gallery exists
    if (document.querySelector('#gallery-container')) {
        CardFlip.init('#gallery-container');
    }
});

// Export for module usage (if build system supports it)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ModalManager,
        AnimationUtils,
        CardFlip,
        Utils
    };
}