/* =====================================================================
   PORTFOLIO — script.js

   1. CONFIG      ← everything personal lives here. Edit this part only.
   2. Icons       (inline SVG, no icon library)
   3. Helpers
   4. Renderers   (turn CONFIG into page content)
   5. Behaviour   (navigation, scroll reveal, contact form)

   Note: the <title>, meta description and Open Graph tags are in the
   <head> of index.html because search engines read them before any
   JavaScript runs. Update those there.
   ===================================================================== */


/* =====================================================================
   1. CONFIG
   Anything in [square brackets] or containing "your-" / "example.com" is a
   placeholder. Placeholders are highlighted on the page (and listed in the
   browser console) so you can spot what's left to fill in.
   ===================================================================== */
const CONFIG = {

  /* ---------- Identity ---------- */
  name: "Ansh Maheshwari",
  role: "B.Tech CSE Student, Invertis University",        // small label above the hero heading
  greeting: "Hi, I'm",
  tagline: "Learning to turn problems into working software.",
  heroBio:
    "I'm a second-year B.Tech CSE student working through Java and Data Structures & Algorithms " +
    "while building small web and IoT projects to see the ideas actually run. Alongside my degree " +
    "I'm learning video editing and preparing for CDS.",
  footerTagline: "Building. Learning. Improving.",

  /* ---------- Links ---------- */
  email: "maheshwariansh478@gmail.com",
  github: "https://github.com/HackWithAnsh",
  linkedin: "https://linkedin.com/in/hackwithansh",
  resume: "assets/Ansh-Maheshwari-Resume.pdf",            // ← put your PDF at this path (see README)

  /* ---------- Profile photo ---------- */
  profileImage: "assets/images/profile.jpg",
  profileAlt: "Portrait of Ansh Maheshwari",
  photoCaption: "Second-year B.Tech CSE student, focused on Java, DSA and the web.",

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "I'm a second-year BTech student with a strong interest in software development. " +
        "Right now I'm learning Java and Data Structures & Algorithms, and working on my " +
        "problem-solving one problem at a time.",
      "On the web side, I'm building my skills in HTML, CSS and JavaScript by making " +
        "responsive projects. I like work that ends in something practical, whether that's " +
        "a web page or an IoT idea that connects hardware to software.",
      "What I bring beyond the code: problem solving, self-learning, time management, " +
        "discipline, adaptability and team collaboration. Alongside my degree, I'm also " +
        "learning video editing and preparing for CDS — both a good test of how well I manage my time.",
    ],
    // Only use numbers you can stand behind.
    stats: [
      { value: "7.2", label: "CGPA out of 10" },
      { value: "4", label: "Projects built" },
      { value: "2029", label: "Expected graduation" },
    ],
  },

  /* ---------- Skills ----------
     icon options: code, globe, layers, cpu, tool */
  skills: [
    { category: "Programming",     icon: "code",  items: ["Java", "JavaScript"] },
    { category: "Web Development", icon: "globe", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Core Concepts",   icon: "layers", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"] },
    { category: "IoT / Embedded",  icon: "cpu",   items: ["ESP32", "IoT", "Bluetooth", "Wi-Fi"] },
    { category: "Tools",           icon: "tool",  items: ["Git", "GitHub", "VS Code"] },
  ],
  learning: ["Java", "Data Structures & Algorithms", "JavaScript", "HTML", "CSS", "Web Development", "Video Editing"],

  /* ---------- Projects ----------
     Add, remove or reorder freely. Each project needs:
       title, description, tech (array), image, imageAlt
     Optional:
       github → shows a GitHub button   (leave "" to hide)
       demo   → shows a Live Demo button (leave "" to hide) */
  projects: [
    {
      title: "IoT Water Quality Monitor",
      description:
        "An IoT-based system designed to monitor water quality parameters and provide useful " +
        "information through connected sensors and technology.",
      tech: ["IoT", "Sensors", "Embedded/connected systems"],
      image: "assets/images/project-water-quality.svg",
      imageAlt: "Illustration of a water sensor probe sending readings to a dashboard",
      github: "",
      demo: "",
    },
    {
      title: "Emergency Safety System",
      description:
        "An ESP32-based wearable safety concept for emergency communication and alerts, using " +
        "trusted-contact location sharing over Bluetooth and Wi-Fi.",
      tech: ["ESP32", "IoT", "Bluetooth/Wi-Fi", "Mobile/Location integration"],
      image: "assets/images/project-emergency-safety.svg",
      imageAlt: "Illustration of a microcontroller board sending a location signal to a phone",
      github: "",
      demo: "",
    },
    {
      title: "Student Grade Tracker",
      description:
        "A Java console application for tracking and managing student grades and performance data.",
      tech: ["Java", "OOP"],
      image: "assets/images/project-web-development.svg",
      imageAlt: "Illustration of a grade tracker interface",
      github: "",
      demo: "",
    },
    {
      title: "Hotel Reservation System",
      description:
        "A Java console application for managing hotel reservation-related operations, built " +
        "around structured, object-oriented application logic.",
      tech: ["Java", "OOP"],
      image: "assets/images/project-web-development.svg",
      imageAlt: "Illustration of a hotel booking interface",
      github: "",
      demo: "",
    },
  ],

  /* ---------- Current focus ---------- */
  experience: [
    {
      period: "2026",
      title: "Current Development Focus",
      type: "Learning & project work",
      organization: "B.Tech CSE • Invertis University",
      description:
        "Currently strengthening Java and Data Structures & Algorithms while building web and IoT projects. Also developing practical skills in JavaScript, Git and GitHub.",
      points: [
        "Practicing Data Structures & Algorithms using Java",
        "Building responsive projects with HTML, CSS and JavaScript",
        "Exploring ESP32, IoT and connected-system concepts",
        "Continuously improving problem-solving and software development fundamentals"
      ],
      placeholder: false,
    },
  ],

  /* ---------- Education ----------
     Most recent first. `status` is shown as a small pill next to the period. */
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Invertis University",
      period: "2025 – 2029 (expected)",
      status: "2nd year, CGPA 7.2/10",
    },
    {
      degree: "Class XII",
      institution: "Bhoo Devi Varshney Inter College",
      period: "2024",
      status: "73.5%",
    },
    {
      degree: "Class X",
      institution: "Bhoo Devi Varshney Inter College",
      period: "2022",
      status: "85.33%",
    },
  ],

  /* ---------- Achievements & certifications ----------
     Add real entries to `items` as you earn them, e.g. ["Smart India Hackathon — Participant"].
     icon options: zap, award, calendar, terminal */
  achievements: [
    { title: "Hackathons",       icon: "zap",      items: [] },
    { title: "Certifications",   icon: "award",    items: [] },
    { title: "Technical Events", icon: "calendar", items: [] },
    { title: "Coding Practice",  icon: "terminal", items: [] },
  ],
  achievementsEmptyText: "Nothing added yet.",
};


