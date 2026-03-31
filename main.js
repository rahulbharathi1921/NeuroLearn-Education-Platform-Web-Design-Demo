// ===== MAIN JAVASCRIPT (Phase 4) =====

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Phase 4 features
    initEnterpriseFeatures();
    initPWAFunctionality();
    initAccessibilityFeatures();
    initPerformanceMonitoring();
    initFloatingButtons();
    initInstallPrompt();
    
    // Initialize previous phases
    initPhase1();
    initPhase2();
    initPhase3();
});

// ===== ENTERPRISE FEATURES =====
function initEnterpriseFeatures() {
    // Multi-tenant portal switching
    const tenantBtns = document.querySelectorAll('.tenant-btn');
    const tenantPreview = document.getElementById('tenantPreview');
    
    const tenantData = {
        engineering: {
            title: "Engineering Portal",
            description: "Technical courses, coding challenges, and engineering resources",
            stats: { users: 245, active: 89, courses: 42 },
            features: ["Code Review", "Pair Programming", "Technical Interviews"],
            color: "#00f3ff"
        },
        sales: {
            title: "Sales Portal",
            description: "Sales training, negotiation skills, and CRM mastery",
            stats: { users: 187, active: 67, courses: 28 },
            features: ["Sales Pipeline", "Client Management", "Presentation Skills"],
            color: "#ff00ff"
        },
        hr: {
            title: "HR Portal",
            description: "HR compliance, recruitment, and employee development",
            stats: { users: 156, active: 45, courses: 35 },
            features: ["Recruitment", "Compliance Training", "Performance Reviews"],
            color: "#ff6b00"
        },
        leadership: {
            title: "Leadership Portal",
            description: "Executive education and leadership development",
            stats: { users: 89, active: 32, courses: 18 },
            features: ["Strategic Planning", "Team Management", "Decision Making"],
            color: "#9d00ff"
        }
    };
    
    tenantBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tenant = this.getAttribute('data-tenant');
            
            // Update active button
            tenantBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update preview
            const data = tenantData[tenant];
            if (data) {
                tenantPreview.innerHTML = `
                    <div class="tenant-preview-content">
                        <div class="tenant-header" style="border-left-color: ${data.color}">
                            <h3 style="color: ${data.color}">${data.title}</h3>
                            <p>${data.description}</p>
                        </div>
                        
                        <div class="tenant-stats">
                            <div class="tenant-stat">
                                <div class="stat-value">${data.stats.users}</div>
                                <div class="stat-label">Users</div>
                            </div>
                            <div class="tenant-stat">
                                <div class="stat-value">${data.stats.active}</div>
                                <div class="stat-label">Active Now</div>
                            </div>
                            <div class="tenant-stat">
                                <div class="stat-value">${data.stats.courses}</div>
                                <div class="stat-label">Courses</div>
                            </div>
                        </div>
                        
                        <div class="tenant-features">
                            <h4>Key Features:</h4>
                            <ul>
                                ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="tenant-actions">
                            <button class="btn btn-primary" style="border-color: ${data.color}">
                                <i class="fas fa-external-link-alt"></i> Access Portal
                            </button>
                            <button class="btn btn-secondary">
                                <i class="fas fa-cog"></i> Configure
                            </button>
                        </div>
                    </div>
                `;
            }
        });
    });
    
    // Initialize with engineering view
    if (tenantBtns[0]) tenantBtns[0].click();
    
    // Analytics Charts
    initAnalyticsCharts();
    
    // API Demo
    initAPIDemo();
    
    // Export functionality
    initExportFeatures();
}

