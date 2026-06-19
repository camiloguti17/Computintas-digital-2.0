/* ============================================================
   components.js — Carga el header y footer compartidos
   en todas las páginas internas de Computintas Digital.
   ============================================================ */

(function () {
  const BASE = '/_partials/';

  async function loadPartial(selector, file) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(BASE + file);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      el.innerHTML = await res.text();
      // Ejecutar scripts si los hubiera dentro del partial
      el.querySelectorAll('script').forEach(s => {
        const ns = document.createElement('script');
        ns.textContent = s.textContent;
        document.body.appendChild(ns);
      });
    } catch (e) {
      console.warn('[Computintas] No se pudo cargar', file, e);
    }
  }

  async function init() {
    await Promise.all([
      loadPartial('#site-header-placeholder', 'header.html'),
      loadPartial('#site-footer-placeholder', 'footer.html'),
    ]);

    // Año automático en el footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Menú móvil
    const toggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (toggle && mobileNav) {
      toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        toggle.classList.toggle('active', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
      mobileNav.querySelectorAll('a').forEach(link =>
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          mobileNav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        })
      );
    }

    // Marcar enlace activo en el nav
    const currentPath = window.location.pathname.replace(/\/$/, '');
    document.querySelectorAll('.desktop-nav a, .mobile-links a:not(.btn)').forEach(link => {
      const href = link.getAttribute('href').replace(/\/$/, '');
      if (href === currentPath || (currentPath === '' && href === '/')) {
        link.classList.add('active');
      }
    });

    // Scroll reveal para elementos de la página
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    if (revealEls.length > 0) {
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            o.unobserve(entry.target);
          }
        });
      }, { root: null, threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => obs.observe(el));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
