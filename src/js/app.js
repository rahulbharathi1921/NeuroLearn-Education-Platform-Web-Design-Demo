/**
 * NeuroLearn - Main Application Entry Point
 * Enterprise-grade E-Learning Platform
 * 
 * @version 2.0.0
 * @author NeuroLearn Team
 */

// Import all modules
import { initNavigation } from './modules/navigation.js';
import { initCourses } from './modules/courses.js';
import { initDashboard } from './modules/dashboard.js';
import { initGamification } from './modules/gamification.js';
import { initCampus } from './modules/campus.js';
import { initAI } from './modules/ai-engine.js';
import { initSocial } from './modules/social.js';
import { initEnterprise } from './modules/enterprise.js';
import { initPWA } from './modules/pwa.js';
import { initAccessibility } from './modules/accessibility.js';
import { initPerformance } from './modules/performance.js';
import { initTheme } from './modules/theme.js';

// Import utilities
import { debounce, throttle, formatDate, generateId } from './utils/helpers.js';
import { APP_CONFIG, API_ENDPOINTS, GAMIFICATION_CONFIG } from './utils/constants.js';

/**
 * Main Application Class
 */
class NeuroLearnApp {
    constructor() {
        this.isInitialized = false;
        this.modules = {};
        this.config = APP_CONFIG;
    }

    /**
     * Initialize the application
     */
    async init() {
        if (this.isInitialized) {
            console.warn('App already initialized');
            return;
        }

        try {
            console.log('🚀 Initializing NeuroLearn...');

            // Show preloader
            this.showPreloader();

            // Initialize core modules
            await this.initializeModules();

            // Setup global event listeners
            this.setupGlobalEvents();

            // Hide preloader
            this.hidePreloader();

            this.isInitialized = true;
            console.log('✅ NeuroLearn initialized successfully');

            // Dispatch ready event
            window.dispatchEvent(new CustomEvent('neurolearn:ready'));

        } catch (error) {
            console.error('❌ Failed to initialize NeuroLearn:', error);
            this.handleInitError(error);
        }
    }

    /**
     * Initialize all modules
     */
    async initializeModules() {
        const moduleInitializers = [
            { name: 'theme', init: initTheme, critical: true },
            { name: 'navigation', init: initNavigation, critical: true },
            { name: 'accessibility', init: initAccessibility, critical: true },
            { name: 'courses', init: initCourses, critical: false },
            { name: 'dashboard', init: initDashboard, critical: false },
            { name: 'gamification', init: initGamification, critical: false },
            { name: 'campus', init: initCampus, critical: false },
            { name: 'ai', init: initAI, critical: false },
            { name: 'social', init: initSocial, critical: false },
            { name: 'enterprise', init: initEnterprise, critical: false },
            { name: 'pwa', init: initPWA, critical: false },
            { name: 'performance', init: initPerformance, critical: false }
        ];

        for (const module of moduleInitializers) {
            try {
                await module.init();
                this.modules[module.name] = true;
                console.log(`✓ ${module.name} module initialized`);
            } catch (error) {
                console.error(`✗ Failed to initialize ${module.name}:`, error);
                if (module.critical) {
                    throw error;
                }
            }
        }
    }

    /**
     * Setup global event listeners
     */
    setupGlobalEvents() {
        // Window resize handler
        window.addEventListener('resize', throttle(() => {
            this.handleResize();
        }, 250));

        // Scroll handler
        window.addEventListener('scroll', throttle(() => {
            this.handleScroll();
        }, 100));

        // Visibility change handler
        document.addEventListener('visibilitychange', () => {
            this.handleVisibilityChange();
        });

        // Online/Offline handlers
        window.addEventListener('online', () => {
            this.handleOnline();
        });

        window.addEventListener('offline', () => {
            this.handleOffline();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });
    }

    /**
     * Show preloader
     */
    showPreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.remove('hidden');
        }
    }

    /**
     * Hide preloader
     */
    hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        }
    }

    /**
     * Handle window resize
     */
    handleResize() {
        const width = window.innerWidth;
        const isMobile = width < 768;
        const isTablet = width >= 768 && width < 992;

        document.body.classList.toggle('is-mobile', isMobile);
        document.body.classList.toggle('is-tablet', isTablet);
        document.body.classList.toggle('is-desktop', !isMobile && !isTablet);
    }

    /**
     * Handle scroll events
     */
    handleScroll() {
        const scrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');

        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Show/hide back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            backToTop.classList.toggle('visible', scrollY > 500);
        }
    }

    /**
     * Handle visibility change
     */
    handleVisibilityChange() {
        if (document.hidden) {
            // Page is hidden
            console.log('Page hidden');
        } else {
            // Page is visible
            console.log('Page visible');
            // Refresh data if needed
        }
    }

    /**
     * Handle online status
     */
    handleOnline() {
        document.body.classList.remove('is-offline');
        console.log('🌐 Back online');
        
        // Sync pending data
        if (this.modules.pwa) {
            // Trigger background sync
        }
    }

    /**
     * Handle offline status
     */
    handleOffline() {
        document.body.classList.add('is-offline');
        console.log('📴 Gone offline');
    }

    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + K: Open search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.navbar-search input');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // Escape: Close modals/menus
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            const activeMenu = document.querySelector('.mobile-menu.active');

            if (activeModal) {
                activeModal.classList.remove('active');
            }
            if (activeMenu) {
                activeMenu.classList.remove('active');
                document.querySelector('.menu-overlay')?.classList.remove('active');
            }
        }

        // T: Toggle theme
        if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            const activeElement = document.activeElement;
            const isInput = activeElement.tagName === 'INPUT' || 
                           activeElement.tagName === 'TEXTAREA' || 
                           activeElement.isContentEditable;
            
            if (!isInput) {
                window.toggleTheme?.();
            }
        }
    }

    /**
     * Handle initialization error
     */
    handleInitError(error) {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.innerHTML = `
                <div style="text-align: center; color: var(--text-primary);">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--danger); margin-bottom: 1rem;"></i>
                    <h2>Failed to Load</h2>
                    <p style="color: var(--text-secondary);">Please refresh the page to try again.</p>
                    <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 1rem;">
                        <i class="fas fa-refresh"></i> Refresh Page
                    </button>
                </div>
            `;
        }
    }

    /**
     * Get module status
     */
    getModuleStatus(moduleName) {
        return this.modules[moduleName] || false;
    }

    /**
     * Check if app is ready
     */
    isReady() {
        return this.isInitialized;
    }
}

// Create and initialize app instance
const app = new NeuroLearnApp();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => app.init());
} else {
    app.init();
}

// Export for global access
window.NeuroLearn = app;

// Export for module usage
export default app;
export { NeuroLearnApp };