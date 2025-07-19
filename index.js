// Fade-in on scroll
    document.addEventListener("DOMContentLoaded", () => {
      const fadeEls = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      fadeEls.forEach(el => observer.observe(el));
    });
     // Simple fade-in on scroll
    document.addEventListener("DOMContentLoaded", () => {
      const fadeEls = document.querySelectorAll(".fade-in");
      const options = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      }, options);
      fadeEls.forEach((el) => observer.observe(el));
    });
      AOS.init();

    // Accordion toggle logic
    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const panel = btn.nextElementSibling;
        if (panel.classList.contains('open')) {
          panel.classList.remove('open');
        } else {
          // Close other open panels (optional)
          document.querySelectorAll('.accordion-panel.open').forEach(openPanel => {
            openPanel.classList.remove('open');
            openPanel.previousElementSibling.classList.remove('active');
          });
          panel.classList.add('open');
        }
      });
    });
    // search button
   document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-outline-success');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = 'Feature coming soon!';
        message.style.display = 'block';

        // Hide message after 3 seconds
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    });
});
