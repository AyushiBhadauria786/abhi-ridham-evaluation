// Write a JavaScript program to handle click events on dynamically added list items using event delegation.

//Solution 1

//By creating function and appenchild method and then adding eventlistener


const listContainer = document.createElement('ul');
listContainer.id = "dynamic-list";
document.body.appendChild(listContainer)


function addListItem(item){
    const newItem = document.createElement('li');
    newItem.textContent = item
    listContainer.appendChild(newItem);
}

addListItem('Item 1');
addListItem('Item 2');
addListItem('Item 3');

listContainer.addEventListener('click',(e) => {
    if(e.target.tagName === 'LI'){
        alert(`You click on: ${e.target.textContent}`);
    }
});

//Solution 2

//Adding dynamically by passing array and onclick method:


['Apple', 'Banana', 'Cherry'].forEach((item) => addListItem(item));
listContainer.onclick = (event) => {
  if (event.target.tagName === 'LI') { 
    console.log(`Clicked item: ${event.target.textContent}`); 
  }
};