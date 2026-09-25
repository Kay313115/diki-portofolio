// ================= LINK SOSMED =================
const LINKS = {
  instagram: "https://instagram.com/dikidwin",
  whatsapp: "https://wa.me/6281585059946",
  tiktok: "https://tiktok.com/@dutamihijab",
  linkedin: "https://www.linkedin.com/in/dikidwi-nugroho-8939112b4"
};

// ================= TEKS JALAN =================
const texts = [
  "Diki Dwi Nugroho",
  "Frontend Developer",
  "Lulusan SMK Otomotif"
];

let c = 0;
let i = 0;
let del = false;

const el = document.getElementById("typing");

function type() {
  const cur = texts[c];

  if (del) {
    i--;
  } else {
    i++;
  }

  el.textContent = cur.slice(0, i);

  let speed = del? 40 : 90;

  if (!del && i === cur.length) {
    speed = 1200;
    del = true;
  } else if (del && i === 0) {
    del = false;
    c = (c + 1) % texts.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

if (el) {
  type();
}

// ================= FORM KIRIM KE WA =================
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const nama = data.get("name");
  const email = data.get("email");
  const judul = data.get("judul");
  const pesan = data.get("pesan");

  const noWa = "6281585059946";

  const text = `Halo mas, ada pesan dari web:%0A%0ANama: ${nama}%0AEmail: ${email}%0AJudul: ${judul}%0APesan: ${pesan}`;

  const url = `https://wa.me/${noWa}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
  e.target.reset();
});

// ================= NAV + HAMBURGER =================
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const navLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section");

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    hamburger.textContent = '✕';
  } else {
    hamburger.textContent = '☰';
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((n) => {
      n.classList.remove('active');
    });

    link.classList.add('active');
    menu.classList.remove('active');
    hamburger.textContent = '☰';
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

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + cur) {
      a.classList.add("active");
    }
  });
});
