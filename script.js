const products = [
    { id: 1, name: "Sandal", price: 25000, img: "sandal.jpg" },
    { id: 2, name: "Tas", price: 70000, img: "tas.jpg" },
    { id: 3, name: "Sepatu", price: 105000, img: "sepatu.jpg" }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: Rp ${product.price}</p>
            <button onclick="addToCart(${product.id})">Beli</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = ""; // Clear previous cart content
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `${item.name} - Rp ${item.price} <button onclick="removeFromCart(${index})">Hapus</button>`;
        cartDiv.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Initialize
displayProducts();
