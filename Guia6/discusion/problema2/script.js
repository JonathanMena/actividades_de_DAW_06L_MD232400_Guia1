document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");
    const resultado = document.getElementById("resultado");

    fileInput.addEventListener("change", function() {
        const fileName = fileInput.value;
        if (isValidImageFile(fileName)) {
            resultado.textContent = "El archivo es válido y se puede subir.";
        } else {
            resultado.textContent = "El archivo no es válido. Por favor, seleccione una imagen con una extensión válida (.jpg, .jpeg, .png, .gif).";
        }
    });

    function isValidImageFile(fileName) {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        return allowedExtensions.test(fileName);
    }
});
