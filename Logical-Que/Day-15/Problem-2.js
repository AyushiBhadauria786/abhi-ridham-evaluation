// Write a JavaScript program to simulate a  shopping cart where the cart state is stored in sessionStorage.




// Initialize the cart from sessionStorage or set it as an empty array
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];



function DisplayCart(){
    const CartDisplay = document.getElementById("CartDisplay");
    CartDisplay.innerHTML = '';  // Clear previous display




    if(cart.length === 0){                                  // check the length of cart
        CartDisplay.textContent = 'Your cart is empty.';
    }
    else
    {
        cart.forEach((item,index)=> {
            const itemElement = document.createElement('p');       // Create a paragraph for each item
            itemElement.textContent = `${index + 1 }. ${item}`;   // Display item with index
            CartDisplay.appendChild(itemElement);               // Append to cart display
        }) 
    }
}


const itemInput = document.createElement('input');     // Input for adding items
itemInput.placeholder = "Enter item name";
document.body.appendChild(itemInput);



const AddButton = document.createElement('button');     // Button to add item
AddButton.textContent = "Add to Cart";
document.body.appendChild(AddButton);


const CartDisplay = document.createElement('div');     // Div to display the cart
CartDisplay.id = "CartDisplay";
document.body.appendChild(CartDisplay);


// Display the cart initially
DisplayCart();



AddButton.addEventListener('click' , ()=>{
    const newItem = itemInput.value.trim();   // Get item from input

    if(newItem){
        cart.push(newItem);
        sessionStorage.setItem('cart', JSON.stringify(cart));     //  Save updated cart in sessionStorage
        itemInput.value = '';                                        // Clear input
        DisplayCart();                        // Update cart display
         
    }
    else
    {
        alert("Please enter an item name")
    }
});
