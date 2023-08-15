document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const productTable = document.getElementById('productTable');
    const productList = document.getElementById('productList');
    const total = document.getElementById('total');
    const totalAmount = document.getElementById('totalAmount');
    
    const products = [];
    
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        
        products.push({ name: productName, price: productPrice });
        
        const newRow = productList.insertRow();
        const productNameCell = newRow.insertCell(0);
        const productPriceCell = newRow.insertCell(1);
        
        productNameCell.textContent = productName;
        productPriceCell.textContent = `$${productPrice.toFixed(2)}`;
        
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        
        productTable.style.display = 'block';
        
        const continueAdding = confirm('¿Desea ingresar más productos?');
        
        if (!continueAdding) {
            let totalSale = 0;
            
            for (const product of products) {
                totalSale += product.price;
            }
            
            totalAmount.textContent = `$${totalSale.toFixed(2)}`;
            total.style.display = 'block';
            
            productForm.style.display = 'none';
        }
    });
});