document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("miFormulario");
    const nombreInput = document.getElementById("nombre");
    const paisSelect = document.getElementById("pais");
    const biografiaTextarea = document.getElementById("biografia");

    const guardarDatos = document.getElementById("guardarDatos");
    guardarDatos.addEventListener("click", function() {
        const datos = {
            nombre: nombreInput.value,
            pais: paisSelect.value,
            biografia: biografiaTextarea.value,
        };
        sessionStorage.setItem("datosFormulario", JSON.stringify(datos));
        alert("Datos guardados en sessionStorage");
    });

    // Cargar datos desde sessionStorage si existen
    const datosGuardados = sessionStorage.getItem("datosFormulario");
    if (datosGuardados) {
        const datosParseados = JSON.parse(datosGuardados);
        nombreInput.value = datosParseados.nombre;
        paisSelect.value = datosParseados.pais;
        biografiaTextarea.value = datosParseados.biografia;
    }
});
