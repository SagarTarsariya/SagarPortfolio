// ---- Edit these three values with your real links ----
const EMAIL = "tarsariyasagar19@gmail.com";
const GITHUB = "https://github.com/SagarTarsariya";
const LINKEDIN = "https://www.linkedin.com/in/sagar-tarsariya-686769246";
// ------------------------------------------------------

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Project data ----------
const PROJECTS = [
  { cat: "apps", tag: "Client App", icon: "🛠️", grad: "t1",
    title: "Kolors: Die & Tool Tracking",
    desc: "I built this web app for a manufacturing company to track dies, parts and production in their workshop.",
    points: [
      "I made separate Admin and Workshop logins, with an English and Hindi interface.",
      "I added new die entry with Excel/CSV import for plates, parts and child parts.",
      "I built project scheduling, plus employee and machine/shift management.",
      "I added work progress entry per machine, die, plate, part and employee.",
      "I built outsourcing to vendors with status tracking, and a die tracker by project ID."
    ],
    stack: ["Web App", "Excel/CSV Import", "Cloudflare Pages"], link: "https://kolors.pages.dev" },
  { cat: "apps", tag: "Client App", icon: "👗", grad: "t2",
    title: "Bansi Fashion App",
    desc: "I developed this web app for Bansi Fashion and deployed it on Cloudflare Pages.",
    points: [
      "I built and delivered it end to end for the client.",
      "I deployed it on Cloudflare Pages for fast, always-on access."
    ],
    stack: ["Web App", "Cloudflare Pages"], link: "https://bansifashion.pages.dev" },

  { cat: "trading", tag: "Trading", icon: "📈", grad: "t3",
    title: "Options Backtesting Engine",
    desc: "I built a high-performance engine that tests trading strategies on multi-year market datasets.",
    points: [
      "I used Polars and Pandas to keep it fast on very large datasets.",
      "It supports dynamic stop-loss logic, strike selection rules and PnL computation.",
      "I automated numeric and date corrections so results stay accurate.",
      "It lets me compare complex strategies across different market conditions."
    ],
    stack: ["Python", "Polars", "Pandas"] },
  { cat: "trading", tag: "Live", icon: "📡", grad: "t4",
    title: "Live Dashboard: Paper vs Actual",
    desc: "I built a live trading dashboard that compares each strategy's paper results with actual live fills.",
    points: [
      "It shows open positions, tradebook and paper views, with a light and dark theme.",
      "I added bulk StopLimit and Limit order panels that list open legs.",
      "It generates an end-of-day ZIP with one CSV per client.",
      "It reads each strategy engine's JSON state, so restarting the dashboard never affects a running engine."
    ],
    stack: ["Flask", "Broker API", "JSON State"], link: "https://livedashboard.successure.in" },
  { cat: "trading", tag: "Reports", icon: "📊", grad: "t5",
    title: "All-Strategy Dashboards Hub",
    desc: "I created one launcher for 12 daily strategy and reporting dashboards, each on its own subdomain.",
    points: [
      "It links to a dashboard for every live and backtested strategy.",
      "I built a cost dashboard for code-wise cost and brokerage analysis.",
      "I built a trade-files mail generator that creates and mails client trade files.",
      "I added a monthly employee report for attendance and work duration."
    ],
    stack: ["Flask", "JavaScript", "Excel Export", "Email"], link: "https://dashboards.successure.in" },
  { cat: "trading", tag: "Live", icon: "🔍", grad: "t6",
    title: "MTF Dashboard & Screener",
    desc: "I built an India MTF dashboard with Dashboard, Trends and Screener views.",
    points: [
      "I run it on its own port, separate from the live trading screens.",
      "The screener sorts and filters thousands of stocks per request.",
      "A nightly fetch and build pipeline writes Parquet data for it."
    ],
    stack: ["Flask", "Parquet", "Polars"], link: "https://mtf.successure.in" },
  { cat: "trading", tag: "Live", icon: "🔔", grad: "t7",
    title: "Live Stock Watch & Alerts",
    desc: "I built a price-alert dashboard for NSE equities and futures with percent-change alerts.",
    points: [
      "It has Equity, Futures and Stock views, with an equity-vs-futures difference table.",
      "I added stock-wise alerts from a chosen base price (open, previous close, LTP, high, low or manual).",
      "It keeps an alert log with date filters and Excel export, plus optional voice alerts.",
      "The feed runs on a schedule with a watchdog, on top of a broker market feed."
    ],
    stack: ["Market Feed", "Polars", "Alerts", "Excel Export"], link: "https://stocks.successure.in" },
  { cat: "trading", tag: "Live", icon: "🖥️", grad: "t8",
    title: "Sector Futures/Cash Dashboard",
    desc: "I built a live sector-wise futures and cash view driven by an Excel watchlist.",
    points: [
      "I wrote the backend in FastAPI and the frontend in Vite.",
      "I used the broker REST API for quotes, so there are no WebSocket connection limits.",
      "The watchlist and sectors come from an Excel sheet."
    ],
    stack: ["FastAPI", "Vite", "REST"], link: "https://ms.successure.in" },
  { cat: "trading", tag: "Live", icon: "📉", grad: "t9",
    title: "Live Charts & Option Chain",
    desc: "I built a live charting and option-chain platform for indices, stocks and volatility.",
    points: [
      "Candles run from 1 minute to daily, with ranges from 1 day to all history and a split view.",
      "The option chain shows call and put OI and LTP by strike for weekly, next weekly and monthly expiries.",
      "I added a total premium panel for calls and puts, and a go-to date and time jump.",
      "It has equity and futures modes with OHLC readouts."
    ],
    stack: ["JavaScript", "Charts", "Option Chain", "Feed Server"], link: "https://LiveCharts.successure.in" },
  { cat: "trading", tag: "Analytics", icon: "🎯", grad: "t1",
    title: "Zero Gamma Level (GEX) Tracker",
    desc: "I built a tracker that computes gamma exposure and the zero-gamma level from live option chain data.",
    points: [
      "It collects option chain data every minute.",
      "It backfills missing minutes from historical 1-minute candles.",
      "It draws a live chart with previous-day levels."
    ],
    stack: ["Python", "Options", "Broker API"] },
  { cat: "trading", tag: "Analytics", icon: "🧱", grad: "t2",
    title: "Order-Block & Liquidity Scanner",
    desc: "I built a scanner that checks about 400 F&O stocks every minute for order-block setups.",
    points: [
      "One quote call per minute turns into snapshots, bars, scores and sector boards.",
      "I added per-stock popup charts with zones and levels."
    ],
    stack: ["Python", "Broker API"] },
  { cat: "trading", tag: "Data", icon: "⚡", grad: "t3",
    title: "Market Data Pipelines",
    desc: "I built pipelines that collect historical and live equity, futures and option chain data.",
    points: [
      "I connected broker APIs and WebSockets, with instrument ID mapping.",
      "I store the data in MySQL and convert it to Parquet for fast analysis.",
      "I also generate end-of-day files."
    ],
    stack: ["Broker APIs", "MySQL", "Parquet"] },

  { cat: "ml", tag: "ML", icon: "🌿", grad: "t7",
    title: "LAI Estimation, Hyperspectral Data",
    desc: "I estimated leaf area index from vegetation indices using hyperspectral data.",
    points: [
      "I compared XGBoost, Linear Regression, Random Forest, SVR and KNN.",
      "The best model was KNN: R² 0.87, RMSE 0.3436, MAE 0.2250."
    ],
    stack: ["Scikit-Learn", "XGBoost"] },
  { cat: "ml", tag: "Deep Learning", icon: "🥭", grad: "t8",
    title: "Mango Leaf & Landmark Detection",
    desc: "I trained CNN models for two image classification projects.",
    points: [
      "Mango leaf disease: 4,000 images in 8 classes, 0.93 test accuracy.",
      "Landmark detection: 20,001 samples across 1,020 classes."
    ],
    stack: ["Keras", "OpenCV", "NumPy"] },
  { cat: "ml", tag: "BI", icon: "👥", grad: "t6",
    title: "HR Analytics Dashboard",
    desc: "I built a Power BI dashboard for data-driven HR decisions.",
    points: ["I did the exploratory data analysis and the interactive visual design.", "It helps decision makers read HR data quickly."],
    stack: ["Power BI", "EDA"] }
];

