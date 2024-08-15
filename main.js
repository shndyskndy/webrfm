const imageBox = document.querySelectorAll(".imagenes-shadow");

imageBox.forEach(popup => {
    popup.addEventListener("click", () => {
        popup.classList.toggle("active");
    });

});
    document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var navLinks = document.querySelector('#navbarNav');

    toggler.addEventListener('click', function () {
    navLinks.classList.toggle('show');
    });
});
