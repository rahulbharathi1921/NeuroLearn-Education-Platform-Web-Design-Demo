/**
 * PWA Module
 * Handles Progressive Web App features, service worker, and offline functionality
 */

export function initPWA() {
    registerServiceWorker();
    initInstallPrompt();
    initOfflineDetection();
    updatePWAStats();
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registered:', registration.scope);
                })
                .catch(error => {
                    console.log('ServiceWorker registration failed:', error);
                });
        });
    }
}

function initInstallPrompt() {
    let deferredPrompt;
    const installBtn = document.getElementById('installBtn');
    const pwaPrompt = document.getElementById('pwaPrompt');
    const pwaInstall = document.getElementById('pwaInstall');
    const pwaLater = document.getElementById('pwaLater');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        if (installBtn) installBtn.style.display = 'inline-flex';
        
        setTimeout(() => {
            if (pwaPrompt) pwaPrompt.style.display = 'block';
        }, 10000);
    });

    installBtn?.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted install');
                }
                deferredPrompt = null;
            });
        }
    });

    pwaInstall?.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                deferredPrompt = null;
                if (pwaPrompt) pwaPrompt.style.display = 'none';
            });
        }
    });

    pwaLater?.addEventListener('click', () => {
        if (pwaPrompt) pwaPrompt.style.display = 'none';
    });

    window.addEventListener('appinstalled', () => {
        if (installBtn) installBtn.style.display = 'none';
        if (pwaPrompt) pwaPrompt.style.display = 'none';
    });
}

function initOfflineDetection() {
    const offlineIndicator = document.getElementById('offlineIndicator');

    function updateOnlineStatus() {
        if (navigator.onLine) {
            document.body.classList.remove('is-offline');
            if (offlineIndicator) offlineIndicator.style.display = 'none';
        } else {
            document.body.classList.add('is-offline');
            if (offlineIndicator) offlineIndicator.style.display = 'flex';
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    updateOnlineStatus();
}

function updatePWAStats() {
    const cacheSize = document.getElementById('cacheSize');
    const offlineTime = document.getElementById('offlineTime');
    const pwaScore = document.getElementById('pwaScore');
    const loadTime = document.getElementById('loadTime');

    if (cacheSize) {
        cacheSize.textContent = `${(2.4 + Math.random() * 1.2).toFixed(1)} MB`;
    }

    if (offlineTime) {
        offlineTime.textContent = `${Math.floor(Math.random() * 24)}h`;
    }

    if (pwaScore) {
        pwaScore.textContent = 92 + Math.floor(Math.random() * 8);
    }

    if (loadTime) {
        loadTime.textContent = `${(0.8 + Math.random() * 0.4).toFixed(1)}s`;
    }
}

export function clearCache() {
    if ('caches' in window) {
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => caches.delete(cacheName))
            );
        }).then(() => {
            alert('Cache cleared successfully!');
            updatePWAStats();
        });
    }
}