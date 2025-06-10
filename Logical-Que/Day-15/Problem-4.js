// Write a JavaScript program that demonstrates event capturing by adding listeners to parent and child elements.




// Create parent and child element

const parentDiv = document.createElement('div');
const childDiv = document.createElement('div');




// Style the elements for visibility

parentDiv.style.width = '200px';
parentDiv.style.height = '200px';
parentDiv.style.backgroundColor = 'pink';
parentDiv.style.position = 'relative';


childDiv.style.width = "100px";
childDiv.style.height = '100px';
childDiv.style.backgroundColor = 'lightblue';
childDiv.style.position = 'absolute';
childDiv.style.top = '50px';
childDiv.style.left = '50px';



// Append child to parent and parent to document body
parentDiv.appendChild(childDiv);
document.body.appendChild(parentDiv);



parentDiv.addEventListener('click', () => {
    console.log('Parent clicked (Capturing phase)');
},
    true    // Use capturing phase

);


childDiv.addEventListener('click', () => {
    console.log('Child clicked (Capturing phase)');
},
    true      // Use capturing phase
    
)