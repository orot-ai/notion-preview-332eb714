/* ===== Mobile Nav Toggle ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = '☰';
    });
  });
}

/* ===== Scroll Fade-In Animation ===== */
const animEls = document.querySelectorAll('.anim');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
animEls.forEach(el => observer.observe(el));

/* ===== FAQ Accordion ===== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(fi => {
      fi.classList.remove('open');
      fi.querySelector('.faq-a').style.maxHeight = null;
    });

    // Toggle current
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

/* ===== Smooth Scroll for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== Nav background on scroll ===== */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.style.background = 'rgba(10,10,15,.92)';
  } else {
    nav.style.background = 'rgba(10,10,15,.72)';
  }
});