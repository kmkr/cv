/**
 * Curriculum Vitae Data in English and Norwegian
 */
const cvData = {
  en: {
    title: "Curriculum Vitae | Kris-Mikael Krister",
    metaDescription: "Curriculum Vitae – Kris-Mikael Krister",
    eyebrow: "Curriculum Vitae",
    name: "Kris-Mikael Krister",
    role: "Senior Software Engineer and Engineering Manager",
    photo: "242216.jpeg",
    photoAlt: "Portrait photo of Kris-Mikael Krister",
    contactAriaLabel: "Contact information",
    contact: [
      { key: "Location", val: "Finnsnes, Norway", icon: "📍" },
      { key: "Date of birth", val: "August 22, 1985", icon: "🎂" },
      {
        key: "Phone",
        val: "+47 97 15 26 92",
        icon: "📞",
        href: "tel:+4797152692",
      },
      {
        key: "Email",
        val: "krismikael@proton.me",
        icon: "✉️",
        href: "mailto:krismikael@proton.me",
      },
      {
        key: "LinkedIn",
        val: "krismikaelkrister",
        icon: "🔗",
        href: "https://www.linkedin.com/in/krismikaelkrister/",
      },
    ],
    sections: [
      {
        id: "profile",
        title: "Key qualifications",
        type: "summary",
        paragraphs: [
          "Software engineer, technical leader, and engineering manager with 17 years of professional experience. As a leader, I work to build robust teams, and as an engineer, I build digital products that effectively help users and that developers love working on. Regardless of role, I work to help people succeed in their roles and thrive together.",
          "I work across the full stack, building backend and frontend systems, user interfaces, and APIs. I primarily code in TypeScript, JavaScript, and Python, while also having experience with several other programming languages. I get great value from AI agents to increase my speed, without letting them take over control or direction. Throughout most of my career, I've worked closely with product managers and UX designers, staying in continuous dialogue with real users of what I and my teams have built.",
          "I enjoy working both independently and as part of a team. I value clarity, and I'm thorough and responsible while also being warm and collaborative 🫂",
        ],
      },
      {
        id: "experience",
        title: "Professional experience",
        type: "experience",
        items: [
          {
            title:
              "Senior Software Engineer, Engineering Manager and Principal Engineer",
            subtitle: "Otovo ASA",
            description:
              "Joined Otovo as its 10th employee and helped build the company from its early startup phase to operations across 13 countries and over 500 employees. Over eight years, I planned, developed, and launched thousands of features, large and small, across the platform, while also building and leading engineering teams. I worked full-stack, collaborated daily with product owners and stakeholders, supported other teams, and worked closely with interaction designers to shape the products we built.",
            meta: "2018 – 2026",
          },
          {
            title: "Senior Consultant",
            subtitle: "Miles AS",
            description:
              "Software development and architecture at FINN.no and NRK. Worked on the FINN frontend core team, FINN Småjobber, FINN Oppdrag, and the NRK Super team.",
            meta: "2017 – 2018",
          },
          {
            title: "Senior Consultant",
            subtitle: "Webstep AS",
            description:
              "Software development and architecture at Gjensidige and FINN.no.",
            meta: "2013 – 2017",
          },
          {
            title: "Senior Consultant",
            subtitle: "Itera Consulting",
            description:
              "Software development and architecture at KLP and Gjensidige.",
            meta: "2009 – 2013",
          },
          {
            title: "Department Engineer",
            subtitle:
              "Norwegian National Security Authority (NSM), NorCERT",
            description:
              "Monitoring and analysis of traffic across critical internet infrastructure in Norway.",
            meta: "Summer 2008",
          },
          {
            title: "IT Support",
            subtitle: "NTNU IT Department, Orakeltjenesten",
            description:
              "Resolved inquiries related to NTNU's central IT systems. Troubleshot hardware and software issues at application and operating system levels.",
            meta: "2005 – 2008",
          },
        ],
      },
      {
        id: "education",
        title: "Education",
        type: "list",
        items: [
          {
            title: "Master of Computer Science (Sivilingeniør)",
            subtitle: "Norwegian University of Science and Technology (NTNU)",
            description: "Specialisation in IT security and vulnerabilities.",
            meta: "2004 – 2009",
          },
          {
            title: "General university admissions certification",
            subtitle: "Sandefjord Videregående Skole (SVGS)",
            description: "Specialisation in natural sciences and mathematics.",
            meta: "2001 – 2004",
          },
        ],
      },
      {
        id: "programming-languages",
        title: "Programming languages & technology stack",
        type: "language-list",
        items: [
          {
            title: "TypeScript & JavaScript",
            tags: [
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Next.js",
              "React",
              "Angular",
              "jQuery",
            ],
            description:
              "17 years of experience with JavaScript and over five years with TypeScript. Extensive experience with modern frontend frameworks and Node.js backends. Also experienced with earlier frameworks such as jQuery, Backbone.js and many others; feel free to ask for details.",
          },
          {
            title: "Python",
            tags: ["Python", "Django", "PostgreSQL", "FastAPI", "Pandas"],
            description:
              "Eight years of experience with Python, primarily using Django and PostgreSQL.",
          },
          {
            title: "Java",
            tags: ["Java", "Spring", "Oracle", "Hibernate"],
            description:
              "Eight years of experience with Java, primarily using Spring and Oracle databases.",
          },
        ],
      },
      {
        id: "additional",
        title: "Additional information",
        type: "list",
        items: [
          {
            title: "Driving licence",
            subtitle: "Category B (passenger car)",
            description: "",
          },
          {
            title: "Languages",
            subtitle: "Norwegian & English",
            description: "Norwegian – native; English – fluent written and spoken.",
          },
          {
            title: "References",
            subtitle: "Available upon request",
            description: "",
          },
        ],
      },
    ],
    footerUpdated: "Last updated",
  },
  no: {
    title: "Curriculum Vitae | Kris-Mikael Krister",
    metaDescription: "Curriculum Vitae – Kris-Mikael Krister",
    eyebrow: "Curriculum Vitae",
    name: "Kris-Mikael Krister",
    role: "Senior programvareutvikler og Engineering Manager",
    photo: "242216.jpeg",
    photoAlt: "Portrettfoto av Kris-Mikael Krister",
    contactAriaLabel: "Kontaktinformasjon",
    contact: [
      { key: "Bosted", val: "Finnsnes, Troms", icon: "📍" },
      { key: "Født", val: "22. august 1985", icon: "🎂" },
      {
        key: "Telefon",
        val: "+47 97 15 26 92",
        icon: "📞",
        href: "tel:+4797152692",
      },
      {
        key: "E-post",
        val: "krismikael@proton.me",
        icon: "✉️",
        href: "mailto:krismikael@proton.me",
      },
      {
        key: "LinkedIn",
        val: "krismikaelkrister",
        icon: "🔗",
        href: "https://www.linkedin.com/in/krismikaelkrister/",
      },
    ],
    sections: [
      {
        id: "profile",
        title: "Nøkkelkvalifikasjoner",
        type: "summary",
        paragraphs: [
          "Programvareutvikler, teknisk leder og engineering manager med 17 års profesjonell erfaring. Som leder jobber jeg for å bygge robuste team, og som koder bygger jeg digitale produkter som effektivt hjelper brukerne og som kodere elsker å jobbe med. Uavhengig av rolle jobber jeg for å hjelpe folk med å lykkes i rollene sine og for å trives sammen.",
          "Jeg jobber på tvers av hele stacken med backend- og frontendsystemer, brukergrensesnitt og API-er. Primært koder jeg i TypeScript, JavaScript og Python, men har erfaring med flere andre programmeringsspråk. Jeg drar god nytte av AI-agenter til å øke farten min, uten å la dem ta over styringen eller retningen. Gjennom mesteparten av karrieren har jeg jobbet tett med produktledere og UX-designere og vært i kontinuerlig dialog med ekte brukere av det jeg, og teamene mine, har laget.",
          "Jeg trives godt med både selvstendig arbeid og tett arbeid i team. Jeg verdsetter klarhet og er grundig og ansvarsbevisst, samtidig som jeg er varm og inkluderende 🫂",
        ],
      },
      {
        id: "experience",
        title: "Yrkeserfaring",
        type: "experience",
        items: [
          {
            title:
              "Senior Software Engineer, Engineering Manager og Principal Engineer",
            subtitle: "Otovo ASA",
            description:
              "Ble ansatt som den 10. personen i Otovo og var med på å bygge selskapet fra tidlig oppstartsfase til virksomhet i 13 land og over 500 ansatte. Gjennom åtte år planla, utviklet og lanserte jeg tusenvis av funksjoner, store og små, på tvers av plattformen, samtidig som jeg bygget og ledet utviklingsteam. Jeg jobbet fullstack, samarbeidet daglig med produkteiere og andre interessenter, støttet andre team, og jobbet tett med interaksjonsdesignere for å forme produktene vi bygde.",
            meta: "2018 – 2026",
          },
          {
            title: "Seniorkonsulent",
            subtitle: "Miles AS",
            description:
              "Programvareutvikling og arkitektur hos FINN.no og NRK. Jobbet i FINN frontend kjerneteam, i FINN Småjobber, i FINN Oppdrag og i NRK Super-teamet.",
            meta: "2017 – 2018",
          },
          {
            title: "Seniorkonsulent",
            subtitle: "Webstep AS",
            description:
              "Programvareutvikling og arkitektur hos Gjensidige og FINN.no.",
            meta: "2013 – 2017",
          },
          {
            title: "Seniorkonsulent",
            subtitle: "Itera Consulting",
            description:
              "Programvareutvikling og arkitektur hos KLP og Gjensidige.",
            meta: "2009 – 2013",
          },
          {
            title: "Avdelingsingeniør",
            subtitle: "Nasjonal sikkerhetsmyndighet (NSM), NorCERT",
            description:
              "Overvåking og analyse av trafikk på tvers av kritisk internettinfrastruktur i Norge.",
            meta: "Sommeren 2008",
          },
          {
            title: "IT-support",
            subtitle: "NTNU IT-avdeling, Orakeltjenesten",
            description:
              "Løste henvendelser knyttet til NTNUs sentrale IT-systemer. Feilsøking av maskin- og programvare på applikasjons- og operativsystemnivå.",
            meta: "2005 – 2008",
          },
        ],
      },
      {
        id: "education",
        title: "Utdanning",
        type: "list",
        items: [
          {
            title: "Master i datateknologi (Sivilingeniør)",
            subtitle: "Norges teknisk-naturvitenskapelige universitet (NTNU)",
            description: "Spesialisering innen IT-sikkerhet og sårbarheter.",
            meta: "2004 – 2009",
          },
          {
            title: "Generell studiekompetanse",
            subtitle: "Sandefjord Videregående Skole (SVGS)",
            description: "Realfaglig fordypning.",
            meta: "2001 – 2004",
          },
        ],
      },
      {
        id: "programming-languages",
        title: "Programmeringsspråk og teknologistack",
        type: "language-list",
        items: [
          {
            title: "TypeScript & JavaScript",
            tags: [
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Next.js",
              "React",
              "Angular",
              "jQuery",
            ],
            description:
              "17 års erfaring med JavaScript og over fem år med TypeScript. Omfattende erfaring med moderne frontend-rammeverk og Node.js-backends. Har også erfaring med eldre rammeverk som for eksempel jQuery, Backbone.js og mange flere, spør gjerne om mer detaljer.",
          },
          {
            title: "Python",
            tags: ["Python", "Django", "PostgreSQL", "FastAPI", "Pandas"],
            description:
              "Åtte års erfaring med Python, primært med Django og PostgreSQL.",
          },
          {
            title: "Java",
            tags: ["Java", "Spring", "Oracle", "Hibernate"],
            description:
              "Åtte års erfaring med Java, primært med Spring og Oracle-databaser.",
          },
        ],
      },
      {
        id: "additional",
        title: "Annen informasjon",
        type: "list",
        items: [
          {
            title: "Førerkort",
            subtitle: "Klasse B (personbil)",
            description: "",
          },
          {
            title: "Språk",
            subtitle: "Norsk & Engelsk",
            description:
              "Norsk – morsmål; Engelsk – flytende skriftlig og muntlig.",
          },
          {
            title: "Referanser",
            subtitle: "Tilgjengelig på forespørsel",
            description: "",
          },
        ],
      },
    ],
    footerUpdated: "Sist oppdatert",
  },
};

