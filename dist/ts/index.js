const cartIcon = document.getElementById("cart__icon");
const cartDropdown = document.getElementById("cart__dropdown");
const cartItems = document.getElementById("cart__items");
const cart = [];
function updateCart() {
    cartItems.innerText = "";
    if (cart.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Din varukorg är tom.';
        cartItems.appendChild(emptyMessage);
    }
    else {
        cart.forEach((product, index) => {
            const li = document.createElement('li');
            li.textContent = product.name;
            const removeButton = document.createElement('button');
            removeButton.textContent = "Ta bort";
            removeButton.style.marginLeft = "10px";
            removeButton.addEventListener('click', (event) => {
                event.stopPropagation();
                removeFromCart(index);
            });
            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    }
}
function addToCart(product) {
    cart.push({ name: product });
    updateCart();
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
cartIcon.addEventListener('click', () => {
    cartDropdown.classList.toggle('show');
});
document.addEventListener('click', (event) => {
    const target = event.target;
    if (cartDropdown.contains(target) || cartIcon.contains(target)) {
        return;
    }
    cartDropdown.classList.remove('show');
});
addToCart('Produkt 1');
addToCart('Produkt 1');addToCart('Produkt 1');addToCart('Produkt 1');

