// LINK SOSMED
const LINKS = {
  instagram: "https://instagram.com/dikidwin",
  whatsapp: "https://wa.me/6281585059946",
  tiktok: "https://tiktok.com/@dutamihijab",
  linkedin: "https://www.linkedin.com/in/dikidwi-nugroho-8939112b4"
};

// TEKS JALAN
const texts = ["Diki Dwi Nugroho", "Frontend Developer", "Lulusan SMK Otomotif"];
let c = 0, i = 0, del = false;
const el = document.getElementById("typing");
function type() {
  const cur = texts[c];
  if (del) { i--; } else { i++; }
  el.textContent = cur.slice(0, i);
  let speed = del? 40 : 90;
  if (!del && i === cur.length) { speed = 1200; del = true; }
  else if (del && i === 0) { del = false; c = (c + 1) % texts.length; speed = 400; }
  setTimeout(type, speed);
}
type();

// FORM KONTAK
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(e.target).get("name");
  alert("Pesan terkirim! Makasih " + (name || ""));
  e.target.reset();
});

// NAV + HAMBURGER AUTO KESILANG
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const nav = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section");

// 1. Klik hamburger
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.textContent = menu.classList.contains('active')? '✕' : '☰';
});

// 2. INI KUNCINYA JAN - Klik menu langsung auto kesilang
nav.forEach((link) => {
  link.addEventListener('click', () => {
    nav.forEach((n) => n.classList.remove('active'));
    link.classList.add('active');

    // auto tutup
    menu.classList.remove('active');
    hamburger.textContent = '☰';
  });
});

// 3. Scroll biar biru ngikutin
window.addEventListener("scroll", () => {
  let cur = "";
  sections.forEach((s) => {
    const top = s.offsetTop - 120;
    if (scrollY >= top) { cur = s.id; }
  });
  nav.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + cur) { a.classList.add("active"); }
  });
});
