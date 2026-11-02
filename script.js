/* =====================================================================
 *  ✏️  EDIT YOUR PROFILE HERE — all personal content lives in CONFIG.
 *  Each text field has { en: "...", bn: "..." } for English / বাংলা.
 *  Anything marked  placeholder: true  is shown with a "Placeholder"
 *  badge until you replace it with real info and set placeholder: false.
 * ===================================================================== */
const CONFIG = {
  name: "Robin",
  githubUser: "mdrbnbd",
  title: { en: "Web Developer", bn: "ওয়েব ডেভেলপার" },
  tagline: {
    en: "I build fast, mobile-first websites, PWAs and API-powered tools that people actually enjoy using.",
    bn: "আমি দ্রুত, মোবাইল-ফ্রেন্ডলি ওয়েবসাইট, PWA আর API-ভিত্তিক টুল বানাই, যেগুলো মানুষ সত্যিই ব্যবহার করতে পছন্দ করে।"
  },
  bio: {
    en: "I'm Robin, a web developer from Bangladesh. I love turning ideas into clean, responsive and lightning-fast web experiences — from simple landing pages to installable Progressive Web Apps that talk to real APIs. I care about performance, accessibility and building tools that solve everyday problems, often in Bangla for local users.",
    bn: "আমি রবিন, বাংলাদেশের একজন ওয়েব ডেভেলপার। আইডিয়াকে পরিষ্কার, রেসপন্সিভ আর খুব দ্রুত ওয়েবসাইটে রূপ দিতে ভালোবাসি — সাধারণ ল্যান্ডিং পেজ থেকে শুরু করে আসল API-র সাথে কাজ করা ইনস্টলযোগ্য PWA পর্যন্ত। পারফরম্যান্স, অ্যাক্সেসিবিলিটি আর দৈনন্দিন সমস্যার সমাধান করে এমন টুল বানানো আমার কাছে গুরুত্বপূর্ণ, প্রায়ই বাংলায়, স্থানীয় ব্যবহারকারীদের জন্য।"
  },
  location: { en: "Bangladesh", bn: "বাংলাদেশ" },
  availableForWork: true,

  stats: [
    { value: "PWA", label: { en: "Installable apps", bn: "ইনস্টলযোগ্য অ্যাপ" } },
    { value: "100%", label: { en: "Mobile-first", bn: "মোবাইল-ফার্স্ট" } },
    { value: "EN/বাং", label: { en: "Bilingual sites", bn: "দ্বিভাষিক সাইট" } }
  ],

  // Skills — add/remove freely. level = 0..100 (bar width)
  skills: [
    { name: "HTML5", icon: "🧱", level: 95 },
    { name: "CSS3", icon: "🎨", level: 90 },
    { name: "JavaScript", icon: "⚡", level: 85 },
    { name: "PWA", icon: "📱", level: 80 },
    { name: "GitHub Pages", icon: "🚀", level: 90 },
    { name: "API Integration", icon: "🔌", level: 80 },
    { name: "Responsive Design", icon: "📐", level: 90 },
    { name: "Git & GitHub", icon: "🌿", level: 85 }
  ],

  projects: [
    {
      title: { en: "VIP Number Finder", bn: "ভিআইপি নাম্বার ফাইন্ডার" },
      description: {
        en: "A Bangla Progressive Web App that finds available VIP Robi/Airtel numbers. Supports multi-series and custom pattern search (birthdays, repeating digits, sequences) and ranks every number with a VIP score.",
        bn: "বাংলা PWA, যেটা খালি থাকা রবি/এয়ারটেলের ভিআইপি নাম্বার খুঁজে বের করে। একসাথে অনেক সিরিজে আর নিজের প্যাটার্নে (জন্মতারিখ, একই সংখ্যা, ক্রমিক সংখ্যা) খোঁজা যায়, আর প্রতিটা নাম্বারকে ভিআইপি স্কোর দিয়ে সাজানো হয়।"
      },
      tags: ["PWA", "JavaScript", "API", "বাংলা"],
      live: "https://vip.dfaster.com",
      repo: "https://github.com/mdrbnbd/vip-number-finder",
      featured: true,
      emoji: "📞"
    },
    {
      placeholder: true,
      title: { en: "Your Project Title", bn: "আপনার প্রজেক্টের নাম" },
      description: {
        en: "PLACEHOLDER — describe another project here: what it does, who it's for and what tech you used. Edit CONFIG.projects in script.js.",
        bn: "প্লেসহোল্ডার — এখানে আরেকটা প্রজেক্টের বর্ণনা দিন: এটা কী করে, কার জন্য, কোন প্রযুক্তি দিয়ে বানানো। script.js-এর CONFIG.projects এডিট করুন।"
      },
      tags: ["HTML", "CSS", "JavaScript"],
      live: "",
      repo: "",
      emoji: "🛠️"
    },
    {
      placeholder: true,
      title: { en: "Another Project", bn: "আরেকটা প্রজেক্ট" },
      description: {
        en: "PLACEHOLDER — add a landing page, an online shop, a dashboard or any client work you're proud of.",
        bn: "প্লেসহোল্ডার — একটা ল্যান্ডিং পেজ, অনলাইন দোকান, ড্যাশবোর্ড বা গর্ব করার মতো যেকোনো ক্লায়েন্টের কাজ যোগ করুন।"
      },
      tags: ["Responsive", "API"],
      live: "",
      repo: "",
      emoji: "✨"
    }
  ],

  services: [
    { icon: "💻", title: { en: "Website Development", bn: "ওয়েবসাইট ডেভেলপমেন্ট" },
      text: { en: "Modern, responsive websites and landing pages that load fast on any phone.", bn: "আধুনিক, রেসপন্সিভ ওয়েবসাইট আর ল্যান্ডিং পেজ, যেকোনো ফোনে দ্রুত খোলে।" } },
    { icon: "📱", title: { en: "Progressive Web Apps", bn: "প্রোগ্রেসিভ ওয়েব অ্যাপ" },
      text: { en: "Installable, offline-ready web apps that feel like native mobile apps.", bn: "ইনস্টলযোগ্য, অফলাইনেও চলে এমন ওয়েব অ্যাপ, দেখতে মোবাইল অ্যাপের মতো।" } },
    { icon: "🔌", title: { en: "API Integration", bn: "API ইন্টিগ্রেশন" },
      text: { en: "Connecting your site to third-party APIs, data sources and services.", bn: "আপনার সাইটকে বিভিন্ন API, ডেটা সোর্স আর সার্ভিসের সাথে যুক্ত করা।" } },
    { icon: "🌐", title: { en: "Hosting & Domains", bn: "হোস্টিং ও ডোমেইন" },
      text: { en: "Deploying on GitHub Pages and connecting your custom domain with HTTPS.", bn: "GitHub Pages-এ লাইভ করা আর HTTPS সহ আপনার নিজের ডোমেইন যুক্ত করা।" } }
  ],

  // Contact — replace placeholders with your real details, then set placeholder: false
  contact: [
    { type: "github", label: "GitHub", value: "github.com/mdrbnbd", url: "https://github.com/mdrbnbd", icon: "🐙" },
    { type: "email", label: "Email", value: "you@example.com", url: "mailto:you@example.com", icon: "✉️", placeholder: true },
    { type: "whatsapp", label: "WhatsApp", value: "+8801XXXXXXXXX", url: "", icon: "💬", placeholder: true },
    { type: "facebook", label: "Facebook", value: "facebook.com/your-profile", url: "", icon: "📘", placeholder: true }
  ]
};

