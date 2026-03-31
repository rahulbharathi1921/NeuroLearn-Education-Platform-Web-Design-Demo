/**
 * Theme Module
 * Handles dark/light theme switching
 */

const THEME_KEY = 'neurolearn-theme';

export function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(savedTheme);
    
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    window.toggleTheme = toggleTheme;
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.content = theme === 'dark' ? '#0a0a14' : '#ffffff';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
}

export function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
}

export function setTheme(theme) {
    if (theme === 'dark' || theme === 'light') {
        applyTheme(theme);
    }
}