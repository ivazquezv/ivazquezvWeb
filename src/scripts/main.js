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