// ---------- Setup ----------
$('[data-social="github"]').href = GITHUB;
$('[data-social="linkedin"]').href = LINKEDIN;
$('[data-social="mail"]').href = "mailto:" + EMAIL;
const mail = $("#mailLink"); mail.href = "mailto:" + EMAIL; mail.textContent = EMAIL;
$("#yr").textContent = new Date().getFullYear();

// ---------- Projects grid + modal ----------
const grid = $("#projectGrid");
grid.innerHTML = PROJECTS.map((p, i) => `
  <button class="card proj" data-i="${i}" data-cat="${p.cat}">
    <div class="thumb ${p.grad}"><span class="tag">${p.tag}</span>${p.icon}</div>
    <h3>${p.title}</h3>
    <p class="d">${p.desc}</p>
    <p class="chips">${p.stack.map(s => `<i>${s}</i>`).join("")}</p>
    <span class="more">View details →</span>
  </button>`).join("");

$$("#filters button").forEach(b => b.addEventListener("click", () => {
  $$("#filters button").forEach(x => x.classList.toggle("on", x === b));
  $$(".proj").forEach(c => c.classList.toggle("hide", b.dataset.f !== "all" && c.dataset.cat !== b.dataset.f));
}));

const modal = $("#modal");
let lastFocus;
const openModal = i => {
  const p = PROJECTS[i]; lastFocus = document.activeElement;
  $("#mThumb").className = "m-thumb " + p.grad; $("#mThumb").textContent = p.icon;
  $("#mCat").textContent = p.tag; $("#mTitle").textContent = p.title; $("#mDesc").textContent = p.desc;
  $("#mList").innerHTML = p.points.map(x => `<li>${x}</li>`).join("");
  $("#mStack").innerHTML = p.stack.map(s => `<i>${s}</i>`).join("");
  const l = $("#mLink"); l.hidden = !p.link; if (p.link) l.href = p.link;
  modal.hidden = false; document.body.style.overflow = "hidden"; $("#mClose").focus();
};
const closeModal = () => { modal.hidden = true; document.body.style.overflow = ""; lastFocus && lastFocus.focus(); };
grid.addEventListener("click", e => { const c = e.target.closest(".proj"); if (c) openModal(+c.dataset.i); });
$("#mClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

// ---------- Typing effect ----------
const words = ["Financial Data Analyst", "Backtesting Engineer", "Full-Stack Developer", "Dashboard Builder"];
const typed = $("#typed");
let w = 0, c = 0, del = false;
(function tick() {
  if (reduce) { typed.textContent = words[0]; return; }
  const word = words[w];
  typed.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(tick, 1400); }
  if (del && c === 0) { del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(tick, del ? 35 : 75);
})();

// ---------- Nav: menu, theme, active link, progress, back to top ----------
const menu = $("#menu"), burger = $("#burger");
burger.addEventListener("click", () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); });
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
$("#theme").addEventListener("click", () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch (e) {}
});
const links = $$("#menu a"), secs = links.map(a => $(a.getAttribute("href")));
const progress = $("#progress"), topBtn = $("#top");
const onScroll = () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (scrollY / h * 100) + "%";
  topBtn.classList.toggle("show", scrollY > 600);
  let cur = -1; secs.forEach((s, i) => { if (s.getBoundingClientRect().top < 140) cur = i; });
  links.forEach((a, i) => a.classList.toggle("active", i === cur));
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();
topBtn.addEventListener("click", () => scrollTo({ top: 0 }));

