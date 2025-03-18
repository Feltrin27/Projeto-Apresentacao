let lastScrollTop = 0;
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Rolar para baixo: Esconder a nav
    nav.classList.add("hide");
  } else {
    // Rolar para cima: Mostrar a nav
    nav.classList.remove("hide");
  }
  lastScrollTop = scrollTop;
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const linkHome = document.querySelector(".link-home");
const linkSobre = document.querySelector(".link-sobre");
const linkProjeto = document.querySelector(".link-projeto");
const linkContato = document.querySelector(".link-contato");

linkHome.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
linkSobre.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
linkProjeto.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
linkContato.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});