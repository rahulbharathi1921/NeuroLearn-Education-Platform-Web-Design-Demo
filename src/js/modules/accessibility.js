/**
 * Accessibility Module
 * Handles accessibility features and controls
 */

export function initAccessibility() {
    initHighContrast();
    initFontSize();
    initReducedMotion();
    initKeyboardNavigation();
    initScreenReader();
}

function initHighContrast() {
    const toggle = document.getElementById('highContrastToggle');
    if (!toggle) return;

    const saved = localStorage.getItem('highContrast') === 'true';
    toggle.checked = saved;
    if (saved) document.body.classList.add('high-contrast');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('high-contrast', toggle.checked);
        localStorage.setItem('highContrast', toggle.checked);
    });
}

function initFontSize() {
    const buttons = document.querySelectorAll('.font-size-btn');
    if (buttons.length === 0) return;

    const saved = localStorage.getItem('fontSize') || 'medium';
    document.body.classList.add(`font-${saved}`);
    
    buttons.forEach(btn => {
        if (btn.getAttribute('data-size') === saved) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            const size = btn.getAttribute('data-size');
            
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
            document.body.classList.add(`font-${size}`);
            
            localStorage.setItem('fontSize', size);
        });
    });
}

function initReducedMotion() {
    const toggle = document.getElementById('reducedMotionToggle');
    if (!toggle) return;

    const saved = localStorage.getItem('reducedMotion') === 'true';
    toggle.checked = saved;
    if (saved) applyReducedMotion(true);

    toggle.addEventListener('change', () => {
        applyReducedMotion(toggle.checked);
        localStorage.setItem('reducedMotion', toggle.checked);
    });
}

function applyReducedMotion(enabled) {
    if (enabled) {
        document.body.classList.add('reduced-motion');
        const style = document.createElement('style');
        style.id = 'reduced-motion-styles';
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    } else {
        document.body.classList.remove('reduced-motion');
        const style = document.getElementById('reduced-motion-styles');
        if (style) style.remove();
    }
}

function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

function initScreenReader() {
    const testBtn = document.getElementById('testScreenReader');
    if (!testBtn) return;

    testBtn.addEventListener('click', () => {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.textContent = 'Screen reader test successful. NeuroLearn accessibility features are working correctly.';
        document.body.appendChild(liveRegion);

        setTimeout(() => {
            liveRegion.remove();
        }, 5000);

        testBtn.innerHTML = '<i class="fas fa-check"></i> Test Complete';
        testBtn.style.background = 'var(--success)';
        
        setTimeout(() => {
            testBtn.innerHTML = '<i class="fas fa-assistive-listening-systems"></i> Test Screen Reader';
            testBtn.style.background = '';
        }, 2000);
    });
}