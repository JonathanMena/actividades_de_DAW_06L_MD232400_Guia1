document.addEventListener("DOMContentLoaded", function() {
    const images = ["img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg", "img/imagen4.jpg", "img/imagen5.jpg", "img/imagen6.jpg", "img/imagen7.jpg", "img/imagen8.jpg", "img/imagen9.jpg", "img/imagen10.jpg"];
    let currentImageIndex = 0;

    const imageContainer = document.getElementById("image-container");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    function updateImage() {
        imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="Imagen ${currentImageIndex + 1}">`;
    }

    function goToPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }

    function goToNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }

    prevButton.addEventListener("click", goToPreviousImage);
    nextButton.addEventListener("click", goToNextImage);

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            goToPreviousImage();
        } else if (event.key === "ArrowRight") {
            goToNextImage();
        }
    });

    updateImage();
});
