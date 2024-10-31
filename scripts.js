document.addEventListener('DOMContentLoaded', () => {
    // Cursor personalizado
    const customCursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    // Animación de entrada para secciones
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Hover en especialidades y proyectos
    const specialties = document.querySelectorAll('.specialty, .project');
    specialties.forEach(item => {
        item.addEventListener('mouseover', () => {
            customCursor.style.transform = 'scale(1.5)';
        });
        item.addEventListener('mouseout', () => {
            customCursor.style.transform = 'scale(1)';
        });
    });
});
