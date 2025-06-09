// Write a JavaScript program to handle click events on dynamically added list items using event delegation.



// Create a parent element 

const ListContainer = document.createElement('ul');       
ListContainer.id = 'dynamic-list';                       // give an id
document.body.appendChild(ListContainer);       //  Add the parent element to the DOM



// Function to add a new list item
function addListItem(content){

    const  newItem = document.createElement("li");   // Create a new list item
    newItem.textContent = content;                  // Set the list item text
    ListContainer.appendChild(newItem);           // Append it to the parent container
}



// Add multiple list items dynamically


addListItem("Item-1");
addListItem("Item-2");
addListItem("Item-3");



// Event delegation: Add a click event listener to the parent

ListContainer.addEventListener("click", (event) => {
    if(event.target.tagName == "LI"){                                // Check if the clicked element is a list item
        alert(`You clicked on : ${event.target.textContent}`)     //  Show an alert with the item text
    }
})