const escapeHtml = (value) =>
  String(value || "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char] || char,
  );

/**
 * Render contact list item
 */
const renderContactItem = (item) => {
  const content = item.href
    ? `<a href="${escapeHtml(item.href)}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(item.val)}</a>`
    : escapeHtml(item.val);

  return `
    <li class="contact-list-item">
      <span class="contact-icon" aria-hidden="true">${item.icon}</span>
      <span class="contact-label">${escapeHtml(item.key)}</span>
      <span class="contact-val">${content}</span>
    </li>
  `;
};

/**
 * Render timeline items (experience, education, additional)
 */
const renderTimelineItem = (item) => {
  const subtitleHtml = item.subtitle
    ? ` · <span class="timeline-subtitle">${escapeHtml(item.subtitle)}</span>`
    : "";

  return `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-header">
        <h4 class="timeline-title">${escapeHtml(item.title)}${subtitleHtml}</h4>
        ${item.meta ? `<span class="timeline-badge">${escapeHtml(item.meta)}</span>` : ""}
      </div>
      ${item.description ? `<p class="timeline-desc">${escapeHtml(item.description)}</p>` : ""}
    </article>
  `;
};

/**
 * Render skills cards with tags
 */
const renderSkillCard = (item) => {
  const tagsHtml =
    item.tags && item.tags.length
      ? `<ul class="skill-tag-list">${item.tags.map((t) => `<li class="skill-tag">${escapeHtml(t)}</li>`).join("")}</ul>`
      : "";

  return `
    <div class="skill-card">
      <h4 class="skill-card-title">${escapeHtml(item.title)}</h4>
      ${tagsHtml}
      <p class="skill-card-desc">${escapeHtml(item.description)}</p>
    </div>
  `;
};

