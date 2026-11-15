// ---------- DATA (edit here; add real photos to /images with the same file names) ----------
const collections = [
  ["bouquets", "Bouquets", "Hand-tied bouquets in soft, mixed tones."],
  ["roses", "Roses", "Long-stem roses, from classic to blush."],
  ["tulips", "Tulips", "Fresh, cheerful stems for spring days."],
  ["sunflowers", "Sunflowers", "Bright blooms that bring sunshine."],
  ["lilies", "Lilies", "Elegant, fragrant, and long-lasting."],
  ["seasonal", "Seasonal Flowers", "Whatever is freshest this month."],
  ["premium", "Premium Arrangements", "Statement pieces for big moments."],
  ["gift-sets", "Gift Sets", "Flowers paired with something sweet."],
];
const occasions = [
  ["birthday", "Birthday", "Bright blooms to celebrate another year."],
  ["anniversary", "Anniversary", "Romantic roses for years together."],
  ["valentines", "Valentine's Day", "Say it with flowers."],
  ["graduation", "Graduation", "Congratulate every milestone."],
  ["mothers-day", "Mother's Day", "Thank her with something beautiful."],
  ["weddings", "Weddings", "Bouquets and arrangements for the big day."],
  ["congratulations", "Congratulations", "Good news deserves flowers."],
  ["just-because", "Just Because", "No reason needed."],
];
const products = [
  {
    id: "pink-rose-bouquet",
    name: "Pink Rose Bouquet",
    cat: "Roses",
    price: 1850,
    desc: "Fresh pink roses wrapped in soft paper.",
    type: "Rose",
    colors: "Pink, blush",
    stems: "12 stems",
    style: "Hand-tied bouquet",
    occ: "Anniversary, Valentine's Day",
    avail: "In stock",
  },
  {
    id: "classic-white-roses",
    name: "Classic White Roses",
    cat: "Roses",
    price: 2200,
    desc: "Pure white roses with greenery.",
    type: "Rose",
    colors: "White, cream",
    stems: "18 stems",
    style: "Wrapped bouquet",
    occ: "Weddings, Anniversary",
    avail: "In stock",
  },
  {
    id: "sunset-tulip-arrangement",
    name: "Sunset Tulip Arrangement",
    cat: "Tulips",
    price: 1650,
    desc: "Warm tulips in peach and coral shades.",
    type: "Tulip",
    colors: "Peach, coral, pink",
    stems: "15 stems",
    style: "Vase arrangement",
    occ: "Birthday, Just Because",
    avail: "Limited stock",
  },
  {
    id: "golden-sunflower-bundle",
    name: "Golden Sunflower Bundle",
    cat: "Sunflowers",
    price: 1350,
    desc: "Cheerful sunflowers tied with twine.",
    type: "Sunflower",
    colors: "Golden yellow",
    stems: "8 stems",
    style: "Rustic bundle",
    occ: "Graduation, Congratulations",
    avail: "In stock",
  },
  {
    id: "blush-lily-collection",
    name: "Blush Lily Collection",
    cat: "Lilies",
    price: 2400,
    desc: "Fragrant lilies in gentle pink.",
    type: "Oriental lily",
    colors: "Blush pink, white",
    stems: "10 stems",
    style: "Tall bouquet",
    occ: "Mother's Day, Weddings",
    avail: "In stock",
  },
  {
    id: "pastel-dream-bouquet",
    name: "Pastel Dream Bouquet",
    cat: "Bouquets",
    price: 2750,
    desc: "A soft mix of lavender, pink and cream blooms.",
    type: "Mixed flowers",
    colors: "Lavender, pink, cream",
    stems: "20 stems",
    style: "Hand-tied bouquet",
    occ: "Birthday, Mother's Day",
    avail: "In stock",
  },
  {
    id: "garden-romance",
    name: "Garden Romance",
    cat: "Premium",
    price: 3800,
    desc: "A full, garden-style arrangement in a keepsake box.",
    type: "Roses, peonies, ranunculus",
    colors: "Rose, magenta, blush",
    stems: "30 stems",
    style: "Boxed arrangement",
    occ: "Anniversary, Valentine's Day",
    avail: "Pre-order, 1 day",
  },
  {
    id: "spring-blossom-set",
    name: "Spring Blossom Set",
    cat: "Gift Sets",
    price: 2950,
    desc: "Seasonal bouquet with a scented candle.",
    type: "Seasonal mix",
    colors: "Pink, white, green",
    stems: "14 stems",
    style: "Bouquet and gift box",
    occ: "Congratulations, Just Because",
    avail: "In stock",
  },
];
const care =
  "Trim stems at an angle, use clean water, change it every 2 days, and keep away from direct sun.";

// ---------- HELPERS ----------
const $ = (s) => document.querySelector(s);
// Placeholder: if images/<file> exists it replaces the "coming soon" box automatically.
function ph(file) {
  return `<div class="ph" data-img="images/${file}.jpg"></div>`;
}
function loadImages(root = document) {
  root.querySelectorAll(".ph[data-img]").forEach((box) => {
    const img = new Image();
    img.alt = "";
    img.onload = () => {
      box.appendChild(img);
      box.classList.add("has-img");
    };
    img.src = box.dataset.img;
  });
}
const peso = (n) => "₱" + n.toLocaleString("en-PH");