function initAnalyticsCharts() {
    // Completion Rate Chart
    const completionCtx = document.getElementById('completionChart')?.getContext('2d');
    if (completionCtx) {
        new Chart(completionCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Completion Rate %',
                    data: [65, 72, 78, 85, 82, 89],
                    backgroundColor: [
                        'rgba(0, 243, 255, 0.7)',
                        'rgba(157, 0, 255, 0.7)',
                        'rgba(255, 0, 255, 0.7)',
                        'rgba(255, 107, 0, 0.7)',
                        'rgba(0, 255, 136, 0.7)',
                        'rgba(255, 193, 7, 0.7)'
                    ],
                    borderColor: [
                        'rgba(0, 243, 255, 1)',
                        'rgba(157, 0, 255, 1)',
                        'rgba(255, 0, 255, 1)',
                        'rgba(255, 107, 0, 1)',
                        'rgba(0, 255, 136, 1)',
                        'rgba(255, 193, 7, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#b0b0d0'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#b0b0d0'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }
    
    // Engagement Heatmap
    const heatmap = document.getElementById('engagementHeatmap');
    if (heatmap) {
        // Generate heatmap visualization
        const days = 7;
        const hours = 12;
        let heatmapHTML = '<div class="heatmap-grid">';
        
        for (let hour = 0; hour < hours; hour++) {
            heatmapHTML += '<div class="heatmap-hour">';
            for (let day = 0; day < days; day++) {
                const level = Math.floor(Math.random() * 5);
                heatmapHTML += `<div class="heatmap-cell" data-level="${level}"></div>`;
            }
            heatmapHTML += '</div>';
        }
        
        heatmapHTML += '</div>';
        heatmap.innerHTML = heatmapHTML;
    }
    
    // Performance Comparison
    const comparison = document.getElementById('performanceComparison');
    if (comparison) {
        const teams = ['Frontend', 'Backend', 'DevOps', 'Data Science', 'QA'];
        const scores = [85, 92, 78, 95, 82];
        
        let comparisonHTML = '<div class="comparison-bars">';
        teams.forEach((team, index) => {
            const score = scores[index];
            comparisonHTML += `
                <div class="comparison-item">
                    <span class="team-name">${team}</span>
                    <div class="team-bar">
                        <div class="bar-fill" style="width: ${score}%"></div>
                    </div>
                    <span class="team-score">${score}%</span>
                </div>
            `;
        });
        comparisonHTML += '</div>';
        comparison.innerHTML = comparisonHTML;
    }
}

function initAPIDemo() {
    const copyBtn = document.getElementById('copyCode');
    const tryBtn = document.getElementById('tryApi');
    const apiResponse = document.getElementById('apiResponse');
    
    // Copy code functionality
    copyBtn?.addEventListener('click', function() {
        const code = document.getElementById('apiCode').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 2000);
        });
    });
    
    // Try API functionality
    tryBtn?.addEventListener('click', function() {
        // Simulate API response
        const response = {
            status: "success",
            data: {
                user: {
                    id: "usr_12345",
                    name: "Alex Johnson",
                    email: "alex@example.com"
                },
                progress: {
                    totalCourses: 8,
                    completedCourses: 5,
                    completionRate: 62.5,
                    totalHours: 42,
                    currentStreak: 14,
                    skillLevels: {
                        python: "Advanced",
                        javascript: "Intermediate",
                        machine_learning: "Beginner",
                        web_development: "Advanced"
                    }
                },
                recommendations: [
                    {
                        courseId: "crs_ml_101",
                        title: "Advanced Machine Learning",
                        matchScore: 92,
                        reason: "Based on your Python skills"
                    },
                    {
                        courseId: "crs_web_201",
                        title: "React Mastery",
                        matchScore: 85,
                        reason: "Complement your web development skills"
                    }
                ],
                analytics: {
                    weeklyEngagement: 12.5,
                    avgCompletionTime: 3.2,
                    peerComparison: 78
                }
            },
            timestamp: new Date().toISOString(),
            rateLimit: {
                remaining: 498,
                limit: 500,
                reset: "2024-01-01T00:00:00Z"
            }
        };
        
        apiResponse.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
        
        // Show success animation
        this.innerHTML = '<i class="fas fa-check"></i> Success!';
        this.style.background = 'var(--success)';
        this.style.borderColor = 'var(--success)';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-play"></i> Try API';
            this.style.background = '';
            this.style.borderColor = '';
        }, 2000);
    });
    
    // API badge hover effects
    const apiBadges = document.querySelectorAll('.api-badge');
    apiBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            const apiType = this.getAttribute('data-api');
            const apiInfo = {
                rest: "RESTful API with comprehensive endpoints",
                graphql: "GraphQL API for efficient data fetching",
                webhooks: "Real-time webhooks for event notifications",
                sso: "Single Sign-On with SAML/OAuth support"
            };
            
            this.setAttribute('title', apiInfo[apiType] || '');
        });
    });
}

