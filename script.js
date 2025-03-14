const products = [
    { name: 'Product 1', price: '$10', height: '10cm', weight: '1kg', usage: 'Outdoor' },
    { name: 'Product 2', price: '$20', height: '20cm', weight: '2kg', usage: 'Indoor' }
];

const productList = document.getElementById('product-list');

productList.innerHTML = products.map(product => `
    <li>
        <h2>${product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Height: ${product.height}</p>
        <p>Weight: ${product.weight}</p>
        <p>Usage: ${product.usage}</p>
    </li>
`).join('');
