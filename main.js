const imageBox = document.querySelectorAll(".imagenes-shadow");

imageBox.forEach(popup => {
    popup.addEventListener("click", () => {
        popup.classList.toggle("active");
    });
});
