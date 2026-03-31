/**
 * NeuroLearn Service Worker
 * Handles offline functionality and caching
 */

const CACHE_NAME = 'neurolearn-v2.0.0';
const STATIC_CACHE = 'neurolearn-static-v2.0.0';
const DYNAMIC_CACHE = 'neurolearn-dynamic-v2.0.0';

// Static assets to cache
const STATIC_ASSETS = [
    '/',
    '/src/index.html',
    '/src/css/styles.css',
    '/src/css/variables.css',
    '/src/css/base.css',
    '/src/css/components.css',
    '/src/css/layout.css',
    '/src/css/sections.css',
    '/src/css/animations.css',
    '/src/css/responsive.css',
    '/src/js/app.js',
    '/src/js/modules/theme.js',
    '/src/js/modules/navigation.js',
    '/src/js/modules/courses.js',
    '/src/js/modules/dashboard.js',
    '/src/js/modules/gamification.js',
    '/src/js/modules/campus.js',
    '/src/js/modules/ai-engine.js',
    '/src/js/modules/social.js',
    '/src/js/modules/enterprise.js',
    '/src/js/modules/pwa.js',
    '/src/js/modules/accessibility.js',
    '/src/js/modules/performance.js',
    '/src/js/utils/helpers.js',
    '/src/js/utils/constants.js',
    '/public/manifest.json'
];

// External resources to cache
const EXTERNAL_ASSETS = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('[ServiceWorker] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[ServiceWorker] Static assets cached');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[ServiceWorker] Failed to cache static assets:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => {
                            return cacheName.startsWith('neurolearn-') && 
                                   cacheName !== STATIC_CACHE && 
                                   cacheName !== DYNAMIC_CACHE;
                        })
                        .map((cacheName) => {
                            console.log('[ServiceWorker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        })
                );
            })
            .then(() => {
                console.log('[ServiceWorker] Activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip chrome-extension and other non-http(s) requests
    if (!url.protocol.startsWith('http')) {
        return;
    }

    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Return cached response
                    return cachedResponse;
                }

                // Not in cache, fetch from network
                return fetch(request)
                    .then((networkResponse) => {
                        // Check if valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Clone the response
                        const responseToCache = networkResponse.clone();

                        // Add to dynamic cache
                        caches.open(DYNAMIC_CACHE)
                            .then((cache) => {
                                cache.put(request, responseToCache);
                            });

                        return networkResponse;
                    })
                    .catch((error) => {
                        console.error('[ServiceWorker] Fetch failed:', error);
                        
                        // Return offline page for navigation requests
                        if (request.mode === 'navigate') {
                            return caches.match('/src/index.html');
                        }
                        
                        return new Response('Offline', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

// Background sync
self.addEventListener('sync', (event) => {
    console.log('[ServiceWorker] Sync event:', event.tag);
    
    if (event.tag === 'sync-progress') {
        event.waitUntil(syncProgress());
    }
});

// Push notifications
self.addEventListener('push', (event) => {
    console.log('[ServiceWorker] Push received');
    
    const options = {
        body: event.data ? event.data.text() : 'New update available!',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧠</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧠</text></svg>',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'explore', title: 'View' },
            { action: 'close', title: 'Close' }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('NeuroLearn', options)
    );
});

// Notification click
self.addEventListener('notificationclick', (event) => {
    console.log('[ServiceWorker] Notification clicked');
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/src/index.html')
        );
    }
});

// Message handler
self.addEventListener('message', (event) => {
    console.log('[ServiceWorker] Message received:', event.data);
    
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
    
    if (event.data.action === 'clearCache') {
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => caches.delete(cacheName))
                );
            })
        );
    }
});

// Sync progress data
async function syncProgress() {
    try {
        // In a real app, this would sync with a backend
        console.log('[ServiceWorker] Syncing progress...');
        return Promise.resolve();
    } catch (error) {
        console.error('[ServiceWorker] Sync failed:', error);
        throw error;
    }
}

// Periodic background sync
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-content') {
        event.waitUntil(updateContent());
    }
});

async function updateContent() {
    try {
        console.log('[ServiceWorker] Updating content...');
        // Fetch and cache new content
        return Promise.resolve();
    } catch (error) {
        console.error('[ServiceWorker] Update failed:', error);
        throw error;
    }
}