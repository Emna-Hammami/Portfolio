// ── SCROLL FADE-UP ANIMATION ─────────────────────────
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up, .timeline-item').forEach(el => observer.observe(el));

// ── TIMELINE LINE DRAW ANIMATION ─────────────────────
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
        e.target.classList.add('animated');
        timelineObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.05 });

const tl = document.getElementById('timeline');
if (tl) timelineObserver.observe(tl);