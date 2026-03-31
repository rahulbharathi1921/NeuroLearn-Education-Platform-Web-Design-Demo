/**
 * AI Engine Module
 * Handles AI recommendations and skill analysis
 */

export function initAI() {
    initRecommendationSlider();
    initSkillMeters();
}

function initRecommendationSlider() {
    const track = document.getElementById('recommendationTrack');
    const dots = document.getElementById('recommendationDots');
    const prevBtn = document.getElementById('prevRecommendation');
    const nextBtn = document.getElementById('nextRecommendation');

    if (!track) return;

    let currentSlide = 0;
    const totalSlides = 2;

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        if (dots) {
            dots.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        }
    }

    prevBtn?.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn?.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
}

function initSkillMeters() {
    const skillMeters = document.querySelectorAll('.skill-meter > div > div:last-child');
    
    skillMeters.forEach(meter => {
        const width = meter.style.width;
        meter.style.width = '0%';
        
        setTimeout(() => {
            meter.style.width = width;
        }, 500);
    });
}