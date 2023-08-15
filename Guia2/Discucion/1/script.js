document.addEventListener('DOMContentLoaded', function() {
    const numberForm = document.getElementById('numberForm');
    const resultDiv = document.getElementById('result');
    const cantidadCifras = document.getElementById('cantidadCifras');
    const cantidadImpares = document.getElementById('cantidadImpares');
    const cantidadPares = document.getElementById('cantidadPares');
    const sumaImpares = document.getElementById('sumaImpares');
    const sumaPares = document.getElementById('sumaPares');
    const sumaTotal = document.getElementById('sumaTotal');
    const cifraMayor = document.getElementById('cifraMayor');
    const cifraMenor = document.getElementById('cifraMenor');
    
    numberForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numero = parseInt(document.getElementById('numberInput').value);
        const cifras = Array.from(String(numero), Number);
        
        const cifrasImpares = cifras.filter(digito => digito % 2 !== 0);
        const cifrasPares = cifras.filter(digito => digito % 2 === 0);
        
        cantidadCifras.textContent = `Cantidad de cifras: ${cifras.length}`;
        cantidadImpares.textContent = `Cantidad de cifras impares: ${cifrasImpares.length}`;
        cantidadPares.textContent = `Cantidad de cifras pares: ${cifrasPares.length}`;
        sumaImpares.textContent = `Suma de cifras impares: ${cifrasImpares.reduce((sum, current) => sum + current, 0)}`;
        sumaPares.textContent = `Suma de cifras pares: ${cifrasPares.reduce((sum, current) => sum + current, 0)}`;
        sumaTotal.textContent = `Suma total de cifras: ${cifras.reduce((sum, current) => sum + current, 0)}`;
        cifraMayor.textContent = `Cifra mayor: ${Math.max(...cifras)}`;
        cifraMenor.textContent = `Cifra menor: ${Math.min(...cifras)}`;
        
        resultDiv.style.display = 'block';
    });
});
