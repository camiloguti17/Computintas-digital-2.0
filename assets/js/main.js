/* Funcionalidad principal del sitio Computintas Digital.
   Maneja menú móvil, año automático y formulario simulado. */

const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navLinks = mobileNav.querySelectorAll('a');

    function closeMenu() {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.getElementById('year').textContent = new Date().getFullYear();

    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const feedback = document.getElementById('submitFeedback');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.8';
      submitBtn.style.cursor = 'wait';
      submitText.textContent = 'Enviando...';

      setTimeout(() => {
        submitText.textContent = 'Enviar mensaje';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
        feedback.classList.add('show');
        form.reset();
      }, 900);
    });

    window.addEventListener('load', function () {
      const htmlWidget = document.querySelector('.elementor-widget-html');
      const widgetContainer = document.querySelector('.elementor-widget-html .elementor-widget-container');
      const footer = document.querySelector('.site-footer');

      if (htmlWidget) {
        htmlWidget.style.width = '100%';
        htmlWidget.style.maxWidth = 'none';
        htmlWidget.style.overflow = 'visible';
      }

      if (widgetContainer) {
        widgetContainer.style.width = '100%';
        widgetContainer.style.maxWidth = 'none';
        widgetContainer.style.overflow = 'visible';
      }

      if (footer) {
        footer.style.width = '100vw';
        footer.style.minWidth = '100vw';
        footer.style.maxWidth = '100vw';
    });

    /* --- Scroll Reveal Animation --- */
    document.addEventListener("DOMContentLoaded", function () {
      // Elementos que queremos animar al hacer scroll
      const elementsToReveal = document.querySelectorAll(
        ".section-header, .service-card, .product-card, .pillar-card, .contact-list, .contact-card"
      );

      // Añadir la clase base a todos los elementos
      elementsToReveal.forEach((el) => {
        el.classList.add("reveal");
      });

      // Configurar el observer
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              // Dejar de observar una vez animado
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.15, // Activar cuando el 15% del elemento sea visible
          rootMargin: "0px 0px -50px 0px" // Pequeño margen para que se vea la animación subir
        }
      );

      // Iniciar observación
      elementsToReveal.forEach((el) => {
        revealObserver.observe(el);
      });
    });
