/**
 * Enterprise Module
 * Handles multi-tenant portals and enterprise features
 */

export function initEnterprise() {
    initTenantSwitcher();
    initAnalytics();
    initExportFeatures();
}

function initTenantSwitcher() {
    const tenantBtns = document.querySelectorAll('.tenant-btn');
    const tenantPreview = document.getElementById('tenantPreview');

    const tenantData = {
        engineering: {
            title: 'Engineering Portal',
            description: 'Technical courses, coding challenges, and engineering resources',
            stats: { users: 245, active: 89, courses: 42 },
            features: ['Code Review', 'Pair Programming', 'Technical Interviews']
        },
        sales: {
            title: 'Sales Portal',
            description: 'Sales training, negotiation skills, and CRM mastery',
            stats: { users: 187, active: 67, courses: 28 },
            features: ['Sales Pipeline', 'Client Management', 'Presentation Skills']
        },
        hr: {
            title: 'HR Portal',
            description: 'HR compliance, recruitment, and employee development',
            stats: { users: 156, active: 45, courses: 35 },
            features: ['Recruitment', 'Compliance Training', 'Performance Reviews']
        },
        leadership: {
            title: 'Leadership Portal',
            description: 'Executive education and leadership development',
            stats: { users: 89, active: 32, courses: 18 },
            features: ['Strategic Planning', 'Team Management', 'Decision Making']
        }
    };

    tenantBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tenant = btn.getAttribute('data-tenant');

            tenantBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const data = tenantData[tenant];
            if (data && tenantPreview) {
                tenantPreview.innerHTML = `
                    <div class="animate-fade-in">
                        <h3 style="color: var(--accent-blue); margin-bottom: var(--space-md);">${data.title}</h3>
                        <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">${data.description}</p>
                        <div style="display: flex; gap: var(--space-lg); margin-bottom: var(--space-lg);">
                            <div><strong>${data.stats.users}</strong> Users</div>
                            <div><strong>${data.stats.active}</strong> Active</div>
                            <div><strong>${data.stats.courses}</strong> Courses</div>
                        </div>
                        <h4 style="margin-bottom: var(--space-sm);">Key Features:</h4>
                        <ul style="color: var(--text-secondary);">
                            ${data.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
        });
    });
}

function initAnalytics() {
    const completionChart = document.getElementById('completionChart');
    if (!completionChart) return;

    const ctx = completionChart.getContext('2d');
    
    ctx.fillStyle = '#111120';
    ctx.fillRect(0, 0, completionChart.width, completionChart.height);

    const data = [65, 72, 78, 85, 82, 89];
    const barWidth = 40;
    const gap = 20;
    const startX = 50;
    const maxHeight = 150;

    data.forEach((value, index) => {
        const height = (value / 100) * maxHeight;
        const x = startX + index * (barWidth + gap);
        const y = completionChart.height - height - 30;

        const gradient = ctx.createLinearGradient(x, y, x, y + height);
        gradient.addColorStop(0, '#00f3ff');
        gradient.addColorStop(1, '#9d00ff');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, height);

        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(`${value}%`, x + barWidth / 2, y - 10);
    });
}

function initExportFeatures() {
    const exportPDF = document.getElementById('exportPDF');
    const exportCSV = document.getElementById('exportCSV');
    const exportReport = document.getElementById('exportReport');

    exportPDF?.addEventListener('click', () => {
        alert('PDF export feature - Would generate analytics report');
    });

    exportCSV?.addEventListener('click', () => {
        alert('CSV export feature - Would export data as CSV');
    });

    exportReport?.addEventListener('click', () => {
        alert('Full report generation - Would create comprehensive report');
    });
}