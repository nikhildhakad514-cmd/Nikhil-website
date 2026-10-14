// Add enhancement only when JavaScript is available; page content stays visible without it.
document.documentElement.classList.add("js-enabled");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const progressBar = document.getElementById("progress-bar");
function updateProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = (height > 0 ? window.scrollY / height * 100 : 0) + "%";
}

const revealEls = document.querySelectorAll(".reveal");
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("active"));
} else {
  const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("active"); revealObserver.unobserve(entry.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => revealObserver.observe(el));
}

(function setActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === current) { link.classList.add("active"); link.setAttribute("aria-current", "page"); }
    else link.removeAttribute("aria-current");
  });
})();

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("primary-navigation");
const navOverlay = document.getElementById("nav-overlay");
function openMenu() {
  if (!hamburger || !navLinks || !navOverlay) return;
  hamburger.classList.add("open"); hamburger.setAttribute("aria-expanded", "true"); hamburger.setAttribute("aria-label", "Close navigation menu");
  navLinks.classList.add("open"); navOverlay.classList.add("open"); navOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; navLinks.querySelector("a")?.focus();
}
function closeMenu(restoreFocus = false) {
  hamburger?.classList.remove("open"); hamburger?.setAttribute("aria-expanded", "false"); hamburger?.setAttribute("aria-label", "Open navigation menu");
  navLinks?.classList.remove("open"); navOverlay?.classList.remove("open"); navOverlay?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; if (restoreFocus) hamburger?.focus();
}
hamburger?.addEventListener("click", () => hamburger.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu());
navOverlay?.addEventListener("click", () => closeMenu(true));
navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMenu()));
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && hamburger?.getAttribute("aria-expanded") === "true") closeMenu(true); });

const stickyCta = document.querySelector(".sticky-cta");
function updateStickyCta() {
  if (!stickyCta) return;
  const heroHeight = document.querySelector(".hero")?.offsetHeight || 600;
  stickyCta.classList.toggle("visible", window.scrollY > heroHeight * 0.7);
}
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) { window.requestAnimationFrame(() => { updateProgress(); updateStickyCta(); ticking = false; }); ticking = true; }
}, { passive: true });
updateProgress(); updateStickyCta();
