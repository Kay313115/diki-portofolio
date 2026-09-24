// LINK SOSMED: Kalo mau ganti link cukup disini aja
const LINKS = {
  instagram: "https://instagram.com/dikidwin",
  whatsapp: "https://wa.me/6281585059946",
  tiktok: "https://tiktok.com/@dutamihijab",
  linkedin: "https://www.linkedin.com/in/dikidwi-nugroho-8939112b4"
};

// TEKS JALAN: Ini yang muncul di efek ketik-ketik. Gue tambahin kata kunci biar SEO
const texts = [
  "Frontend Developer",
  // Kata kunci SEO
  "Lulusan SMK Otomotif",
  
];

let c = 0; // Index teks ke berapa
let i = 0; // Index huruf
let del = false; // Status lagi ngetik atau ngehapus
const el = document.getElementById("typing");

function type() {
  const cur = texts[c];
  if (del) { i--; } else { i++; } // Kalo del=true hapus, kalo false ngetik
  el.textContent = cur.slice(0, i);
  let speed = del? 40 : 90; // Kecepatan ketik

  if (!del && i === cur.length) {
    speed = 1200; // Jeda pas udah selesai ngetik
    del = true;
  } else if (del && i === 0) {
    del = false;
    c = (c + 1) % texts.length; // Ganti ke teks selanjutnya
    speed = 400;
  }
  setTimeout(type, speed);
}
type();

// FORM KONTAK: Biar pas klik Kirim gak reload, cuma muncul alert
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(e.target).get("name");
  alert("Pesan terkirim! Makasih " + (name || ""));
  e.target.reset();
});

// NAV AKTIF: Biar menu biru ngikutin scroll
const nav = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section");

nav.forEach((link) => {
  link.addEventListener("click", () => {
    nav.forEach((n) => n.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  let cur = "";
  sections.forEach((s) => {
    const top = s.offsetTop - 120;
    if (scrollY >= top) {
      cur = s.id;
    }
  });
  nav.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + cur) {
      a.classList.add("active");
    }
  });
});