/* =====================================================================
   2. ICONS  (24×24, stroke-based)
   ===================================================================== */
const ICONS = {
  code:     '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  globe:    '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  layers:   '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  cpu:      '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  tool:     '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  github:   '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  mail:     '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  external: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  cap:      '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  award:    '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  zap:      '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
};


/* =====================================================================
   3. HELPERS
   ===================================================================== */
const $  = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

/** Escape text before it goes into an HTML string. */
const esc = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/** Inline SVG icon by name. */
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ` +
  `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ""}</svg>`;

/** True for "[College Name]", "your-username", "example.com" and similar. */
const isPlaceholder = (value) =>
  typeof value === "string" && (/^\[.*\]$/.test(value.trim()) || /your-|your\.email|example\.com/i.test(value));

/** "https://github.com/foo/" → "github.com/foo" */
const prettyUrl = (url) => String(url).replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-show"), 4000);
}


/* =====================================================================
   4. RENDERERS
   ===================================================================== */

/** Fill every [data-bind="key"] element with CONFIG[key]. */
function renderBindings() {
  $$("[data-bind]").forEach((el) => {
    const value = CONFIG[el.dataset.bind];
    if (value == null) return;
    el.textContent = value;
    if (isPlaceholder(value)) el.classList.add("is-placeholder");
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Resume button
  const resume = $("#resume-link");
  if (CONFIG.resume) {
    resume.href = CONFIG.resume;
  } else {
    resume.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Resume link isn't set up yet.");
    });
  }
}

/** GitHub / LinkedIn / Email icon rows (hero and footer). */
function renderSocials() {
  const links = [
    { label: "GitHub", href: CONFIG.github, icon: "github", external: true },
    { label: "LinkedIn", href: CONFIG.linkedin, icon: "linkedin", external: true },
    { label: "Email", href: `mailto:${CONFIG.email}`, icon: "mail", external: false },
  ];
  const html = links
    .map((l) =>
      `<li><a class="icon-btn" href="${esc(l.href)}"` +
      (l.external ? ' target="_blank" rel="noopener noreferrer"' : "") +
      ` aria-label="${l.label}${l.external ? " (opens in a new tab)" : ""}">${icon(l.icon)}</a></li>`
    )
    .join("");
  $$("[data-social]").forEach((list) => (list.innerHTML = html));
}

/** Hero photo and its one-line caption. */
function renderHeroVisual() {
  const photo = $("#hero-photo");
  photo.alt = CONFIG.profileAlt;
  photo.src = CONFIG.profileImage;
  // If the path is mistyped, fall back to the placeholder instead of a broken image.
  photo.addEventListener("error", () => {
    if (!photo.src.endsWith("profile-placeholder.svg")) photo.src = "assets/images/profile-placeholder.svg";
  });

  $("#photo-caption").textContent = CONFIG.photoCaption || "";
}

function renderAbout() {
  $("#about-text").innerHTML = CONFIG.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#about-stats").innerHTML = CONFIG.about.stats
    .map((s) => `<div class="stat"><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`)
    .join("");
}

function renderSkills() {
  $("#skills-grid").innerHTML = CONFIG.skills
    .map(
      (group) => `
      <article class="skill-card">
        <div class="skill-card__head">
          <span class="skill-card__icon">${icon(group.icon)}</span>
          <h3>${esc(group.category)}</h3>
        </div>
        <ul class="chips">${group.items.map((item) => `<li class="chip">${esc(item)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  $("#skills-learning").innerHTML = CONFIG.learning.length
    ? `<div class="learning" data-reveal>
         <h3 class="learning__title"><span class="learning__dot" aria-hidden="true"></span>Currently Learning</h3>
         <ul class="chips chips--accent">${CONFIG.learning.map((item) => `<li class="chip">${esc(item)}</li>`).join("")}</ul>
       </div>`
    : "";
}

function renderProjects() {
  $("#projects-list").innerHTML = CONFIG.projects
    .map((p) => {
      const buttons = [];
      if (p.github) {
        buttons.push(
          `<a class="btn btn--ghost btn--sm" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" ` +
          `aria-label="${esc(p.title)} on GitHub (opens in a new tab)">${icon("github")}GitHub</a>`
        );
      }
      if (p.demo) {
        buttons.push(
          `<a class="btn btn--primary btn--sm" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer" ` +
          `aria-label="${esc(p.title)} live demo (opens in a new tab)">${icon("external")}Live Demo</a>`
        );
      }
      return `
        <article class="project" data-reveal>
          <div class="project__media">
            ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.imageAlt || "")}" width="960" height="640" loading="lazy" decoding="async">` : ""}
          </div>
          <div class="project__body">
            <h3 class="project__title">${esc(p.title)}</h3>
            <p class="project__desc">${esc(p.description)}</p>
            <ul class="chips" aria-label="Technologies used">${p.tech.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}</ul>
            ${buttons.length ? `<div class="project__actions">${buttons.join("")}</div>` : ""}
          </div>
        </article>`;
    })
    .join("");
}

function renderExperience() {
  $("#experience-list").innerHTML = CONFIG.experience
    .map(
      (e) => `
      <li class="timeline__item">
        <p class="timeline__period">${esc(e.period)}</p>
        <h3 class="timeline__title">${esc(e.title)}</h3>
        <p class="timeline__type"><span>${esc(e.type)}</span>${e.placeholder ? '<span class="pill">Placeholder text</span>' : ""}</p>
        ${e.organization ? `<p class="timeline__org">${esc(e.organization)}</p>` : ""}
        <p class="timeline__desc">${esc(e.description)}</p>
        ${e.points && e.points.length ? `<ul class="bullets">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
      </li>`
    )
    .join("");
}