function initExportFeatures() {
    const exportPDF = document.getElementById('exportPDF');
    const exportCSV = document.getElementById('exportCSV');
    const exportReport = document.getElementById('exportReport');
    
    exportPDF?.addEventListener('click', function() {
        showExportNotification('PDF', 'Your analytics report is being generated as PDF...');
    });
    
    exportCSV?.addEventListener('click', function() {
        showExportNotification('CSV', 'Exporting data as CSV file...');
    });
    
    exportReport?.addEventListener('click', function() {
        showExportNotification('Full Report', 'Generating comprehensive analytics report...');
        // Simulate report generation
        setTimeout(() => {
            showExportComplete('Report generated successfully! Download will start automatically.');
        }, 3000);
    });
}

function showExportNotification(type, message) {
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'export-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-file-export"></i>
            <div>
                <h4>Exporting ${type}</h4>
                <p>${message}</p>
            </div>
            <div class="loader-small"></div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showExportComplete(message) {
    const notification = document.createElement('div');
    notification.className = 'export-notification success';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <div>
                <h4>Export Complete</h4>
                <p>${message}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// ===== PWA FUNCTIONALITY =====
function initPWAFunctionality() {
    // Update PWA stats
    updatePWAStats();
    
    // Test notification
    const testNotification = document.getElementById('testNotification');
    testNotification?.addEventListener('click', function() {
        showTestNotification();
    });
    
    // Close notification
    const closeNotification = document.getElementById('closeNotification');
    closeNotification?.addEventListener('click', function() {
        document.getElementById('notificationTest').style.display = 'none';
    });
    
    // Install status
    updateInstallStatus();
    
    // Background sync simulation
    simulateBackgroundSync();
    
    // Cache management
    initCacheManagement();
}

function updatePWAStats() {
    // Simulate cache size calculation
    const cacheSize = document.getElementById('cacheSize');
    if (cacheSize) {
        const size = 2.4 + Math.random() * 1.2;
        cacheSize.textContent = `${size.toFixed(1)} MB`;
    }
    
    // Simulate offline time
    const offlineTime = document.getElementById('offlineTime');
    if (offlineTime) {
        const hours = Math.floor(Math.random() * 24);
        offlineTime.textContent = `${hours}h`;
    }
    
    // PWA score (simulated Lighthouse score)
    const pwaScore = document.getElementById('pwaScore');
    if (pwaScore) {
        const score = 92 + Math.floor(Math.random() * 8);
        pwaScore.textContent = score;
    }
    
    // Load time
    const loadTime = document.getElementById('loadTime');
    if (loadTime) {
        const time = 0.8 + Math.random() * 0.4;
        loadTime.textContent = `${time.toFixed(1)}s`;
    }
}

function showTestNotification() {
    const notification = document.getElementById('notificationTest');
    if (notification) {
        notification.style.display = 'block';
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 10000);
    }
}

function updateInstallStatus() {
    const installStatus = document.getElementById('installStatus');
    const installStatusText = document.getElementById('installStatusText');
    
    if (window.matchMedia('(display-mode: standalone)').matches) {
        // App is installed
        if (installStatus) installStatus.classList.add('installed');
        if (installStatusText) installStatusText.textContent = 'Installed';
    } else {
        // Check if installable
        window.addEventListener('beforeinstallprompt', () => {
            if (installStatus) installStatus.classList.add('installable');
            if (installStatusText) installStatusText.textContent = 'Installable';
        });
    }
}

function simulateBackgroundSync() {
    // Simulate background sync status
    const syncInterval = setInterval(() => {
        const syncingElements = document.querySelectorAll('.status-indicator.syncing');
        syncingElements.forEach(el => {
            el.style.animationPlayState = Math.random() > 0.5 ? 'running' : 'paused';
        });
    }, 3000);
}

function initCacheManagement() {
    const clearCacheBtn = document.getElementById('clearCache');
    clearCacheBtn?.addEventListener('click', function() {
        if ('caches' in window) {
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => caches.delete(cacheName))
                );
            }).then(() => {
                showCacheClearedNotification();
                updatePWAStats(); // Refresh stats
            });
        } else {
            alert('Cache API not supported in this browser');
        }
    });
}

