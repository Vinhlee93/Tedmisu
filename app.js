const IG_DM = "https://ig.me/m/tedmisu.cake";

const PRODUCTS = [
  {
    id: "tiramisu",
    name: "Tiramisu cổ điển",
    price: 89000,
    desc: "Mascarpone, espresso, cacao — signature của Tedmisu.",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    alt: "Tiramisu trong ly thủy tinh",
  },
  {
    id: "kem-dau",
    name: "Bánh kem dâu",
    price: 320000,
    desc: "Bánh kem 16cm, dâu tươi, kem sữa.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    alt: "Bánh kem dâu tươi",
  },
  {
    id: "socola",
    name: "Chocolate lava",
    price: 79000,
    desc: "Nhân socola chảy, ăn nóng.",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    alt: "Bánh chocolate",
  },
  {
    id: "croissant",
    name: "Croissant bơ",
    price: 45000,
    desc: "Lớp vỏ giòn, ruột xốp, nướng sáng.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    alt: "Croissant vàng",
  },
  {
    id: "matcha",
    name: "Roll cake matcha",
    price: 95000,
    desc: "Trà xanh Nhật, kem nhẹ, ít ngọt.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    alt: "Bánh roll",
  },
  {
    id: "macaron",
    name: "Hộp macaron 6 viên",
    price: 129000,
    desc: "Vani, việt quất, chocolate, dâu.",
    img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",
    alt: "Macaron nhiều màu",
  },
];

const money = (n) => n.toLocaleString("vi-VN") + "đ";

document.getElementById("product-grid").innerHTML = PRODUCTS.map(
  (p) => `
    <article class="card">
      <img src="${p.img}" alt="${p.alt}" width="400" height="300" loading="lazy" />
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="price">${money(p.price)}</p>
        <p>${p.desc}</p>
        <a class="btn btn-primary" href="${IG_DM}" target="_blank" rel="noopener noreferrer">Đặt hàng</a>
      </div>
    </article>`
).join("");
