// ─── Data ────────────────────────────────────────────────────────────────────
const cardsData = [
  {
    id: "it",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
           </svg>`,
    title: "IT",
    desc: "AI-powered agents for proactive IT support and infrastructure monitoring—resolving incidents faster, enhancing security, and ensuring uptime.",
    active: false,
  },
  {
    id: "marketing",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
             <rect x="2" y="3" width="20" height="14" rx="2"/>
             <path d="M8 21h8M12 17v4"/>
           </svg>`,
    title: "Marketing",
    desc: "Drive higher ROI with AI agents that power hyper-personalized campaigns and real-time performance optimization.",
    active: false,
  },
  {
    id: "customer-support",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
           </svg>`,
    title: "Customer Support",
    desc: "Deliver exceptional support with scalable Agentic AI—faster resolutions, higher CSAT, and lower operational costs from first contact to close.",
    active: true,
  },
  {
    id: "sales",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
             <line x1="12" y1="1" x2="12" y2="23"/>
             <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
           </svg>`,
    title: "Sales",
    desc: "Accelerate your sales funnel with AI-driven lead qualification, deal acceleration, and actionable insights for smarter selling.",
    active: false,
  },
  {
    id: "hr",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
             <circle cx="12" cy="7" r="4"/>
           </svg>`,
    title: "Human Resource",
    desc: "Transform HR with intelligent agents that optimize talent acquisition, boost retention, and enable data-driven workforce management.",
    active: false,
  },
];

// ─── Helper: create element with class + optional innerHTML ──────────────────
function createElement(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML) el.innerHTML = innerHTML;
  return el;
}

// ─── Build a single card ─────────────────────────────────────────────────────
function buildCard(data, index) {
  const card = createElement("div", "card" + (data.active ? " active" : ""));
  card.dataset.id = data.id;
  card.style.animationDelay = `${index * 0.12}s`;

  const iconWrap = createElement("div", "card-icon", data.icon);
  const title    = createElement("h3", "card-title", data.title);
  const desc     = createElement("p",  "card-desc",  data.desc);

  card.appendChild(iconWrap);
  card.appendChild(title);
  card.appendChild(desc);

  return card;
}

// ─── Build robot mascot ──────────────────────────────────────────────────────
function buildRobot() {
  const wrap = createElement("div", "robot-wrap");
  const img  = createElement("img");
  img.src    = "robot.png";          // ← place your robot image here
  img.alt    = "EDS AI Robot Mascot";
  img.className = "robot-img";
  wrap.appendChild(img);
  return wrap;
}

// ─── Build the full section ──────────────────────────────────────────────────
function buildSection() {
  // Outer section
  const section = createElement("section", "ai-agents-section");

  // Background blobs (decorative)
  const blob1 = createElement("div", "bg-blob blob-1");
  const blob2 = createElement("div", "bg-blob blob-2");
  section.appendChild(blob1);
  section.appendChild(blob2);

  // Heading
  const heading = createElement("h2", "section-heading", "AI Agents Engineered for Your Business Functions");
  section.appendChild(heading);

  // Cards wrapper
  const cardsWrapper = createElement("div", "cards-wrapper");

  cardsData.forEach((data, index) => {
    const card = buildCard(data, index);

    // Click: toggle active
    card.addEventListener("click", () => {
      document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });

    cardsWrapper.appendChild(card);
  });

  section.appendChild(cardsWrapper);

  // Robot mascot
  const robot = buildRobot();
  section.appendChild(robot);

  // Mount to DOM
  document.getElementById("root").appendChild(section);
}

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", buildSection);