// ---------- Reveal + counters ----------
const countUp = el => {
  const target = +el.dataset.count; let n = 0;
  const t = setInterval(() => { el.textContent = ++n + "+"; if (n >= target) clearInterval(t); }, 150);
};
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  $$("[data-count]", e.target).forEach(countUp);
  io.unobserve(e.target);
}), { threshold: .1 });
$$(".reveal").forEach(el => io.observe(el));

// ---------- Cursor glow + card tilt ----------
if (!reduce && matchMedia("(hover: hover)").matches) {
  const glow = $("#glow");
  addEventListener("mousemove", e => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });
  $$("[data-tilt]").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    el.addEventListener("mouseleave", () => el.style.transform = "");
  });
}

// ---------- Background: drifting price lines ----------
(function bg() {
  const cv = $("#bg"), ctx = cv.getContext("2d");
  if (reduce) return;
  let W, H, lines;
  const make = () => {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    lines = Array.from({ length: 4 }, (_, k) => ({
      y: H * (.2 + k * .2), amp: 30 + k * 12, f: .004 + k * .0015, sp: .0004 + k * .0002, ph: k * 2
    }));
  };
  make(); addEventListener("resize", make);
  const color = () => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  (function frame(t) {
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = color(); ctx.lineWidth = 1.2;
    lines.forEach((l, i) => {
      ctx.globalAlpha = .12 + i * .03; ctx.beginPath();
      for (let x = 0; x <= W; x += 8) {
        const y = l.y + Math.sin(x * l.f + t * l.sp + l.ph) * l.amp + Math.sin(x * l.f * 3.1 + t * l.sp * 1.7) * l.amp * .35;
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    });
    requestAnimationFrame(frame);
  })(0);
})();

// ---------- Contact form -> opens the visitor's mail app ----------
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
});
