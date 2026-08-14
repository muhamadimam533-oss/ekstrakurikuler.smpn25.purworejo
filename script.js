const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progress.style.width = `${max > 0 ? (h.scrollTop / max) * 100 : 0}%`;
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".exkul-card");
filters.forEach(btn => btn.addEventListener("click", () => {
  filters.forEach(x => x.classList.remove("active"));
  btn.classList.add("active");
  const f = btn.dataset.filter;
  cards.forEach(card => {
    const show = f === "all" || card.dataset.category === f;
    card.style.display = show ? "" : "none";
  });
}));

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = () => { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden","true"); };
document.querySelectorAll("[data-lightbox]").forEach(item => item.addEventListener("click", () => {
  lightboxImg.src = item.dataset.lightbox;
  lightboxImg.alt = item.querySelector("img")?.alt || "Dokumentasi kegiatan siswa";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden","false");
}));
document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeLightbox();
});
