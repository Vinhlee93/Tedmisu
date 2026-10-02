const IG_DM = "https://ig.me/m/tedmisu.cake";

const GROUPS = [
  {
    id: "tiramisu",
    name: "Tiramisu",
    items: [
      {
        name: "Tiramisu nguyên bản",
        price: 89000,
        desc: "Mascarpone, espresso, cacao.",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
        alt: "Tiramisu nguyên bản Tedmisu Cake",
      },
      {
        name: "Tiramisu matcha",
        price: 89000,
        desc: "Mascarpone và trà xanh.",
        img: "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?auto=format&fit=crop&w=800&q=80",
        alt: "Tiramisu matcha Tedmisu Cake",
      },
      {
        name: "Tiramisu oreo",
        price: 89000,
        desc: "Mascarpone và oreo.",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
        alt: "Tiramisu oreo Tedmisu Cake",
      },
      {
        name: "Tiramisu caramel lotus",
        price: 89000,
        desc: "Mascarpone, caramel và bánh Lotus.",
        img: "images/tiramisu-caramel-lotus.jpg",
        alt: "Tiramisu caramel lotus Tedmisu Cake",
      },
      {
        name: "Tiramisu xoài",
        price: 89000,
        desc: "Chỉ có thứ Ba và thứ Sáu hằng tuần.",
        img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
        alt: "Tiramisu xoài Tedmisu Cake",
      },
    ],
  },
  {
    id: "brownie",
    name: "Brownie",
    items: [
      {
        name: "Brownie nguyên bản",
        price: 55000,
        desc: "Socola đậm, mềm giữa.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        alt: "Brownie nguyên bản Tedmisu Cake",
      },
      {
        name: "Brownie chesse oreo",
        price: 59000,
        desc: "Brownie, kem cheese và oreo.",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        alt: "Brownie chesse oreo Tedmisu Cake",
      },
      {
        name: "Brownie chesse lotus",
        price: 59000,
        desc: "Brownie, kem cheese và Lotus.",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        alt: "Brownie chesse lotus Tedmisu Cake",
      },
    ],
  },
  {
    id: "cream-brulee",
    name: "Cream Bruleé",
    items: [
      {
        name: "Cream bruleé",
        price: 69000,
        desc: "Kem trứng, mặt đường cháy.",
        img: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80",
        alt: "Cream bruleé Tedmisu Cake",
      },
    ],
  },
  {
    id: "banana-chocola",
    name: "Banana Chocola cake",
    items: [
      {
        name: "Banana cake nhỏ",
        price: 65000,
        desc: "Bánh chuối socola, size nhỏ.",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        alt: "Banana cake nhỏ Tedmisu Cake",
      },
      {
        name: "Banana cake lớn",
        price: 185000,
        desc: "Bánh chuối socola, size lớn.",
        img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
        alt: "Banana cake lớn Tedmisu Cake",
      },
    ],
  },
  {
    id: "chesse-bread",
    name: "Chesse Bread",
    items: [
      {
        name: "Chesse bread",
        price: 45000,
        desc: "Bánh mì phô mai.",
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
        alt: "Chesse bread Tedmisu Cake",
      },
    ],
  },
  {
    id: "nuoc",
    name: "Nước",
    items: [
      {
        name: "Trà sữa lài",
        price: 39000,
        desc: "Trà lài, sữa.",
        img: "https://images.unsplash.com/photo-1556679343-c7306c197375?auto=format&fit=crop&w=800&q=80",
        alt: "Trà sữa lài Tedmisu Cake",
      },
      {
        name: "Trà sữa Tedmisu",
        price: 39000,
        desc: "Công thức nhà Tedmisu.",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        alt: "Trà sữa Tedmisu",
      },
      {
        name: "Trà dâu",
        price: 39000,
        desc: "Trà và dâu.",
        img: "https://images.unsplash.com/photo-1556679343-c7306c197375?auto=format&fit=crop&w=800&q=80",
        alt: "Trà dâu Tedmisu Cake",
      },
      {
        name: "Trà bự",
        price: 45000,
        desc: "Ly lớn.",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
        alt: "Trà bự Tedmisu Cake",
      },
    ],
  },
];

const money = (n) => n.toLocaleString("vi-VN") + "đ";

const card = (p, withPrice = true) => `
  <article class="card">
    <div class="card-media">
      <img src="${p.img}" alt="${p.alt}" width="380" height="380" loading="lazy" decoding="async" />
    </div>
    <h4>${p.name}</h4>
    <p class="desc">${p.desc}</p>
    ${withPrice ? `<p class="price">${money(p.price)}</p>` : ""}
    <a class="text-link" href="${IG_DM}" target="_blank" rel="noopener noreferrer">Đặt bánh →</a>
  </article>`;

const featuredEl = document.getElementById("featured");
if (featuredEl) {
  const preview = [
    GROUPS[0].items[0],
    GROUPS[1].items[0],
    GROUPS[2].items[0],
    GROUPS[3].items[0],
  ];
  featuredEl.innerHTML = preview.map((p) => card(p, false)).join("");
}

const catalog = document.getElementById("menu");
if (catalog && document.body.classList.contains("menu-page")) {
  const row = (p) => `
    <article class="menu-product">
      <img class="menu-product-image" src="${p.img}" alt="${p.alt}" width="72" height="72" loading="lazy" decoding="async" />
      <div class="menu-product-info">
        <div class="product-title-line">
          <span class="product-name">${p.name}</span>
          <span class="product-dots" aria-hidden="true"></span>
          <span class="product-price">${money(p.price)}</span>
        </div>
        <p class="menu-product-desc">${p.desc}</p>
      </div>
    </article>`;

  catalog.innerHTML = GROUPS.map(
    (g) => `
    <section class="menu-category" id="${g.id}">
      <h2 class="menu-category-title">${g.name}</h2>
      ${g.items.map(row).join("")}
    </section>`
  ).join("");
}

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

const drawer = document.getElementById("mobile-menu");
const toggle = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".drawer-close");

function setMenu(open) {
  if (!drawer || !toggle) return;
  drawer.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
}

if (toggle && drawer) {
  toggle.addEventListener("click", () => setMenu(drawer.hidden));
  closeBtn?.addEventListener("click", () => setMenu(false));
  drawer.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setMenu(false));
  });
}