// ---------- RENDER ----------
$("#collectionGrid").innerHTML = collections
  .map(
    ([id, t, d]) =>
      `<button class="card tile reveal" data-cat="${t}">${ph(id)}<h3>${t}</h3><p>${d}</p></button>`,
  )
  .join("");
$("#occasionGrid").innerHTML = occasions
  .map(
    ([id, t, d]) =>
      `<div class="card tile reveal">${ph(id)}<h3>${t}</h3><p>${d}</p></div>`,
  )
  .join("");
$("#productGrid").innerHTML = products
  .map(
    (p) => `
  <article class="card reveal" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">
    ${ph(p.id)}
    <div class="cat">${p.cat}</div>
    <h3>${p.name}</h3>
    <div class="row"><p>${p.desc}</p><span class="price">${peso(p.price)}</span></div>
    <button class="btn" aria-expanded="false">View Details</button>
    <div class="details"><div><dl>
      <dt>Flower type</dt><dd>${p.type}</dd><dt>Colors</dt><dd>${p.colors}</dd>
      <dt>Stems</dt><dd>${p.stems}</dd><dt>Arrangement</dt><dd>${p.style}</dd>
      <dt>Occasions</dt><dd>${p.occ}</dd><dt>Care</dt><dd>${care}</dd>
      <dt>Availability</dt><dd>${p.avail}</dd></dl></div></div>
  </article>`,
  )
  .join("");
loadImages();

// ---------- FILTER + SEARCH ----------
const cats = ["All", ...new Set(products.map((p) => p.cat))];
let activeCat = "All";
$("#filters").innerHTML = cats
  .map((c) => `<button class="chip${c === "All" ? " on" : ""}">${c}</button>`)
  .join("");
function applyFilter() {
  const q = $("#search").value.trim().toLowerCase();
  let shown = 0;
  document.querySelectorAll("#productGrid .card").forEach((c) => {
    const ok =
      (activeCat === "All" || c.dataset.cat === activeCat) &&
      c.dataset.name.includes(q);
    c.hidden = !ok;
    if (ok) shown++;
  });
  $("#empty").hidden = shown > 0;
  document
    .querySelectorAll(".chip")
    .forEach((b) => b.classList.toggle("on", b.textContent === activeCat));
}
$("#filters").addEventListener("click", (e) => {
  if (e.target.classList.contains("chip")) {
    activeCat = e.target.textContent;
    applyFilter();
  }
});
$("#search").addEventListener("input", applyFilter);

// Collection cards jump to gallery with that category (if one matches)
$("#collectionGrid").addEventListener("click", (e) => {
  const t = e.target.closest(".tile");
  if (!t) return;
  const name = t.dataset.cat;
  const match = cats.find(
    (c) =>
      name.startsWith(c.replace(/s$/, "")) ||
      c.startsWith(name.replace(/s$/, "")),
  );
  activeCat = match || "All";
  $("#search").value = "";
  applyFilter();
  $("#flowers").scrollIntoView({ behavior: "smooth" });
});

// ---------- DETAILS DROPDOWN ----------
$("#productGrid").addEventListener("click", (e) => {
  const b = e.target.closest(".btn");
  if (!b) return;
  const open = b.nextElementSibling.classList.toggle("open");
  b.setAttribute("aria-expanded", open);
  b.textContent = open ? "Hide Details" : "View Details";
});

// ---------- NAV ----------
const burger = $("#burger"),
  links = $("#links");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") links.classList.remove("open");
});

// ---------- BACK TO TOP + ACTIVE LINK ----------
const topBtn = $("#top");
addEventListener(
  "scroll",
  () => topBtn.classList.toggle("show", scrollY > 500),
  { passive: true },
);
topBtn.addEventListener("click", () =>
  scrollTo({ top: 0, behavior: "smooth" }),
);
const secObs = new IntersectionObserver(
  (es) =>
    es.forEach((en) => {
      if (en.isIntersecting)
        document
          .querySelectorAll(".links a")
          .forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + en.target.id,
            ),
          );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => secObs.observe(s));

// ---------- SCROLL REVEAL ----------
const revObs = new IntersectionObserver(
  (es) =>
    es.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        revObs.unobserve(en.target);
      }
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => revObs.observe(el));

// ---------- CONTACT FORM ----------
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target,
    v = (n) => f[n].value.trim();
  const errs = {
    name: v("name").length < 2 ? "Please enter your name." : "",
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))
      ? "Please enter a valid email address."
      : "",
    message:
      v("message").length < 10 ? "Please write at least 10 characters." : "",
  };
  Object.keys(errs).forEach(
    (n) => (f[n].nextElementSibling.textContent = errs[n]),
  );
  const valid = !Object.values(errs).some(Boolean);
  $("#ok").hidden = !valid;
  if (valid) f.reset();
});