/* ============================ UI TEXT ============================ */
const I18N = {
  en: {
    "ui.skip": "Skip to content",
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.services": "Services", "nav.contact": "Contact",
    "hero.status": "Available for freelance work", "hero.hi": "Hi, I'm",
    "hero.cta1": "View my work", "hero.cta2": "Hire me",
    "skills.sub": "Tools and technologies I use every day.",
    "projects.sub": "Things I've built and shipped.",
    "services.sub": "How I can help you.",
    "contact.text": "Have a project in mind? Let's build it together.",
    "footer.made": "Built with HTML, CSS & JavaScript · Hosted on GitHub Pages",
    "footer.top": "Back to top ↑",
    live: "Live site", code: "Source code", featured: "Featured", placeholder: "Placeholder",
    copy: "Copy", copied: "Copied!", lang: "বাংলা"
  },
  bn: {
    "ui.skip": "মূল অংশে যান",
    "nav.about": "পরিচিতি", "nav.skills": "দক্ষতা", "nav.projects": "প্রজেক্ট", "nav.services": "সেবা", "nav.contact": "যোগাযোগ",
    "hero.status": "ফ্রিল্যান্স কাজের জন্য প্রস্তুত", "hero.hi": "হাই, আমি",
    "hero.cta1": "আমার কাজ দেখুন", "hero.cta2": "কাজ দিন",
    "skills.sub": "যেসব টুল আর প্রযুক্তি দিয়ে প্রতিদিন কাজ করি।",
    "projects.sub": "যা বানিয়েছি আর লাইভ করেছি।",
    "services.sub": "আমি আপনাকে যেভাবে সাহায্য করতে পারি।",
    "contact.text": "কোনো প্রজেক্টের আইডিয়া আছে? চলুন একসাথে বানাই।",
    "footer.made": "HTML, CSS ও JavaScript দিয়ে তৈরি · GitHub Pages-এ হোস্ট করা",
    "footer.top": "উপরে যান ↑",
    live: "লাইভ সাইট", code: "সোর্স কোড", featured: "ফিচার্ড", placeholder: "প্লেসহোল্ডার",
    copy: "কপি", copied: "কপি হয়েছে!", lang: "English"
  }
};

