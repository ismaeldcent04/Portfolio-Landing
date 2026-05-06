// CURSOR
const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 5 + "px";
  cursor.style.top = my - 5 + "px";
});

function animateCursor() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cursorRing.style.left = rx - 18 + "px";
  cursorRing.style.top = ry - 18 + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorRing.style.width = "56px";
    cursorRing.style.height = "56px";
    cursorRing.style.opacity = "0.8";
  });
  el.addEventListener("mouseleave", () => {
    cursorRing.style.width = "36px";
    cursorRing.style.height = "36px";
    cursorRing.style.opacity = "0.5";
  });
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// NAV SCROLL
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.15 },
);

reveals.forEach((el) => observer.observe(el));

// SKILL BARS
const skillCards = document.querySelectorAll(".skill-card");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.3 },
);

skillCards.forEach((card) => skillObserver.observe(card));
