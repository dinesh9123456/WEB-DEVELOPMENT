const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 49.99,
        image: "https://via.placeholder.com/220x140?text=Headphones"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 99.99,
        image: "https://via.placeholder.com/220x140?text=Smart+Watch"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 29.99,
        image: "https://via.placeholder.com/220x140?text=Speaker"
    },
    {
        id: 4,
        name: "Fitness Tracker",
        price: 39.99,
        image: "https://via.placeholder.com/220x140?text=Fitness+Tracker"
    }
];

// Render products
const productsSection = document.getElementById('products');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsSection.appendChild(card);
});

// Cart logic
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
    const cart = getCart();
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}
function addToCart(id) {
    let cart = getCart();
    const idx = cart.findIndex(item => item.id === id);
    if (idx > -1) {
        cart[idx].qty += 1;
    } else {
        cart.push({ id, qty: 1 });
    }
    setCart(cart);
    updateCartCount();
    alert('Added to cart!');
}

// Initialize cart count on page load
updateCartCount();
