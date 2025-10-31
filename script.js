document.addEventListener('DOMContentLoaded', () => {

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

  // Observe all info dividers
  document.querySelectorAll('.info-divider').forEach((divider) => {
    lineObserver.observe(divider);
  });

  // Observe testimonials dividers
  document.querySelectorAll('.testimonials-divider').forEach((divider) => {
    lineObserver.observe(divider);
  });

  // Observe featured work divider
  const featuredWorkDivider = document.querySelector('.featured-work-divider');
  if (featuredWorkDivider) {
    lineObserver.observe(featuredWorkDivider);
  }

  // Observe featured work bottom divider
  const featuredWorkDividerBottom = document.querySelector('.featured-work-divider-bottom');
  if (featuredWorkDividerBottom) {
    lineObserver.observe(featuredWorkDividerBottom);
  }

  // Animate featured work cards on scroll
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 150); // Stagger animation for each card
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Observe all featured work cards
  document.querySelectorAll('.featured-work-card').forEach((card) => {
    cardObserver.observe(card);
  });

  // Testimonial slider functionality
  const testimonials = [
    {
      company: 'Conduit Commerce',
      quote: '"Collaborating with Gaurav has been a great experience. He has a strong grasp of backend systems and always ensures clean, efficient, and maintainable code."',
      name: 'Shrikant Patil',
      title: 'Developer',
      avatar: 'assets/img/Shrikant.jpeg'
    },
    {
      company: 'Conduit Commerce',
      quote: '"Gaurav is a great developer. He is always willing to help and is a quick learner. He is a great team player and is always willing to go the extra mile."',
      name: 'Vishal Gadiya',
      title: 'Developer',
      avatar: 'assets/img/Vishal.jpeg'
    }
  ];

  let currentTestimonialIndex = 0;

  const testimonialCompanyEl = document.getElementById('testimonial-company');
  const testimonialTextEl = document.getElementById('testimonial-text');
  const testimonialNameEl = document.getElementById('testimonial-name');
  const testimonialTitleEl = document.getElementById('testimonial-title');
  const testimonialAvatarEl = document.getElementById('testimonial-avatar');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const dots = document.querySelectorAll('.testimonial-dots .dot');

  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    const elements = [testimonialCompanyEl, testimonialTextEl, testimonialNameEl, testimonialTitleEl, testimonialAvatarEl];
    
    // Fade out
    elements.forEach(el => {
      if (el) el.style.opacity = '0';
    });

    // Update content after brief delay
    setTimeout(() => {
      if (testimonialCompanyEl) {
        testimonialCompanyEl.textContent = testimonial.company || '';
      }
      if (testimonialTextEl) {
        testimonialTextEl.textContent = testimonial.quote;
      }
      if (testimonialNameEl) {
        testimonialNameEl.textContent = testimonial.name;
      }
      if (testimonialTitleEl) {
        testimonialTitleEl.textContent = testimonial.title;
      }
      if (testimonialAvatarEl) {
        testimonialAvatarEl.src = testimonial.avatar;
        testimonialAvatarEl.alt = testimonial.name;
      }

      // Fade in
      elements.forEach(el => {
        if (el) el.style.opacity = '1';
      });

      // Update dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });

      currentTestimonialIndex = index;
    }, 150);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      updateTestimonial(currentTestimonialIndex);
    });
  }

  // Handle dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateTestimonial(index);
    });
  });
});