/**
 * Render CV section
 */
const renderSection = (section) => {
  let content = "";

  if (section.type === "summary") {
    const paragraphs = section.paragraphs || [];
    content = `
      <div class="cv-summary-box">
        ${paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      </div>
    `;
  } else if (section.type === "experience" || section.type === "list") {
    content = `
      <div class="timeline-container">
        ${section.items.map(renderTimelineItem).join("")}
      </div>
    `;
  } else if (section.type === "language-list") {
    content = `
      <div class="skills-grid">
        ${section.items.map(renderSkillCard).join("")}
      </div>
    `;
  }

  return `
    <section id="${escapeHtml(section.id)}" class="cv-section">
      <h3 class="cv-section-title">${escapeHtml(section.title)}</h3>
      ${content}
    </section>
  `;
};

let currentLang = "en";

/**
 * Set the current language and re-render the CV
 */
function setLanguage(lang, updateUrl = false) {
  if (lang !== "en" && lang !== "no") lang = "en";
  currentLang = lang;

  try {
    localStorage.setItem("preferred_lang", lang);
  } catch (e) {
    // localStorage might be unavailable in restricted environments
  }

  if (updateUrl) {
    try {
      const url = new URL(window.location);
      if (lang === "en") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", lang);
      }
      window.history.replaceState({}, "", url);
    } catch (e) {}
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  const data = cvData[lang];
  if (!data) return;

  // Update document title and description
  document.title = data.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", data.metaDescription);
  }

  // Update header text
  const eyebrowEl = document.querySelector("#cv-eyebrow");
  if (eyebrowEl) eyebrowEl.textContent = data.eyebrow;

  const nameEl = document.querySelector("#applicant-name");
  if (nameEl) nameEl.textContent = data.name;

  const roleEl = document.querySelector("#cv-role");
  if (roleEl) roleEl.textContent = data.role;

  const photoEl = document.querySelector("#profile-photo");
  if (photoEl && data.photo) {
    photoEl.src = data.photo;
    photoEl.alt = data.photoAlt;
  }

  // Update contact list
  const contactContainer = document.querySelector("#kontakt");
  if (contactContainer) {
    contactContainer.setAttribute("aria-label", data.contactAriaLabel);
    contactContainer.innerHTML = data.contact.map(renderContactItem).join("");
  }

  // Update CV sections
  const cvContentContainer = document.querySelector("#cv-content");
  if (cvContentContainer) {
    cvContentContainer.innerHTML = data.sections.map(renderSection).join("");
  }

  // Update footer
  const footerYear = new Date().getFullYear();
  const footerEl = document.querySelector("#last-updated");
  if (footerEl) {
    footerEl.textContent = `${data.footerUpdated} ${footerYear}`;
  }

  // Update toggle buttons active state and ARIA
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    const isActive = btnLang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

/**
 * Determine initial language:
 * 1. URL search param ?lang=no or ?lang=en
 * 2. Saved preference in localStorage
 * 3. Default to English ('en')
 */
function getInitialLanguage() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");
    if (langParam === "en" || langParam === "no") {
      return langParam;
    }
  } catch (e) {}

  try {
    const saved = localStorage.getItem("preferred_lang");
    if (saved === "en" || saved === "no") {
      return saved;
    }
  } catch (e) {}

  return "en"; // Default is English
}

/**
 * Initialize language toggle button events
 */
function initLanguageToggle() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang && selectedLang !== currentLang) {
        setLanguage(selectedLang, true);
      }
    });
  });

  // Support browser navigation (forward/back)
  window.addEventListener("popstate", () => {
    const lang = getInitialLanguage();
    if (lang !== currentLang) {
      setLanguage(lang, false);
    }
  });
}

let initialized = false;
function init() {
  if (initialized) return;
  initialized = true;

  initLanguageToggle();
  setLanguage(getInitialLanguage(), false);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
