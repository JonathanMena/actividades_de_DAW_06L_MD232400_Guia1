document.addEventListener("DOMContentLoaded", function() {
    const direccionInput = document.getElementById("direccion");
    const tipoValidacionSelect = document.getElementById("tipoValidacion");
    const validarBoton = document.getElementById("validarBoton");
    const resultadoDiv = document.getElementById("resultado");
    
    validarBoton.addEventListener("click", function() {
        const direccion = direccionInput.value;
        const tipoValidacion = tipoValidacionSelect.value;
        let mensaje = "";
        
        switch (tipoValidacion) {
            case "ipv4":
                const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
                if (ipv4Pattern.test(direccion) && isValidIPv4(direccion)) {
                    mensaje = "Dirección IPv4 válida.";
                } else {
                    mensaje = "Dirección IPv4 no válida.";
                }
                break;
                
            case "url":
                const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
                if (urlPattern.test(direccion)) {
                    mensaje = "Dirección Web (URL) válida.";
                } else {
                    mensaje = "Dirección Web (URL) no válida.";
                }
                break;
                
            case "email":
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (emailPattern.test(direccion)) {
                    mensaje = "Dirección de Correo Electrónico válida.";
                } else {
                    mensaje = "Dirección de Correo Electrónico no válida.";
                }
                break;
        }
        
        resultadoDiv.textContent = mensaje;
    });
    
    function isValidIPv4(ip) {
        const octets = ip.split(".");
        for (const octet of octets) {
            const num = parseInt(octet, 10);
            if (isNaN(num) || num < 0 || num > 255) {
                return false;
            }
        }
        return true;
    }
});
