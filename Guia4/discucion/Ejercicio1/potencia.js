<<<<<<< HEAD
// Definición de la clase Potencia
class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = this.calcularPotencia();
    }

    calcularPotencia() {
        return Math.pow(this.base, this.exponente);
    }

    mostrarResultado() {
        document.getElementById('resultado').innerHTML = this.resultado;
    }
}

// Función para manejar el evento click del botón
document.getElementById('calcularBtn').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('base').value);
    const exponente = parseFloat(document.getElementById('exponente').value);

    // Crear una instancia de la clase Potencia
    const potenciaCalculada = new Potencia(base, exponente);

    // Mostrar el resultado en la página
    potenciaCalculada.mostrarResultado();
});
=======
// Definición de la clase Potencia
class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = this.calcularPotencia();
    }

    calcularPotencia() {
        return Math.pow(this.base, this.exponente);
    }

    mostrarResultado() {
        document.getElementById('resultado').innerHTML = this.resultado;
    }
}

// Función para manejar el evento click del botón
document.getElementById('calcularBtn').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('base').value);
    const exponente = parseFloat(document.getElementById('exponente').value);

    // Crear una instancia de la clase Potencia
    const potenciaCalculada = new Potencia(base, exponente);

    // Mostrar el resultado en la página
    potenciaCalculada.mostrarResultado();
});
>>>>>>> c3ddb994c49e2d6ed2d8283ffa6dd497b2233812
