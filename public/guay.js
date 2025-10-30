// Efectos guay JS: animación de entrada y scroll suave

document.addEventListener('DOMContentLoaded', () => {
  // Fade-in para secciones
  const sections = document.querySelectorAll('main > section');
  sections.forEach((section, i) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    setTimeout(() => {
      section.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1)';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, 200 + i * 150);
  });

  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
