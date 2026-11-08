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


// A bounded parallax on the home hero, with one update per animation frame.
const homeHero = document.querySelector(".home-hero");
if (homeHero) {
  const depthPreference = window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
  let depthFrame = 0;
  const updateDepth = () => {
    depthFrame = 0;
    if (!depthPreference.matches) return;
    const bounds = homeHero.getBoundingClientRect();
    if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
    const distance = Math.max(0, -bounds.top);
    homeHero.style.setProperty("--portrait-depth", `${Math.min(44, distance * 0.13)}px`);
    homeHero.style.setProperty("--copy-depth", `${-Math.min(16, distance * 0.045)}px`);
  };
  const scheduleDepth = () => {
    if (depthPreference.matches && !depthFrame) depthFrame = window.requestAnimationFrame(updateDepth);
  };
  const syncDepth = () => {
    if (depthPreference.matches) {
      window.addEventListener("scroll", scheduleDepth, { passive: true });
      window.addEventListener("resize", scheduleDepth, { passive: true });
      scheduleDepth();
    } else {
      window.removeEventListener("scroll", scheduleDepth);
      window.removeEventListener("resize", scheduleDepth);
      window.cancelAnimationFrame(depthFrame);
      depthFrame = 0;
      homeHero.style.removeProperty("--portrait-depth");
      homeHero.style.removeProperty("--copy-depth");
    }
  };
  depthPreference.addEventListener("change", syncDepth);
  syncDepth();
}
