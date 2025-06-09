// Write a JavaScript program that demonstrates event bubbling and uses stopPropagation to stop the event at a specific level.


// Create parent and child elements 

const parentDiv = document.createElement('div');
const child = document.createElement('div');


// style the element for visibility

parentDiv.style.width = '200px';
parentDiv.style.height = '200px';
parentDiv.style.backgroundColor = 'lightblue';
parentDiv.style.position = 'relative';



child.style.width = '100px';
child.style.height = '100px';
child.style.backgroundColor = 'pink';
child.style.position = 'absolute';
child.style.top = '50px';
child.style.left = '50px';



// Append child to parent and parent to document body

parentDiv.appendChild(child);
document.body.appendChild(parentDiv);



// Add event listener to the parent element

parentDiv.addEventListener('click', () => {
    console.log('Parent Clicked');
});


// Add event listener to the child element

child.addEventListener('click', (event) => {
    console.log("Child Clicked");
    event.stopPropagation();
})



