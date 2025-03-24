console.log("Retailer Website Script Loaded!");

function greetVisitor() {
    alert("Hello! Welcome to our retailer website.");
}

// CART ICON
// Initialize the cart count
let cartCount = 0;

// Simulate adding items to the cart
function addToCart() {
    cartCount++;
    updateCartCount();
}

// Update the cart count dynamically
function updateCartCount() {
    const cartCountElement = document.querySelector(".cart-count");
    cartCountElement.textContent = cartCount;
}

// Example: Simulate adding an item to the cart every 3 seconds
setInterval(addToCart, 3000);
