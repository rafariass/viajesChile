
// Controla el scroll de la pag. para agregar o quitar las clases del navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("bg-dark", window.scrollY > 1);
    header.classList.toggle("header-border", window.scrollY > 1);
    header.classList.toggle("header-pt", window.scrollY < 1);
    /* const nav = document.querySelector("nav");
    if (window.scrollY > 1) {
      nav.classList.replace("navbar-dark", "navbar-light");
    } else {
      nav.classList.replace("navbar-light", "navbar-dark");
    } */
  });
