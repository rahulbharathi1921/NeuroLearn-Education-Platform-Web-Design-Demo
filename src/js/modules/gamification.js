/**
 * Gamification Module
 * Handles XP, achievements, and daily challenges
 */

export function initGamification() {
    initXpAnimation();
    initAchievements();
    initChallenges();
    initSimulateUnlock();
}

function initXpAnimation() {
    const xpValue = document.getElementById('xpValue');
    const xpProgress = document.getElementById('xpProgress');
    const levelValue = document.getElementById('levelValue');

    if (!xpValue) return;

    const targetXp = 1560;
    let currentXp = 0;
    const xpPerLevel = 250;

    const interval = setInterval(() => {
        currentXp += 15;
        if (currentXp > targetXp) currentXp = targetXp;

        xpValue.textContent = currentXp.toLocaleString();
        
        const level = Math.floor(currentXp / xpPerLevel) + 1;
        if (levelValue) levelValue.textContent = level;

        const xpInLevel = currentXp % xpPerLevel;
        const progressPercent = (xpInLevel / xpPerLevel) * 100;
        if (xpProgress) xpProgress.style.width = `${progressPercent}%`;

        if (currentXp >= targetXp) {
            clearInterval(interval);
        }
    }, 20);
}

function initAchievements() {
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    achievementItems.forEach(item => {
        item.addEventListener('click', () => {
            const achievementId = item.getAttribute('data-achievement');
            const isLocked = item.classList.contains('locked');
            
            if (isLocked) {
                alert('Complete the requirements to unlock this achievement!');
            } else {
                unlockAchievement(achievementId);
            }
        });
    });
}

function initChallenges() {
    const challengeItems = document.querySelectorAll('.challenge-item');
    
    challengeItems.forEach(item => {
        const progressFill = item.querySelector('.challenge-progress-fill');
        if (progressFill) {
            const width = progressFill.style.width;
            progressFill.style.width = '0%';
            
            setTimeout(() => {
                progressFill.style.width = width;
            }, 500);
        }
    });
}

function initSimulateUnlock() {
    const simulateBtn = document.getElementById('simulateUnlock');
    if (!simulateBtn) return;

    simulateBtn.addEventListener('click', () => {
        const achievements = ['first-course', 'week-streak', 'month-streak', 'speed-learner'];
        const randomAchievement = achievements[Math.floor(Math.random() * achievements.length)];
        unlockAchievement(randomAchievement);
    });
}

function unlockAchievement(achievementId) {
    const modal = document.getElementById('achievementUnlock');
    if (!modal) return;

    const achievements = {
        'first-course': { title: 'First Course Completed!', desc: 'You completed your first course', xp: '+100 XP' },
        'week-streak': { title: 'Week Warrior!', desc: '7-day learning streak', xp: '+250 XP' },
        'month-streak': { title: 'Month Master!', desc: '30-day learning streak', xp: '+1000 XP' },
        'speed-learner': { title: 'Speed Learner!', desc: 'Completed course in 3 days', xp: '+500 XP' }
    };

    const achievement = achievements[achievementId];
    if (!achievement) return;

    document.getElementById('unlockTitle').textContent = achievement.title;
    document.getElementById('unlockDesc').textContent = achievement.desc;
    document.getElementById('unlockXp').textContent = achievement.xp;

    modal.classList.add('active');

    setTimeout(() => {
        modal.classList.remove('active');
    }, 3000);
}