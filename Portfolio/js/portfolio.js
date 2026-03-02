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

    const socialHtml = (h.socialLinks || []).map(s =>
      `<a href="${s.href}" class="hero-social-btn" aria-label="${s.label}"${s.target ? ` target="${s.target}"` : ""}>
        <i class="${s.icon}" aria-hidden="true"></i>
      </a>`
    ).join("");

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
            ${socialHtml ? `<div class="hero-social-links">${socialHtml}</div>` : ""}
            <div class="hero-cta-group">
              ${ctaHtml}
              <a href="about.html" class="cta-btn secondary about-me-btn">
                <span>More About Me</span>
                <span><i class="fa fa-user" aria-hidden="true"></i></span>
              </a>
            </div>
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

    const groups = [
      {
        icon: "fa-solid fa-code",
        label: "Languages & Frameworks",
        color: "#667eea",
        cats: ["Programming Languages", "Backend Development", "Frontend Development"]
      },
      {
        icon: "fa-solid fa-cloud",
        label: "Cloud, DevOps & Data",
        color: "#43e97b",
        cats: ["Cloud & Infrastructure", "DevOps & Automation", "Databases", "Data Analytics"]
      },
      {
        icon: "fa-solid fa-plug",
        label: "Integration & APIs",
        color: "#f093fb",
        cats: ["API & Integration", "Enterprise Integration"]
      },
      {
        icon: "fa-solid fa-brain",
        label: "AI/ML & Security",
        color: "#4facfe",
        cats: ["AI/ML Integration", "Security & Authentication"]
      }
    ];

    const catMap = {};
    sk.techCategories.forEach(c => { catMap[c.title] = c.tags; });

    const techPreviewHtml = groups.map((g, gi) => {
      const rowsHtml = g.cats.map((catName, ci) => {
        const tags    = catMap[catName] || [];
        const visible = tags.slice(0, 4);
        const hidden  = tags.slice(4);
        const moreId  = `sk-more-${gi}-${ci}`;
        const morePill = hidden.length > 0
          ? `<span class="sk-chip sk-chip-more" onclick="skExpandMore('${moreId}',this)">+${hidden.length} more</span>
             <span class="sk-hidden-chips" id="${moreId}">
               ${hidden.map(t => `<span class="sk-chip">${t}</span>`).join("")}
             </span>`
          : "";
        return `
          <div class="sk-tile-row">
            <span class="sk-tile-cat">${catName}</span>
            <div class="sk-chips">
              ${visible.map(t => `<span class="sk-chip">${t}</span>`).join("")}
              ${morePill}
            </div>
          </div>`;
      }).join("");

      return `
      <div class="sk-tile">
        <div class="sk-tile-header" style="--tile-color:${g.color}">
          <i class="${g.icon}"></i>
          <span>${g.label}</span>
        </div>
        <div class="sk-tile-body">${rowsHtml}</div>
      </div>`;
    }).join("");

    const allCardsHtml = sk.cards.map(c => `
      <div class="skill-card">
        <div class="skill-icon"><i class="${c.faIcon}" aria-hidden="true"></i></div>
        <h3>${c.title}</h3>
        <ul class="skill-items">${c.items.map(i => `<li>${i}</li>`).join("")}</ul>
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
      <div class="sk-tiles-grid">${techPreviewHtml}</div>
      <div class="sk-expand-row">
        <button class="sk-expand-btn" id="skillsExpandBtn" onclick="toggleSkills(this)">
          <i class="fa-solid fa-chevron-down"></i>
          <span class="sk-btn-label">Capabilities, Methodologies &amp; More</span>
        </button>
      </div>
      <div class="sk-detail" id="skillsDetail">
        <div class="skills-grid">${allCardsHtml}</div>
        <div class="methodologies-section">
          <h3>Development Methodologies</h3>
          <div class="methodology-grid">${methodsHtml}</div>
        </div>
        <div class="soft-skills">
          <h3>Professional Competencies</h3>
          <div class="soft-skills-grid">${softHtml}</div>
        </div>
      </div>`;
  }

  // ── Employment ────────────────────────────────────────────────────────────

  function renderEmployment() {
    const emp     = PORTFOLIO_DATA.employment;
    const section = document.querySelector("#employment");
    if (!section) return;

    const subtitle = section.querySelector(".emp-header p");
    if (subtitle) subtitle.textContent = emp.sectionSubtitle;

    const container = section.querySelector(".emp-list");
    if (!container) return;
    container.className = "";

    const palette = ["#667eea", "#0EA5E9", "#f093fb", "#4facfe", "#43e97b", "#fa709a"];

    // ── DESKTOP: horizontal bar + side-by-side columns ────────────────────
    const ticksHtml = emp.timeline.ticks.map(t =>
      `<div class="emp-bar-tick" style="left:${t.left}%">
        <div class="emp-bar-tick-line"></div>
        <span>${t.label}</span>
      </div>`
    ).join("");

    const segmentsHtml = emp.companies.map((c, i) => {
      const color = palette[i % palette.length];
      return `<div class="emp-bar-seg"
        style="left:${c.barLeft}%;width:${c.barWidth}%;background:${color}"
        title="${c.name}: ${c.duration}"></div>`;
    }).join("");

    const desktopEntriesHtml = emp.companies.map((c, ci) => {
      const color = palette[ci % palette.length];
      const badge = c.isCurrent ? `<span class="emp-badge-current">Current</span>` : "";

      const rolesHtml = c.roles.map((r, ri) => {
        const descId = `emp-desc-${ci}-${ri}`;
        const isLast = ri === c.roles.length - 1;
        return `<div class="emp-tl-item${isLast ? " emp-tl-last" : ""}" style="--dot-color:${color}">
          <div class="emp-tl-dot"></div>
          <div class="emp-tl-body">
            <div class="emp-tl-role-header">
              <span class="emp-role-name" style="color:${color}">${r.title}</span>
              <button class="emp-expand-btn" onclick="empToggle('${descId}',this)">
                <i class="fa-solid fa-chevron-down"></i> Details
              </button>
            </div>
            <div class="emp-role-desc-panel" id="${descId}"><p>${r.description}</p></div>
          </div>
        </div>`;
      }).join("");

      return `<div class="emp-entry" style="flex:${c.colFlex} 0 0">
        <div class="emp-entry-header">
          <div class="emp-color-dot" style="background:${color}"></div>
          <div class="emp-logo-wrap"><img src="${c.logo}" alt="${c.logoAlt}" /></div>
          <div class="emp-entry-info">
            <div class="emp-company-name">${c.name} ${badge}</div>
            <div class="emp-duration"><i class="fa-regular fa-calendar"></i> ${c.duration}</div>
          </div>
        </div>
        <div class="emp-tl-inner">${rolesHtml}</div>
      </div>`;
    }).join("");

    const desktopHtml = `
      <div class="emp-desktop-layout">
        <div class="emp-single-card">
          <div class="emp-bar-wrap">
            <div class="emp-bar-track">${segmentsHtml}</div>
            <div class="emp-bar-ticks">${ticksHtml}</div>
          </div>
          <div class="emp-entries">${desktopEntriesHtml}</div>
        </div>
      </div>`;

    // ── MOBILE: vertical timeline ─────────────────────────────────────────
    // Extract start year from duration string, e.g. "Jul 2013 - Sep 2024" → "2013"
    function startYear(duration) {
      const m = duration.match(/\b(20\d{2}|19\d{2})\b/);
      return m ? m[1] : "";
    }

    const mobileItemsHtml = emp.companies.map((c, ci) => {
      const color  = palette[ci % palette.length];
      const badge  = c.isCurrent ? `<span class="emp-vtl-badge">Current</span>` : "";
      const isLast = ci === emp.companies.length - 1;
      const year   = startYear(c.duration);

      const rolesHtml = c.roles.map((r, ri) => {
        const descId = `emp-vtl-desc-${ci}-${ri}`;
        return `<div class="emp-vtl-role">
          <div class="emp-vtl-role-header">
            <span class="emp-vtl-role-title" style="color:${color}">${r.title}</span>
            <button class="emp-expand-btn" onclick="empToggle('${descId}',this)">
              <i class="fa-solid fa-chevron-down"></i> Details
            </button>
          </div>
          <div class="emp-role-desc-panel" id="${descId}"><p>${r.description}</p></div>
        </div>`;
      }).join("");

      return `<div class="emp-vtl-item${isLast ? " emp-vtl-item-last" : ""}">
        <div class="emp-vtl-year-col">
          <span class="emp-vtl-year">${year}</span>
        </div>
        <div class="emp-vtl-connector">
          <div class="emp-vtl-line-top" style="background:${color}"></div>
          <div class="emp-vtl-node" style="background:${color};border-color:${color};box-shadow:0 0 0 3px ${color}33"></div>
          <div class="emp-vtl-line-bot" style="background:${color}"></div>
        </div>
        <div class="emp-vtl-card" style="border-left-color:${color}">
          <div class="emp-vtl-card-header">
            <div class="emp-vtl-logo"><img src="${c.logo}" alt="${c.logoAlt}" /></div>
            <div>
              <div class="emp-vtl-company">${c.name} ${badge}</div>
              <div class="emp-vtl-duration"><i class="fa-regular fa-calendar"></i> ${c.duration}</div>
            </div>
          </div>
          <div class="emp-vtl-roles">${rolesHtml}</div>
        </div>
      </div>`;
    }).join("");

    const mobileHtml = `
      <div class="emp-mobile-layout">
        <div class="emp-vtl-wrap">${mobileItemsHtml}</div>
      </div>`;

    container.innerHTML = desktopHtml + mobileHtml;
  }

  // ── Skills helpers ────────────────────────────────────────────────────────

  window.skExpandMore = function (spanId, pill) {
    const hidden = document.getElementById(spanId);
    if (!hidden) return;
    hidden.classList.add("sk-hidden-open");
    pill.style.display = "none";
  };

  window.toggleSkills = function (btn) {
    const panel = document.getElementById("skillsDetail");
    if (!panel) return;
    const open = panel.classList.toggle("sk-open");
    btn.classList.toggle("open", open);
    btn.querySelector(".sk-btn-label").textContent = open
      ? "Show Less"
      : "Capabilities, Methodologies & More";
    btn.querySelector("i").className = open
      ? "fa-solid fa-chevron-up"
      : "fa-solid fa-chevron-down";
  };

  // ── Employment helper ─────────────────────────────────────────────────────

  window.empToggle = function (panelId, btn) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    const open = panel.classList.toggle("open");
    btn.querySelector("i").className = open ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down";
    btn.classList.toggle("active", open);
  };

  // ── Education ─────────────────────────────────────────────────────────────

  function renderEducation() {
    const grid = document.getElementById("educationGrid");
    if (!grid) return;
    const edu = PORTFOLIO_DATA.education;

    const formalHtml = edu.formal.map(e => `
      <div class="edu-card">
        <div class="edu-card-top">
          <div class="edu-logo-wrap"><img src="${e.image}" alt="${e.imageAlt}" /></div>
          <div>
            <div class="edu-degree">${e.degree}</div>
            <div class="edu-institution">${e.institution}</div>
            <div class="edu-duration"><i class="fa-regular fa-calendar"></i> ${e.duration}</div>
          </div>
        </div>
        <p class="edu-desc">${e.description}</p>
      </div>`).join("");

    const certHtml = edu.certifications.map(cert => {
      const coursesHtml = cert.courses.map(c => `
        <div class="edu-course">
          <i class="fa-solid fa-certificate edu-cert-ico"></i>
          <div>
            <div class="edu-course-title">${c.title}</div>
            <p class="edu-course-desc">${c.description}</p>
            ${c.verifyUrl ? `<a href="${c.verifyUrl}" class="edu-verify-link" target="_blank">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Verify
            </a>` : ""}
          </div>
        </div>`).join("");
      return `
      <div class="edu-card edu-cert-card">
        <div class="edu-card-top">
          <div class="edu-logo-wrap"><img src="${cert.image}" alt="${cert.imageAlt}" /></div>
          <div class="edu-cert-provider">${cert.provider}</div>
        </div>
        <div class="edu-courses">${coursesHtml}</div>
      </div>`;
    }).join("");

    grid.className = "edu-grid";
    grid.innerHTML = `
      <div class="edu-subsection">
        <div class="edu-sub-label"><i class="fa-solid fa-graduation-cap"></i> Formal Education</div>
        <div class="edu-formal-list">${formalHtml}</div>
      </div>
      <div class="edu-subsection">
        <div class="edu-sub-label"><i class="fa-solid fa-medal"></i> Certifications</div>
        <div class="edu-cert-list">${certHtml}</div>
      </div>`;
  }

  // ── Projects ──────────────────────────────────────────────────────────────

  function buildProjectCard(p) {
    const tagsHtml   = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
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
  }

  function renderProjects() {
    const track = document.getElementById("projectGrid");
    if (!track) return;
    const cardHtml = PORTFOLIO_DATA.projects.map(buildProjectCard).join("");
    // Triplicate for seamless infinite feel on large screens
    track.innerHTML = cardHtml + cardHtml + cardHtml;
  }

  // ── Contact ───────────────────────────────────────────────────────────────

  function renderContact() {
    const c       = PORTFOLIO_DATA.contact;
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

  // ── Carousel — RAF infinite auto-scroll + button nudge ───────────────────

  (function initProjectCarousel() {
    document.addEventListener("DOMContentLoaded", () => {
      const track     = document.getElementById("projectGrid");
      const container = document.querySelector(".carousel-container");
      if (!track || !container) return;

      const SPEED    = 0.6;
      const NUDGE_PX = 340;
      let offset     = 0;
      let paused     = false;
      let nudging    = 0;
      let nudgeDir   = 1;

      function getHalfWidth() { return track.scrollWidth / 3; }

      function step() {
        if (!paused) offset += SPEED;
        if (nudging > 0) {
          const delta = Math.min(3.5, nudging);
          offset  += delta * nudgeDir;
          nudging -= delta;
        }
        const half = getHalfWidth();
        if (offset >= half) offset -= half;
        if (offset < 0)     offset += half;
        track.style.transform = `translateX(-${offset}px)`;
        requestAnimationFrame(step);
      }

      requestAnimationFrame(step);

      container.addEventListener("mouseenter", () => { paused = true;  });
      container.addEventListener("mouseleave", () => { paused = false; });
      container.addEventListener("touchstart", () => { paused = true;  }, { passive: true });
      container.addEventListener("touchend",   () => { paused = false; }, { passive: true });

      window.scrollCarousel = function (direction) {
        nudgeDir = direction === "right" ? 1 : -1;
        nudging  = NUDGE_PX;
      };

      document.addEventListener("keydown", e => {
        if (e.key === "ArrowLeft")  window.scrollCarousel("left");
        if (e.key === "ArrowRight") window.scrollCarousel("right");
      });
    });
  })();

  // ── Navigation interactions ───────────────────────────────────────────────

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
  }

  // ── Contact form ──────────────────────────────────────────────────────────

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const msg  = document.getElementById("formMessage");
    if (!form) return;

    form.addEventListener("submit", async e => {
      e.preventDefault();
      const btn       = form.querySelector('button[type="submit"]');
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
		  { name: "Referrer", value: document.referrer, inline: true },
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
    renderEmployment();
    renderEducation();
    renderSkills();
    renderProjects();
    renderContact();
    initNavInteractions();
    initContactForm();
	sendDiscordNotification();
  });

})();