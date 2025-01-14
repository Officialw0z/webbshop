import { CartItem } from "./interface.js"; 

const cartIcon = document.getElementById("cart__icon") as HTMLElement
const cartDropdown = document.getElementById("cart__dropdown") as HTMLElement
const cartItems = document.getElementById("cart__items") as HTMLElement

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

addToCart('Produkt 1')