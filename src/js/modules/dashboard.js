/**
 * Dashboard Module
 * Handles learning dashboard, progress tracking, and stats
 */

export function initDashboard() {
    initProgressCircle();
    initLeaderboard();
    initHeatmap();
    initStatCounters();
}

function initProgressCircle() {
    const progressFill = document.getElementById('progressFill');
    const progressValue = document.getElementById('progressValue');
    
    if (!progressFill || !progressValue) return;

    const targetProgress = 75;
    let currentProgress = 0;
    
    const interval = setInterval(() => {
        currentProgress++;
        const rotation = (currentProgress / 100) * 360;
        progressFill.style.transform = `rotate(${rotation}deg)`;
        progressValue.textContent = `${currentProgress}%`;
        
        if (currentProgress >= targetProgress) {
            clearInterval(interval);
        }
    }, 20);
}

function initLeaderboard() {
    const leaderboardList = document.getElementById('leaderboardList');
    if (!leaderboardList) return;

    const leaderboardData = [
        { name: "Alex Johnson", xp: 3420, avatar: "AJ" },
        { name: "Sam Rivera", xp: 2980, avatar: "SR" },
        { name: "Taylor Kim", xp: 2750, avatar: "TK" },
        { name: "Jordan Lee", xp: 2540, avatar: "JL" },
        { name: "You", xp: 1560, avatar: "ME", isCurrentUser: true }
    ];

    leaderboardData.forEach((user, index) => {
        const item = document.createElement('div');
        item.className = `leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}`;
        item.innerHTML = `
            <div class="leaderboard-rank">${index + 1}</div>
            <div class="leaderboard-avatar">${user.avatar}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${user.name}</div>
                <div class="leaderboard-xp">${user.xp.toLocaleString()} XP</div>
            </div>
        `;
        leaderboardList.appendChild(item);
    });
}

function initHeatmap() {
    const heatmapGrid = document.getElementById('heatmapGrid');
    if (!heatmapGrid) return;

    for (let i = 0; i < 90; i++) {
        const day = document.createElement('div');
        day.className = 'heatmap-day';
        const level = Math.floor(Math.random() * 5);
        day.setAttribute('data-level', level);
        heatmapGrid.appendChild(day);
    }
}

function initStatCounters() {
    const statValues = document.querySelectorAll('.stat-card-value');
    
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count') || stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 30);
    });
}