const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(open));
    hamburger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menú");
      hamburger.focus();
    }
  });
}


document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
if (hamburger && navMenu) {
  navMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menú");
    }
  });
  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menú");
    }
  });
}


// Animate only intersecting content; the page stays visible without JavaScript.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!motionPreference.matches && "IntersectionObserver" in window && "animate" in Element.prototype) {
  const activeAnimations = new Set();
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      revealObserver.unobserve(entry.target);
      if (motionPreference.matches) return;
      const animation = entry.target.animate(
        [{ opacity: 0.65, translate: "0 16px" }, { opacity: 1, translate: "0 0" }],
        { duration: 600, easing: "cubic-bezier(.22, 1, .36, 1)" }
      );
      activeAnimations.add(animation);
      animation.finished.then(() => activeAnimations.delete(animation), () => activeAnimations.delete(animation));
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".hero-copy, .hero-portrait, .section-heading, .feature-card, .expertise-list article, .reading-link, .blog-card, .training-section, .cv-content section, .profile-card, .contact-form").forEach((element) => revealObserver.observe(element));
  motionPreference.addEventListener("change", () => {
    if (motionPreference.matches) {
      revealObserver.disconnect();
      activeAnimations.forEach((animation) => animation.cancel());
      activeAnimations.clear();
    }
  });
}
