const products = [
    { name: "JavaScript Book", category: "Books", price: 25, rating: 4.5 },
    { name: "Headphones", category: "Electronics", price: 99, rating: 4.2 },
    { name: "Laptop", category: "Electronics", price: 799, rating: 4.8 },
    { name: "CSS Guide", category: "Books", price: 18, rating: 4.0 },
];

function renderProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    let filtered = products.filter(p => category === 'all' || p.category === category);
    filtered.sort((a, b) => sortBy === 'price' ? a.price - b.price : b.rating - a.rating);

    const list = document.getElementById('productList');
    list.innerHTML = '';
    filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <h2>${p.name}</h2>
            <div>Category: ${p.category}</div>
            <div class="price">$${p.price}</div>
            <div class="rating">Rating: ${p.rating}</div>
        `;
        list.appendChild(div);
    });
}

renderProducts();
