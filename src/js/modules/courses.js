/**
 * Courses Module
 * Handles course catalog, filtering, and search
 */

export function initCourses() {
    initCourseFilters();
    initCourseSearch();
    initLoadMore();
}

function initCourseFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            courseCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.classList.add('animate-fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initCourseSearch() {
    const searchInput = document.getElementById('courseSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const courseCards = document.querySelectorAll('.course-card');

        courseCards.forEach(card => {
            const title = card.querySelector('.course-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.course-description')?.textContent.toLowerCase() || '';
            
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMore');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        
        setTimeout(() => {
            loadMoreBtn.innerHTML = 'Load More Courses';
        }, 1000);
    });
}