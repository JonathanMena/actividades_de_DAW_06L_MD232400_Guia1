document.getElementById('ventaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioUnitario = parseFloat(document.getElementById('precioUnitario').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!nombreProducto || isNaN(precioUnitario) || isNaN(cantidad) || precioUnitario <= 0 || cantidad <= 0) {
        alert('Por favor, complete todos los campos y asegúrese de que los valores sean válidos.');
        return;
    }

    const detalle = precioUnitario * cantidad;

    const fila = `
        <tr>
            <td>${nombreProducto}</td>
            <td>$${precioUnitario.toFixed(2)}</td>
            <td>${cantidad}</td>
            <td>$${detalle.toFixed(2)}</td>
        </tr>
    `;

    document.getElementById('tablaProductos').innerHTML += fila;

    const totalActual = parseFloat(document.getElementById('totalVenta').textContent);
    const nuevoTotal = totalActual + detalle;
    document.getElementById('totalVenta').textContent = nuevoTotal.toFixed(2);

    // Limpiar los campos del formulario
    document.getElementById('nombreProducto').value = '';
    document.getElementById('precioUnitario').value = '';
    document.getElementById('cantidad').value = '';
});
