document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const customCursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Intersection Observer for Fade-In Effects
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(section => observer.observe(section));
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
