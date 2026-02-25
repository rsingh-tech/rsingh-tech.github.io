/**
 * portfolio.js
 * Reads PORTFOLIO_DATA from data.js and renders every section dynamically.
 * Also manages the dark / light theme toggle.
 */

(function () {
  "use strict";

  // ── Theme toggle ──────────────────────────────────────────────────────────

  const THEME_KEY = "portfolio-theme";

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch { return null; }
  }
  function storeTheme(t) {
    try { localStorage.setItem(THEME_KEY, t); } catch {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const icon = document.getElementById("themeIcon");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
    storeTheme(theme);
  }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(stored ?? (prefersDark ? "dark" : "light"));

    document.getElementById("themeToggle")?.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // ── Site meta ─────────────────────────────────────────────────────────────

  function initMeta() {
    document.title = PORTFOLIO_DATA.site.title;
  }

  // ── Navigation ────────────────────────────────────────────────────────────

  function renderNav() {
    const s = PORTFOLIO_DATA.site;
    const logo = document.querySelector(".logo");
    if (logo) {
      logo.innerHTML = "";
      const img = document.createElement("img");
      img.src    = s.logoImage;
      img.width  = s.logoWidth;
      img.height = s.logoHeight;
      img.alt    = s.title;
      logo.appendChild(img);
    }
    const ft = document.querySelector(".footer-text");
    if (ft) ft.textContent = s.footerText;
  }

  // ── Hero ──────────────────────────────────────────────────────────────────

  function renderHero() {
    const h = PORTFOLIO_DATA.hero;
    const section = document.getElementById("hero");
    if (!section) return;

    const ctaHtml = h.ctaButtons.map(b =>
      `<a href="${b.href}" class="cta-btn ${b.style === "secondary" ? "secondary" : ""}"
          ${b.target ? `target="${b.target}"` : ""}>
        <span>${b.label}</span>
        <span><i class="${b.icon}" aria-hidden="true"></i></span>
      </a>`
    ).join("");

    const badgesHtml = h.skillBadges.map(b => `<span class="skill-badge">${b}</span>`).join("");
    const subtitleHtml = h.subtitle.join("<br>");

    section.innerHTML = `
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-image-container">
            <div class="hero-image-wrapper">
              <img src="${h.photo}" alt="${h.photoAlt}" class="hero-image">
            </div>
          </div>
          <div class="hero-text-content">
            <h1 class="hero-title">${h.name}</h1>
            <div class="hero-role">${h.role}</div>
            <p class="hero-subtitle">${subtitleHtml}</p>
            <div class="hero-cta-group">${ctaHtml}</div>
            <div class="hero-skills">${badgesHtml}</div>
          </div>
        </div>
      </div>`;
  }

  // ── About ─────────────────────────────────────────────────────────────────

  function renderAbout() {
    const a = PORTFOLIO_DATA.about;
    const container = document.querySelector("#about .container");
    if (!container) return;

    container.innerHTML = `
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-text">
          ${a.paragraphs.map(p => `<p>${p}</p>`).join("")}
        </div>
        <div>
          <img class="about-image" src="${a.photo}" alt="${a.photoAlt}" />
        </div>
      </div>`;
  }

  // ── Skills ────────────────────────────────────────────────────────────────

  function renderSkills() {
    const sk = PORTFOLIO_DATA.skills;
    const container = document.querySelector("#skills .container");
    if (!container) return;

    const cardsHtml = sk.cards.map(c => `
      <div class="skill-card">
        <div class="skill-icon">
          <i class="${c.faIcon}" aria-hidden="true"></i>
        </div>
        <h3>${c.title}</h3>
        <ul class="skill-items">
          ${c.items.map(i => `<li>${i}</li>`).join("")}
        </ul>
      </div>`).join("");

    const techHtml = sk.techCategories.map(cat => `
      <div class="tech-category">
        <h4>${cat.title}</h4>
        <div class="tags-container">
          ${cat.tags.map(t => `<div class="skills-tag">${t}</div>`).join("")}
        </div>
      </div>`).join("");

    const methodsHtml = sk.methodologies.map(m => `
      <div class="methodology-item">
        <i class="${m.faIcon} fa-icon-lg" aria-hidden="true"></i>
        <p>${m.label}</p>
      </div>`).join("");

    const softHtml = sk.softSkills.map(s => `
      <div class="soft-skill-badge">
        <i class="${s.faIcon} fa-icon-lg" aria-hidden="true"></i>
        <p>${s.label}</p>
      </div>`).join("");

    container.innerHTML = `
      <div class="section-header">
        <h2>Technical Skills &amp; Expertise</h2>
        <p>${sk.sectionSubtitle}</p>
      </div>
      <div class="skills-grid">${cardsHtml}</div>
      <div class="tech-tags">
        <h3>Technologies &amp; Frameworks</h3>
        ${techHtml}
      </div>
      <div class="methodologies-section">
        <h3>Development Methodologies</h3>
        <div class="methodology-grid">${methodsHtml}</div>
      </div>
      <div class="soft-skills">
        <h3>Professional Competencies</h3>
        <div class="soft-skills-grid">${softHtml}</div>
      </div>`;
  }

  // ── Employment ────────────────────────────────────────────────────────────

  function renderEmployment() {
    const emp = PORTFOLIO_DATA.employment;
    const list = document.querySelector("#employment .emp-list");
    if (!list) return;

    const subtitle = document.querySelector("#employment .emp-header p");
    if (subtitle) subtitle.textContent = emp.sectionSubtitle;

    list.innerHTML = emp.companies.map(c => {
      const logoHtml = `<img src="${c.logo}" alt="${c.logoAlt}" />`;

      const badge = c.isCurrent ? `<span class="emp-current-badge">Current</span>` : "";

      const rolesHtml = c.roles.map(r => `
        <div class="emp-role-item">
          <div class="emp-role-header">
            <div class="emp-role-title">${r.title}</div>
          </div>
          <p class="emp-role-description">${r.description}</p>
        </div>`).join("");

      return `
        <div class="emp-company-card">
          <div class="emp-company-main">
            <div class="emp-company-logo">${logoHtml}</div>
            <div class="emp-company-info">
              <div class="emp-company-header">
                <h3 class="emp-company-name">${c.name} ${badge}</h3>
                <div class="emp-total-duration">${c.duration}</div>
              </div>
            </div>
          </div>
          <div class="emp-roles-timeline">${rolesHtml}</div>
        </div>`;
    }).join("");
  }

  // ── Education ─────────────────────────────────────────────────────────────

  function renderEducation() {
    const grid = document.getElementById("educationGrid");
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_DATA.education.map(e => {
      const headerContent = `<img src="${e.image}" alt="${e.imageAlt}" />`;

      return `
        <div class="education-card">
          <div class="education-image">${headerContent}</div>
          <div class="project-content">
            <h3>${e.degree}</h3>
            <p>${e.institution}</p>
            <p style="font-size:0.9rem;color:var(--text-light)">${e.description}</p>
          </div>
        </div>`;
    }).join("");
  }

  // ── Projects ──────────────────────────────────────────────────────────────

  function renderProjects() {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_DATA.projects.map(p => {
      const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
      const githubHtml = p.githubUrl
        ? `<a href="${p.githubUrl}" class="github-link" target="_blank" title="View on GitHub">
             <i class="fa-brands fa-github"></i>
           </a>`
        : "";
      return `
        <div class="project-card">
          <div class="project-image">
            <img src="${p.image}" alt="${p.title}" />
          </div>
          <div class="project-content">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="project-tags">${tagsHtml}</div>
            ${githubHtml}
          </div>
        </div>`;
    }).join("");
  }

  // ── Contact ───────────────────────────────────────────────────────────────

  function renderContact() {
    const c = PORTFOLIO_DATA.contact;
    const content = document.querySelector(".contact-content");
    if (content) {
      content.querySelector("p").textContent = c.intro;
      content.querySelector(".contact-links").innerHTML = c.links.map(l =>
        `<a href="${l.href}" class="contact-link"${l.target ? ` target="${l.target}"` : ""}>
          <i class="${l.icon}"></i> ${l.label}
        </a>`
      ).join("");
    }
    const keyInput = document.querySelector('input[name="access_key"]');
    if (keyInput) keyInput.value = c.form.web3formsKey;
  }

  // ── Carousel ──────────────────────────────────────────────────────────────

  window.scrollCarousel = function (direction) {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;
    const w = window.innerWidth;
    let amount;
    if (w < 640)       amount = grid.offsetWidth + 15;
    else if (w < 1024) amount = grid.offsetWidth / 2 + 8;
    else               amount = grid.offsetWidth / 3 + 8;
    grid.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  // ── Navigation interactions ────────────────────────────────────────────────

  function initNavInteractions() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const hamburger = document.getElementById("hamburger");
    const navMenu   = document.getElementById("navMenu");

    hamburger?.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu?.classList.toggle("active");
    });

    document.querySelectorAll("nav ul li a").forEach(link =>
      link.addEventListener("click", () => {
        hamburger?.classList.remove("active");
        navMenu?.classList.remove("active");
      })
    );

    document.addEventListener("click", e => {
      if (!e.target.closest("nav")) {
        hamburger?.classList.remove("active");
        navMenu?.classList.remove("active");
      }
    });

    document.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft")  scrollCarousel("left");
      if (e.key === "ArrowRight") scrollCarousel("right");
    });

    const grid = document.getElementById("projectGrid");
    let touchStartX = 0;
    grid?.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; });
    grid?.addEventListener("touchend",   e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) scrollCarousel(diff > 0 ? "right" : "left");
    });
  }

  // ── Contact form ──────────────────────────────────────────────────────────

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const msg  = document.getElementById("formMessage");
    if (!form) return;

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled    = true;
      btn.textContent = "Sending...";
      msg.textContent = "";

      try {
        const res  = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: new FormData(form)
        });
        const data = await res.json();
        if (data.success) {
          msg.textContent = "Thank you! Your message has been sent successfully.";
          msg.className   = "form-message success";
          form.reset();
        } else {
          throw new Error("failed");
        }
      } catch {
        msg.textContent = "Oops! Something went wrong. Please try again.";
        msg.className   = "form-message error";
      }

      btn.disabled    = false;
      btn.textContent = "Send Message";
    });
  }

  const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1476345332379160698/8IFs_9ZG0vmy6TjDjrsBp6OccU97-XtndeyO9NjBVyiLC4o2-a8oZUVOTFBd2griBJPJ";

  async function sendDiscordNotification() {
    // Check if we've already sent a ping this session (prevents spam on refresh)
    if (sessionStorage.getItem('notified')) return;

    const payload = {
      username: "Portfolio Tracker",
      embeds: [{
        title: "New Portfolio Visit!",
        color: 3447003, // A nice blue color
        fields: [
          { name: "Page Title", value: document.title, inline: true },
          { name: "URL", value: window.location.href, inline: true },
          { name: "Device/Browser", value: navigator.userAgent.split(') ')[0] + ')', inline: false },
          { name: "Timestamp", value: new Date().toLocaleString(), inline: false }
        ],
        footer: { text: "Portfolio Analytics Bot" }
      }]
    };

    try {
      await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      // Mark as notified for this session
      sessionStorage.setItem('notified', 'true');
    } catch (err) {
      console.error("Webhook failed:", err);
    }
  }

  // ── Boot ──────────────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMeta();
    renderNav();
    renderHero();
    renderAbout();
    renderSkills();
    renderEmployment();
    renderEducation();
    renderProjects();
    renderContact();
    initNavInteractions();
    initContactForm();
    sendDiscordNotification();
  });

})();
