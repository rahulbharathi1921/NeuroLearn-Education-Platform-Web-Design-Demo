/**
 * Social Module
 * Handles social learning features, discussions, and groups
 */

export function initSocial() {
    initSocialTabs();
    initPostForm();
    initGroups();
    initQuestions();
    initActivityFeed();
}

function initSocialTabs() {
    const tabs = document.querySelectorAll('.social-tab');
    const contents = document.querySelectorAll('.social-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}Content`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

function initPostForm() {
    const postBtn = document.querySelector('.post-form .btn');
    const postInput = document.querySelector('.post-input');

    postBtn?.addEventListener('click', () => {
        const content = postInput?.value.trim();
        if (content) {
            addPost(content);
            postInput.value = '';
        }
    });
}

function addPost(content) {
    const feedPosts = document.getElementById('feedPosts');
    if (!feedPosts) return;

    const post = document.createElement('div');
    post.className = 'post-item animate-fade-in';
    post.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">ME</div>
            <div class="post-user">
                <div class="post-name">You</div>
                <div class="post-time">Just now</div>
            </div>
        </div>
        <div class="post-content">${content}</div>
        <div class="post-engagement">
            <button class="engagement-btn"><i class="fas fa-thumbs-up"></i> 0</button>
            <button class="engagement-btn"><i class="fas fa-comment"></i> 0</button>
            <button class="engagement-btn"><i class="fas fa-share"></i> 0</button>
        </div>
    `;

    feedPosts.insertBefore(post, feedPosts.firstChild);
}

function initGroups() {
    const joinButtons = document.querySelectorAll('.group-card .btn');

    joinButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.innerHTML = '<i class="fas fa-check"></i> Joined';
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
            btn.disabled = true;
        });
    });
}

function initQuestions() {
    const voteButtons = document.querySelectorAll('.vote-btn');

    voteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const count = btn.parentElement.querySelector('.vote-count');
            if (count) {
                let value = parseInt(count.textContent);
                count.textContent = btn.classList.contains('active') ? value + 1 : value - 1;
            }
        });
    });
}

function initActivityFeed() {
    const activityFeed = document.getElementById('activityFeed');
    if (!activityFeed) return;

    setInterval(() => {
        const activities = [
            { user: 'Alex', action: 'completed a course', icon: 'fa-graduation-cap' },
            { user: 'Sam', action: 'earned a badge', icon: 'fa-award' },
            { user: 'Taylor', action: 'joined a group', icon: 'fa-users' }
        ];

        const random = activities[Math.floor(Math.random() * activities.length)];
        const item = document.createElement('div');
        item.className = 'activity-item animate-slide-in';
        item.innerHTML = `
            <div class="activity-icon"><i class="fas ${random.icon}"></i></div>
            <div class="activity-content">
                <div class="activity-text"><span class="activity-user">${random.user}</span> ${random.action}</div>
                <div class="activity-time">Just now</div>
            </div>
        `;

        activityFeed.insertBefore(item, activityFeed.firstChild);

        if (activityFeed.children.length > 10) {
            activityFeed.removeChild(activityFeed.lastChild);
        }
    }, 8000);
}