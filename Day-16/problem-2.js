// Write a JavaScript program to simulate a shopping cart where the cart state is stored in sessionStorage.

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

const itemInput = document.getElementById("cartInput");
const addButton = document.getElementById("addToCart");
const clearButton = document.getElementById("ClearCart");
const cartDisplay = document.getElementById("displayCartItems");

function displayCart(){
    cartDisplay.innerHTML = '';
    if(cart.length === 0){
        cartDisplay.textContent = 'Your cart is empty.';
    }else {
        cart.forEach((item,index) => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${index + 1}. ${item}`;
            cartDisplay.appendChild(itemElement);
        });
    }
}

displayCart();

addButton.addEventListener('click',() => {
    const newItem = itemInput.value.trim();
    if(newItem){
        cart.push(newItem);
        sessionStorage.setItem('cart',JSON.stringify(cart));
        itemInput.value = '';
        displayCart()
    }else{
        alert('Please enter an item name.')
    }
})

clearButton.addEventListener('click',() => {
    cart = [];
    sessionStorage.setItem('cart',JSON.stringify(cart));
    displayCart();
});