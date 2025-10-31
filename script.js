document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Simple intersection-based reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  // Animate divider lines on scroll
  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const divider = entry.target;
        setTimeout(() => {
          divider.classList.add('animate');
        }, 100);
        lineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Observe services header divider
  const servicesDivider = document.querySelector('.services-divider');
  if (servicesDivider) {
    lineObserver.observe(servicesDivider);
  }

  // Observe all service dividers
  document.querySelectorAll('.service-divider').forEach((divider) => {
    lineObserver.observe(divider);
  });

  // Observe all process dividers
  document.querySelectorAll('.process-divider').forEach((divider) => {
    lineObserver.observe(divider);
  });

  // Observe about section divider
  const aboutDivider = document.querySelector('.about-divider');
  if (aboutDivider) {
    lineObserver.observe(aboutDivider);
  }

  // Observe work together section divider
  const workTogetherDivider = document.querySelector('.work-together-divider');
  if (workTogetherDivider) {
    lineObserver.observe(workTogetherDivider);
  }
});