/* ============================ APP ============================ */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const root = document.documentElement;
  let lang = root.lang === "bn" ? "bn" : "en";
  const t = (v) => (v && typeof v === "object" ? v[lang] ?? v.en : v);
  const ui = (k) => I18N[lang][k] ?? I18N.en[k] ?? k;
  const phBadge = () => `<span class="badge badge--ph">${ui("placeholder")}</span>`;

  function render() {
    root.lang = lang;
    document.querySelectorAll("[data-cfg]").forEach((el) => (el.textContent = CONFIG[el.dataset.cfg]));
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.dataset.i18n;
      el.textContent = CONFIG[k] !== undefined ? t(CONFIG[k]) : ui(k);
    });
    $("#langToggle").textContent = ui("lang");
    $("#langToggle").setAttribute("aria-label", lang === "en" ? "বাংলায় দেখুন" : "Switch to English");
    $(".eyebrow").hidden = !CONFIG.availableForWork;

    $("#stats").innerHTML = CONFIG.stats.map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(t(s.label))}</span></li>`).join("");

    $("#skillsList").innerHTML = CONFIG.skills.map((s, i) => `
      <div class="skill reveal" style="--d:${i * 60}ms">
        <div class="skill__head"><span class="skill__icon" aria-hidden="true">${esc(s.icon)}</span><span>${esc(s.name)}</span></div>
        <div class="bar" role="progressbar" aria-label="${esc(s.name)}" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100"><span style="--w:${s.level}%"></span></div>
      </div>`).join("");

    $("#projectsList").innerHTML = CONFIG.projects.map((p, i) => `
      <article class="project reveal ${p.featured ? "project--featured" : ""} ${p.placeholder ? "is-ph" : ""}" style="--d:${i * 80}ms">
        <div class="project__media" aria-hidden="true"><span>${esc(p.emoji || "🌐")}</span></div>
        <div class="project__body">
          <div class="project__badges">${p.featured ? `<span class="badge">${ui("featured")}</span>` : ""}${p.placeholder ? phBadge() : ""}</div>
          <h3>${esc(t(p.title))}</h3>
          <p>${esc(t(p.description))}</p>
          <ul class="tags">${(p.tags || []).map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
          <div class="project__links">
            ${p.live ? `<a class="btn btn--primary btn--sm" href="${esc(p.live)}" target="_blank" rel="noopener">${ui("live")} ↗</a>` : ""}
            ${p.repo ? `<a class="btn btn--ghost btn--sm" href="${esc(p.repo)}" target="_blank" rel="noopener">${ui("code")}</a>` : ""}
          </div>
        </div>
      </article>`).join("");

    $("#servicesList").innerHTML = CONFIG.services.map((s, i) => `
      <div class="service reveal" style="--d:${i * 70}ms">
        <span class="service__icon" aria-hidden="true">${esc(s.icon)}</span>
        <h3>${esc(t(s.title))}</h3><p>${esc(t(s.text))}</p>
      </div>`).join("");

    $("#contactList").innerHTML = CONFIG.contact.map((c) => {
      const inner = `<span class="contact__icon" aria-hidden="true">${esc(c.icon)}</span>
        <span class="contact__txt"><small>${esc(c.label)} ${c.placeholder ? phBadge() : ""}</small><strong>${esc(c.value)}</strong></span>`;
      const href = c.placeholder ? "" : c.url;
      return href
        ? `<a class="contact__item" href="${esc(href)}" target="_blank" rel="noopener">${inner}<span class="arrow" aria-hidden="true">↗</span></a>`
        : `<div class="contact__item ${c.placeholder ? "is-ph" : ""}">${inner}<button class="copy" type="button" data-copy="${esc(c.value)}">${ui("copy")}</button></div>`;
    }).join("");

    observe();
  }

  // Scroll reveal
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 })
    : null;
  function observe() {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  }

  // Theme
  $("#themeToggle").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    $('meta[name="theme-color"]').content = next === "light" ? "#f6f7fb" : "#0b0d17";
  });

  // Language
  $("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "bn" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });

  // Mobile menu
  const menuBtn = $("#menuToggle"), links = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => { if (e.target.closest("a")) { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });

  // Copy buttons
  document.addEventListener("click", async (e) => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = ui("copied"); setTimeout(() => (b.textContent = ui("copy")), 1500); } catch (err) {}
  });

  // Header shadow + active link
  const header = $(".nav");
  const sections = [...document.querySelectorAll("main section[id]")];
  const onScroll = () => {
    header.classList.toggle("scrolled", scrollY > 10);
    let cur = "";
    sections.forEach((s) => { if (scrollY + 120 >= s.offsetTop) cur = s.id; });
    links.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  };
  addEventListener("scroll", onScroll, { passive: true });

  $("#year").textContent = new Date().getFullYear();
  if (root.dataset.theme === "light") $('meta[name="theme-color"]').content = "#f6f7fb";
  render();
  onScroll();
})();
