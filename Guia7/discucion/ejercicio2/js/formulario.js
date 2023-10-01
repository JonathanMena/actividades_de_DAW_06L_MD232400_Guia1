document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        if (!isValidName(nameInput.value)) {
            alert("Por favor, ingrese un nombre válido.");
            event.preventDefault();
        }

        if (!isValidEmail(emailInput.value)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            event.preventDefault();
        }
    });

    function isValidName(name) {
        // Utilizamos una expresión regular que permite letras mayúsculas, minúsculas y espacios.
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(name);
    }

    function isValidEmail(email) {
        // Utilizamos una expresión regular para validar un formato de correo electrónico válido.
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }
});
