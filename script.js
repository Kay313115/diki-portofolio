// LINK SOSMED
const LINKS = {
  instagram: "https://instagram.com/dikidwin",
  whatsapp: "https://wa.me/6281585059946",
  tiktok: "https://tiktok.com/@dutamihijab",
  linkedin: "https://www.linkedin.com/in/dikidwi-nugroho-8939112b4"
};

// TEKS JALAN FULL INDO
const texts = [
  " lulusan SMK Otomotif",
  "Lagi Belajar Frontend",
  
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

type();

// FORM
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(e.target).get("name");
  alert("Pesan terkirim! Makasih " + (name || ""));
  e.target.reset();
});

// NAV BIRU
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