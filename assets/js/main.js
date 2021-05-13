$(function () {
    // Define en segundos el intervalo del carousel
    $('.carousel').carousel({ interval: 2000 });

    // Habilita los tooltip dentro del proyecto
    $('[data-toggle="tooltip"]').tooltip()
});

// Controla el scroll de la pag. para agregar o quitar las clases del navbar
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('bg-dark', window.scrollY > 1);
    header.classList.toggle('header-border', window.scrollY > 1);
    header.classList.toggle('header-pt', window.scrollY < 1);
});

// Oculta el navbar-collapse al hacer click dentro del menu en modo responsive
$('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
});
