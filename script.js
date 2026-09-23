const cvData = {
  name: "Kris-Mikael Krister",
  role: "Senior Software Engineer and Engineering Manager",
  photo: "242216.jpeg",
  contact: [
    ["Address", "Erling Nilssens vei 18, 9300 Finnsnes"],
    ["Date of birth", "1985-08-22"],
    ["Phone", "+47 97 15 26 92"],
    ["Email", "krismikael@proton.me"],
    ["LinkedIn", "https://www.linkedin.com/in/krismikaelkrister/"],
  ],
  sections: [
    {
      id: "profile",
      title: "Key qualifications",
      type: "summary",
      paragraphs: [
        "Software engineer, technical leader and engineering manager with 16 years of professional experience. I love building strong teams and high-quality products. I'm dedicated to helping people shine in their roles and thrive together.",
        "I work across the full stack, building backend and frontend systems, user interfaces, and APIs. I primarily write TypeScript, JavaScript, and Python. I get help from AI agents, but I don't let them run wild or determine my direction. Throughout most of my career, I've worked closely with product managers and UX designers, having regular contact with real users.",
        "I enjoy working both independently and as part of a team. I value clarity, and I'm thorough and responsible while also being warm and collaborative.",
      ],
    },
    {
      id: "education",
      title: "Education",
      type: "list",
      items: [
        {
          title: "Master of Computer Science",
          description:
            "Specialisation in security and vulnerabilities, Norwegian University of Science and Technology (NTNU)",
          meta: "2004 - 2009",
        },
        {
          title: "General university admissions certification",
          description: "Sandefjord Videregående Skole (SVGS)",
          meta: "2001 - 2004",
        },
      ],
    },
    {
      id: "experience",
      title: "Professional experience",
      type: "experience",
      items: [
        {
          title:
            "Senior Software Engineer, Engineering Manager and Principal Engineer at Otovo ASA",
          description:
            "Joined Otovo as its 10th employee and helped scale the company from its early stage to operations in 13 countries and more than 500 employees. Over eight years, I built and launched product features across the platform, while also building and leading engineering teams through the company's growth.",
          meta: "2018 - 2026",
        },
        {
          title: "Senior Consultant, Miles AS",
          description:
            "Software development and architecture at FINN.no and NRK.",
          meta: "2017 - 2018",
        },
        {
          title: "Senior Consultant, Webstep AS",
          description:
            "Software development and architecture at Gjensidige and FINN.no.",
          meta: "2013 - 2017",
        },
        {
          title: "Senior Consultant, Itera Consulting",
          description:
            "Software development and architecture at KLP and Gjensidige.",
          meta: "2009 - 2013",
        },
        {
          title:
            "Department Engineer, Norwegian National Security Authority, NorCERT",
          description:
            "Monitoring and analysis of traffic across critical internet infrastructure in Norway.",
          meta: "Summer 2008",
        },
        {
          title: "IT Support, NTNU IT Department, Orakeltjenesten",
          description:
            "Resolved issues related to NTNU's central IT systems. Troubleshot hardware and software problems at the application and operating system level.",
          meta: "2005 - 2008",
        },
      ],
    },
    {
      id: "programming-languages",
      title: "Programming languages",
      type: "language-list",
      items: [
        {
          title: "TypeScript and JavaScript",
          description:
            "16 years of experience with JavaScript and around five years with TypeScript, primarily using Node.js, Next.js, React, Angular, jQuery, and Backbone.js.",
        },
        {
          title: "Python",
          description:
            "Eight years of experience with Python, primarily using Django and PostgreSQL.",
        },
        {
          title: "Java",
          description:
            "Eight years of experience with Java, primarily using Spring and Oracle.",
        },
      ],
    },
    {
      id: "additional",
      title: "Additional information",
      type: "list",
      items: [
        { title: "Driving licence", description: "Category B" },
        {
          title: "Languages",
          description: "Norwegian - native; English - fluent.",
        },
      ],
    },
  ],
};

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );

const renderContact = ([label, value]) => {
  const content = value.startsWith("https://")
    ? `<a href="${escapeHtml(value)}">${escapeHtml(value)}</a>`
    : escapeHtml(value);
  return `<dt>${escapeHtml(label)}</dt><dd>${content}</dd>`;
};

const renderItem = (item) => `
  <article class="timeline-item">
    <span class="bullet" aria-hidden="true"></span>
    <div>
      <p class="item-title">${escapeHtml(item.title)}</p>
      <p class="item-description">${escapeHtml(item.description || "")}</p>
    </div>
    ${item.meta ? `<time class="item-meta">${escapeHtml(item.meta)}</time>` : "<span></span>"}
  </article>`;

const renderSection = (section) => {
  let content;
  if (section.type === "summary") {
    const paragraphs = section.paragraphs || [section.text];
    content = paragraphs
      .map((paragraph, index) => {
        const hug =
          section.id === "profile" && index === paragraphs.length - 1
            ? ' <span class="hug-emoji" aria-label="hugging">🫂</span>'
            : "";
        return `<p class="summary">${escapeHtml(paragraph)}${hug}</p>`;
      })
      .join("");
  }
  if (
    section.type === "list" ||
    section.type === "experience" ||
    section.type === "language-list"
  )
    content = section.items.map(renderItem).join("");
  return `<section id="${escapeHtml(section.id)}" class="cv-section"><h2 class="section-heading">${escapeHtml(section.title)}</h2>${content}</section>`;
};

document.querySelector("#person-name").textContent = cvData.name;
document.querySelector("#role").textContent = cvData.role;
const photo = document.querySelector("#profile-photo");
if (cvData.photo) {
  photo.src = cvData.photo;
  photo.hidden = false;
  photo.alt = `${cvData.name} profile photo`;
}
document.querySelector("#contact-info").innerHTML = cvData.contact
  .map(renderContact)
  .join("");
document.querySelector("#cv-content").innerHTML = cvData.sections
  .map(renderSection)
  .join("");
document.querySelector("#last-updated").textContent =
  `Last updated ${new Date().getFullYear()}`;
