// LANGUAGE TOGGLE
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'hero-tag': 'Available for work',
    'hero-role': 'A passionate web developer from Santo Domingo, building modern digital experiences with clean code and thoughtful design.',
    'hero-cta-contact': 'Get in touch',
    'hero-cta-projects': 'View work',
    'hero-scroll': 'Scroll',
    'about-tag': 'About Me',
    'about-title': 'Crafting the web,<br>one line at a time.',
    'about-bio': "Hi, I'm Ismael David Dicent Lahoz — a 21-year-old software engineering student from Santo Domingo, Dominican Republic. I'm passionate about the entire world of web development and constantly learning through courses and college.",
    'about-label-name': 'Full Name',
    'about-label-age': 'Age',
    'about-val-age': '21 years old',
    'about-label-location': 'Location',
    'about-label-status': 'Status',
    'about-val-status': 'Student & Developer',
    'about-label-hobbies': 'Hobbies',
    'about-val-hobbies': 'Reading, Gym, Sports',
    'about-label-focus': 'Focus',
    'about-val-focus': 'Web Development',
    'skills-tag': 'Skills',
    'skills-title': 'My Skill-Set',
    'skills-desc': 'Everything I know, learned through Udemy courses and college — constantly evolving.',
    'projects-tag': 'Work',
    'projects-title': 'My Projects',
    'proj1-desc': 'Search any food recipe using a public API. Built entirely with Vanilla JavaScript — fast, clean, and functional.',
    'proj2-desc': 'A full-stack calendar web app where you can schedule and manage your events. Built with React and Node.js.',
    'proj3-desc': 'Search any kind of GIF via a public API. A React-powered application with a clean and intuitive interface.',
    'proj-view': 'View Project',
    'contact-tag': 'Contact',
    'contact-title': 'Let\'s work<br><span class="outline-text">together.</span>',
    'contact-subtitle': "Have a project in mind or just want to chat? Feel free to reach out — I'm always open to new opportunities.",
    'stat-projects': 'Projects',
    'stat-tech': 'Technologies',
    'stat-years': 'Years Learning',
    'footer-copy': '© 2025 Ismael Dicent. All rights reserved.',
  },
  es: {
    'nav-home': 'Inicio',
    'nav-skills': 'Habilidades',
    'nav-projects': 'Proyectos',
    'nav-about': 'Sobre Mí',
    'nav-contact': 'Contacto',
    'hero-tag': 'Disponible para trabajar',
    'hero-role': 'Un apasionado desarrollador web de Santo Domingo, construyendo experiencias digitales modernas con código limpio y diseño cuidadoso.',
    'hero-cta-contact': 'Contáctame',
    'hero-cta-projects': 'Ver proyectos',
    'hero-scroll': 'Deslizar',
    'about-tag': 'Sobre Mí',
    'about-title': 'Construyendo la web,<br>una línea a la vez.',
    'about-bio': 'Hola, soy Ismael David Dicent Lahoz — un estudiante de ingeniería de software de 21 años de Santo Domingo, República Dominicana. Me apasiona el mundo del desarrollo web y aprendo constantemente a través de cursos y la universidad.',
    'about-label-name': 'Nombre Completo',
    'about-label-age': 'Edad',
    'about-val-age': '21 años',
    'about-label-location': 'Ubicación',
    'about-label-status': 'Estado',
    'about-val-status': 'Estudiante y Desarrollador',
    'about-label-hobbies': 'Pasatiempos',
    'about-val-hobbies': 'Lectura, Gimnasio, Deportes',
    'about-label-focus': 'Enfoque',
    'about-val-focus': 'Desarrollo Web',
    'skills-tag': 'Habilidades',
    'skills-title': 'Mis Habilidades',
    'skills-desc': 'Todo lo que sé, aprendido a través de cursos de Udemy y la universidad — en constante evolución.',
    'projects-tag': 'Trabajo',
    'projects-title': 'Mis Proyectos',
    'proj1-desc': 'Busca cualquier receta de comida usando una API pública. Construido con Vanilla JavaScript — rápido, limpio y funcional.',
    'proj2-desc': 'Una aplicación web de calendario full-stack donde puedes programar y gestionar tus eventos. Construido con React y Node.js.',
    'proj3-desc': 'Busca cualquier tipo de GIF a través de una API pública. Una aplicación React con una interfaz limpia e intuitiva.',
    'proj-view': 'Ver Proyecto',
    'contact-tag': 'Contacto',
    'contact-title': 'Trabajemos<br><span class="outline-text">juntos.</span>',
    'contact-subtitle': '¿Tienes un proyecto en mente o simplemente quieres charlar? No dudes en escribirme — siempre estoy abierto a nuevas oportunidades.',
    'stat-projects': 'Proyectos',
    'stat-tech': 'Tecnologías',
    'stat-years': 'Años Aprendiendo',
    'footer-copy': '© 2025 Ismael Dicent. Todos los derechos reservados.',
  },
};

let currentLang = 'en';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  document.getElementById('langToggle').textContent = lang === 'en' ? 'ES' : 'EN';
}

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  applyLang(currentLang);
});

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
