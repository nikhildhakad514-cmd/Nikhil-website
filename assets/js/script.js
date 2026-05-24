// ─── SCROLL PROGRESS BAR ─────────────────────────────────────────────────────
const progressBar = document.getElementById("progress-bar");

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + "%";
}

// ─── REVEAL ON SCROLL ─────────────────────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

revealEls.forEach((el) => revealObserver.observe(el));

// ─── ACTIVE NAV LINK ──────────────────────────────────────────────────────────
(function setActiveNav() {
  const links = document.querySelectorAll(".nav-links a");
  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
})();

// ─── HAMBURGER MENU ───────────────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.getElementById("nav-overlay");

function openMenu() {
  hamburger.classList.add("open");
  navLinks.classList.add("open");
  navOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  hamburger.classList.remove("open");
  navLinks.classList.remove("open");
  navOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.contains("open") ? closeMenu() : openMenu();
  });
}

if (navOverlay) {
  navOverlay.addEventListener("click", closeMenu);
}

// Close on nav link click
navLinks &&
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

// ─── STICKY MOBILE CTA ────────────────────────────────────────────────────────
const stickyCta = document.querySelector(".sticky-cta");

function updateStickyCta() {
  if (!stickyCta) return;
  const heroHeight = document.querySelector(".hero")?.offsetHeight || 600;
  if (window.scrollY > heroHeight * 0.7) {
    stickyCta.classList.add("visible");
  } else {
    stickyCta.classList.remove("visible");
  }
}

// ─── SCROLL EVENT (throttled) ────────────────────────────────────────────────
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateProgress();
      updateStickyCta();
      ticking = false;
    });
    ticking = true;
  }
});

// Init
updateProgress();
updateStickyCta();