function showCacheClearedNotification() {
    const notification = document.createElement('div');
    notification.className = 'cache-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-trash-restore"></i>
            <div>
                <h4>Cache Cleared</h4>
                <p>All cached data has been cleared successfully.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ===== ACCESSIBILITY FEATURES =====
function initAccessibilityFeatures() {
    // High contrast toggle
    const highContrastToggle = document.getElementById('highContrastToggle');
    highContrastToggle?.addEventListener('change', function() {
        document.body.classList.toggle('high-contrast', this.checked);
        localStorage.setItem('highContrast', this.checked);
    });
    
    // Load saved preference
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    if (savedHighContrast && highContrastToggle) {
        highContrastToggle.checked = true;
        document.body.classList.add('high-contrast');
    }
    
    // Font size controls
    const fontSizeBtns = document.querySelectorAll('.font-size-btn');
    fontSizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const size = this.getAttribute('data-size');
            
            // Update active button
            fontSizeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Apply font size
            document.body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
            document.body.classList.add(`font-${size}`);
            
            // Save preference
            localStorage.setItem('fontSize', size);
        });
    });
    
    // Load saved font size
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    document.body.classList.add(`font-${savedFontSize}`);
    fontSizeBtns.forEach(btn => {
        if (btn.getAttribute('data-size') === savedFontSize) {
            btn.classList.add('active');
        }
    });
    
    // Reduced motion toggle
    const reducedMotionToggle = document.getElementById('reducedMotionToggle');
    reducedMotionToggle?.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('reduced-motion');
            // Disable animations
            const style = document.createElement('style');
            style.id = 'reduced-motion-styles';
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.001ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.001ms !important;
                }
            `;
            document.head.appendChild(style);
        } else {
            document.body.classList.remove('reduced-motion');
            const style = document.getElementById('reduced-motion-styles');
            if (style) style.remove();
        }
        localStorage.setItem('reducedMotion', this.checked);
    });
    
    // Load saved preference
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    if (savedReducedMotion && reducedMotionToggle) {
        reducedMotionToggle.checked = true;
        reducedMotionToggle.dispatchEvent(new Event('change'));
    }
    
    // Screen reader test
    const testScreenReader = document.getElementById('testScreenReader');
    testScreenReader?.addEventListener('click', function() {
        const message = document.getElementById('screenReaderMessage');
        if (message) {
            // Create aria live region for screen readers
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            liveRegion.textContent = 'Screen reader test successful. NeuroLearn accessibility features are working correctly.';
            document.body.appendChild(liveRegion);
            
            // Remove after a moment
            setTimeout(() => {
                liveRegion.remove();
            }, 5000);
            
            // Visual feedback
            this.innerHTML = '<i class="fas fa-check"></i> Test Complete';
            this.style.background = 'var(--success)';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-assistive-listening-systems"></i> Test Screen Reader';
                this.style.background = '';
            }, 2000);
        }
    });
    
    // Enhanced keyboard navigation
    initKeyboardNavigation();
}

function initKeyboardNavigation() {
    // Add tabindex to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    interactiveElements.forEach(el => {
        if (!el.hasAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }
    });
    
    // Add focus styles
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Skip to main content link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===== PERFORMANCE MONITORING =====
function initPerformanceMonitoring() {
    // Network information
    updateNetworkInfo();
    
    // Performance metrics
    monitorPerformance();
    
    // Resource loading simulation
    simulateResourceLoading();
}

function updateNetworkInfo() {
    const connectionType = document.getElementById('connectionType');
    const networkLatency = document.getElementById('networkLatency');
    const networkBandwidth = document.getElementById('networkBandwidth');
    const dataSaved = document.getElementById('dataSaved');
    
    if (navigator.connection) {
        const connection = navigator.connection;
        
        if (connectionType) {
            connectionType.textContent = connection.effectiveType || 'Unknown';
        }
        
        if (networkLatency) {
            const latency = connection.rtt || 45;
            networkLatency.textContent = `${latency}ms`;
        }
        
        if (networkBandwidth) {
            const bandwidth = connection.downlink || 12;
            networkBandwidth.textContent = `${bandwidth} Mbps`;
        }
    }
    
    if (dataSaved) {
        const saved = 2.4 + Math.random() * 1.6;
        dataSaved.textContent = `${saved.toFixed(1)} MB`;
    }
    
    // Update periodically
    setInterval(updateNetworkInfo, 10000);
}

function monitorPerformance() {
    // Use Performance API if available
    if ('performance' in window) {
        const perf = window.performance;
        
        // Measure load time
        const timing = perf.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        
        const loadTimeElement = document.getElementById('loadTime');
        if (loadTimeElement && loadTime > 0) {
            loadTimeElement.textContent = `${(loadTime / 1000).toFixed(1)}s`;
        }
        
        // Monitor memory usage (if supported)
        if (performance.memory) {
            const memory = performance.memory;
            const usedJSHeapSize = (memory.usedJSHeapSize / 1024 / 1024).toFixed(1);
            console.log(`Memory usage: ${usedJSHeapSize} MB`);
        }
        
        // Long tasks monitoring
        if (PerformanceObserver) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.duration > 50) {
                        console.warn('Long task detected:', entry);
                    }
                }
            });
            
            observer.observe({ entryTypes: ['longtask'] });
        }
    }
}

function simulateResourceLoading() {
    // Simulate resource loading times
    const resources = document.querySelectorAll('.resource-load');
    resources.forEach(resource => {
        const time = 0.1 + Math.random() * 0.3;
        resource.textContent = `${time.toFixed(1)}s`;
    });
}

// ===== FLOATING ACTION BUTTONS =====
function initFloatingButtons() {
    const mainFab = document.getElementById('mainFab');
    const fabMenu = document.querySelector('.fab-menu');
    
    mainFab?.addEventListener('click', function() {
        fabMenu.classList.toggle('open');
        this.innerHTML = fabMenu.classList.contains('open') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-plus"></i>';
    });
    
    // Individual FAB actions
    document.getElementById('chatFab')?.addEventListener('click', function() {
        alert('Live chat feature would open here');
        fabMenu.classList.remove('open');
        mainFab.innerHTML = '<i class="fas fa-plus"></i>';
    });
    
    document.getElementById('supportFab')?.addEventListener('click', function() {
        alert('Support center would open here');
        fabMenu.classList.remove('open');
        mainFab.innerHTML = '<i class="fas fa-plus"></i>';
    });
    
    document.getElementById('shareFab')?.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'NeuroLearn',
                text: 'Check out this amazing e-learning platform!',
                url: window.location.href
            });
        } else {
            alert('Share link: ' + window.location.href);
        }
        fabMenu.classList.remove('open');
        mainFab.innerHTML = '<i class="fas fa-plus"></i>';
    });
    
    document.getElementById('feedbackFab')?.addEventListener('click', function() {
        alert('Feedback form would open here');
        fabMenu.classList.remove('open');
        mainFab.innerHTML = '<i class="fas fa-plus"></i>';
    });
    
    // Auto-hide FABs when scrolling
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const fabContainer = document.querySelector('.fab-container');
        
        if (fabContainer) {
            if (st > lastScrollTop && st > 100) {
                // Scrolling down
                fabContainer.style.transform = 'translateY(100px)';
                fabMenu.classList.remove('open');
                if (mainFab) mainFab.innerHTML = '<i class="fas fa-plus"></i>';
            } else {
                // Scrolling up
                fabContainer.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollTop = st <= 0 ? 0 : st;
    });
}

// ===== PWA INSTALL PROMPT =====
function initInstallPrompt() {
    const pwaPrompt = document.getElementById('pwaPrompt');
    const pwaInstall = document.getElementById('pwaInstall');
    const pwaLater = document.getElementById('pwaLater');
    let deferredPrompt;
    
    // Show install prompt based on conditions
    function showInstallPrompt() {
        // Don't show if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) return;
        
        // Don't show if recently dismissed
        const lastPrompt = localStorage.getItem('pwaPromptDismissed');
        if (lastPrompt && Date.now() - lastPrompt < 7 * 24 * 60 * 60 * 1000) return;
        
        // Show after delay
        setTimeout(() => {
            if (pwaPrompt) pwaPrompt.style.display = 'block';
        }, 10000);
    }
    
    // Handle beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallPrompt();
    });
    
    // Install button
    pwaInstall?.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User installed the PWA');
                }
                deferredPrompt = null;
                if (pwaPrompt) pwaPrompt.style.display = 'none';
            });
        }
    });
    
    // Later button
    pwaLater?.addEventListener('click', () => {
        if (pwaPrompt) pwaPrompt.style.display = 'none';
        localStorage.setItem('pwaPromptDismissed', Date.now());
    });
    
    // Check if already installed
    window.addEventListener('appinstalled', () => {
        console.log('PWA installed');
        if (pwaPrompt) pwaPrompt.style.display = 'none';
        
        // Update UI
        const installBtn = document.getElementById('installBtn');
        if (installBtn) installBtn.style.display = 'none';
        
        const pwaBadge = document.getElementById('pwaBadge');
        if (pwaBadge) pwaBadge.style.display = 'inline-flex';
    });
}

// ===== OFFLINE FUNCTIONALITY =====
function initOfflineFunctionality() {
    // Check online status
    function updateOnlineStatus() {
        const indicator = document.getElementById('offlineIndicator');
        if (!navigator.onLine) {
            // Show offline indicator
            if (indicator) indicator.style.display = 'flex';
            
            // Enable offline features
            enableOfflineMode();
        } else {
            // Hide offline indicator
            if (indicator) indicator.style.display = 'none';
            
            // Sync any pending data
            syncPendingData();
        }
    }
    
    // Enable offline mode
    function enableOfflineMode() {
        // Show cached content
        // Enable offline-specific features
        console.log('Offline mode enabled');
    }
    
    // Sync pending data
    function syncPendingData() {
        if ('serviceWorker' in navigator && 'SyncManager' in window) {
            navigator.serviceWorker.ready.then(registration => {
                registration.sync.register('sync-progress');
            });
        }
    }
    
    // Event listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Initial check
    updateOnlineStatus();
}

// Initialize offline functionality
initOfflineFunctionality();

// ===== INITIALIZE PREVIOUS PHASES =====
function initPhase1() {
    // Phase 1 initialization code
    console.log('Phase 1 initialized');
}

function initPhase2() {
    // Phase 2 initialization code
    console.log('Phase 2 initialized');
}

function initPhase3() {
    // Phase 3 initialization code
    console.log('Phase 3 initialized');
}