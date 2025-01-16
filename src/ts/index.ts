import { CartItem } from "./interface.js"; 

import { products } from "./elements.js";

const cartIcon = document.getElementById("cart__icon") as HTMLElement
const cartDropdown = document.getElementById("cart__dropdown") as HTMLElement
const cartItems = document.getElementById("cart__items") as HTMLElement
const mainContainer = document.querySelector('.main') as HTMLElement


const cart: CartItem[] = []



function updateCart(): void {
    cartItems.innerText = ""

    if (cart.length === 0) {
        const emptyMessage = document.createElement('li')
        emptyMessage.textContent = 'Din varukorg är tom.'
        cartItems.appendChild(emptyMessage)
    } else {
        cart.forEach((product, index)=> {
            const li = document.createElement('li')
            li.textContent = product.name

            const removeButton = document.createElement('button')
            removeButton.textContent = "Ta bort"
            removeButton.style.marginLeft = "10px"
            
            
            removeButton.addEventListener('click', (event) => {
                event.stopPropagation()
                removeFromCart(index)
            })
            li.appendChild(removeButton)
            cartItems.appendChild(li)
        })
    }
}

function addToCart(product: string): void {
    cart.push({ name: product})
    updateCart()
}

function removeFromCart(index: number): void {
    cart.splice(index, 1)
    updateCart()
}

cartIcon.addEventListener('click', () => {
    cartDropdown.classList.toggle('show')
})
  
document.addEventListener('click', (event)=> {
    const target = event.target as HTMLElement

    if (cartDropdown.contains(target) || cartIcon.contains(target)) {
        return
    }
        cartDropdown.classList.remove('show')
})

addToCart('Produkt 1');

(function getProducts() {
    products.forEach(product => {
        mainContainer.innerHTML += 
        `<section class="main__box">
        <h2 class="main__box--header">${product.title}</h2>
        <h4 class="main__box--sex">${product.sex}</h4>
        <img src="/img/cart (1).png" alt="add to cart" class="main__box--cart">
        <img src="${product.image}" alt="product" class="main__box--product">
        <span class="main__box--prize">${product.price}</span>
        </section>`
    });
})()