function renderEducation() {
  $("#education-list").innerHTML = CONFIG.education
    .map(
      (e) => `
      <article class="edu">
        <span class="edu__icon">${icon("cap")}</span>
        <div>
          <h3>${esc(e.degree)}</h3>
          <p class="edu__inst${isPlaceholder(e.institution) ? " is-placeholder" : ""}">${esc(e.institution)}</p>
          <p class="edu__meta"><span>${esc(e.period)}</span>${e.status ? `<span class="pill">${esc(e.status)}</span>` : ""}</p>
        </div>
      </article>`
    )
    .join("");
}

function renderAchievements() {
  const section = $("#achievements");
  const hasItems = CONFIG.achievements.some((a) => a.items && a.items.length);
  if (!hasItems) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  $("#achievements-grid").innerHTML = CONFIG.achievements
    .filter((a) => a.items && a.items.length)
    .map(
      (a) => `
      <div class="ach__item">
        <div class="ach__head">${icon(a.icon)}<h3>${esc(a.title)}</h3></div>
        <ul class="ach__list">${a.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");
}

function renderContactLinks() {
  const rows = [
    { label: "Email", href: `mailto:${CONFIG.email}`, value: CONFIG.email, icon: "mail", external: false },
    { label: "GitHub", href: CONFIG.github, value: prettyUrl(CONFIG.github), icon: "github", external: true },
    { label: "LinkedIn", href: CONFIG.linkedin, value: prettyUrl(CONFIG.linkedin), icon: "linkedin", external: true },
  ];
  $("#contact-links").innerHTML = rows
    .map(
      (r) => `
      <li>
        <a class="contact-link" href="${esc(r.href)}"${r.external ? ' target="_blank" rel="noopener noreferrer"' : ""}>
          ${icon(r.icon)}
          <span class="contact-link__text">
            <span class="contact-link__label">${r.label}${r.external ? '<span class="sr-only"> (opens in a new tab)</span>' : ""}</span>
            <span class="contact-link__value">${esc(r.value)}</span>
          </span>
        </a>
      </li>`
    )
    .join("");
}

/** List placeholders still in CONFIG so nothing goes live half-finished. */
function reportPlaceholders() {
  const missing = [];
  if (isPlaceholder(CONFIG.email)) missing.push("email");
  if (isPlaceholder(CONFIG.github)) missing.push("github");
  if (isPlaceholder(CONFIG.linkedin)) missing.push("linkedin");
  if (CONFIG.education.some((e) => isPlaceholder(e.institution))) missing.push("college name");
  if (CONFIG.experience.some((e) => e.placeholder)) missing.push("experience text");
  if (CONFIG.projects.some((p) => isPlaceholder(p.github))) missing.push("project GitHub links");
  if (missing.length) console.info("[portfolio] Still to fill in js/script.js → " + missing.join(", "));
}


/* =====================================================================
   5. BEHAVIOUR
   ===================================================================== */

/** Navbar: solidify on scroll, hamburger menu, active-section highlight. */
function initNav() {
  const nav = $("#nav");
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");

  // Solid background once the page has scrolled a little
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const setMenu = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  menu.addEventListener("click", (event) => { if (event.target.closest("a")) setMenu(false); });
  document.addEventListener("click", (event) => {
    if (nav.classList.contains("is-open") && !nav.contains(event.target)) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });

  // Highlight the link for the section crossing the middle of the screen
  const links = $$(".nav__link");
  const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => { a.classList.remove("is-active"); a.removeAttribute("aria-current"); });
        const active = byId.get(entry.target.id);
        if (active) { active.classList.add("is-active"); active.setAttribute("aria-current", "true"); }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  byId.forEach((_, id) => { const section = document.getElementById(id); if (section) spy.observe(section); });
}

/**
 * Fade blocks in once as they enter the viewport — at the level of a whole
 * section block (see the data-reveal attributes in index.html), not on
 * every repeated card, so the page doesn't scatter motion everywhere.
 */
function initReveal() {
  const items = $$("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Small stagger for siblings that appear together (e.g. project cards)
  const seen = new Map();
  items.forEach((el) => {
    const index = seen.get(el.parentElement) || 0;
    el.style.setProperty("--d", `${Math.min(index * 0.07, 0.28)}s`);
    seen.set(el.parentElement, index + 1);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/** Contact form: frontend-only, so it opens the visitor's email app (mailto:). */
function initContactForm() {
  const form = $("#contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isPlaceholder(CONFIG.email)) {
      showToast("Set your email in js/script.js to enable this form.");
      return;
    }
    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href =
      `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast("Opening your email app…");
  });
}


/* =====================================================================
   START
   ===================================================================== */
renderBindings();
renderSocials();
renderHeroVisual();
renderAbout();
renderSkills();
renderProjects();
renderExperience();
renderEducation();
renderAchievements();
renderContactLinks();
reportPlaceholders();

initNav();
initReveal();     // after rendering, so dynamic blocks are included
initContactForm();