// Bubbling phase

let grandparentDiv = document.getElementById('grandparent');
let parentDiv = document.getElementById('parent');
let childDiv = document.getElementById('child');

grandparentDiv.style.width = "300px";
grandparentDiv.style.height = "300px";
grandparentDiv.style.backgroundColor = "red";
grandparentDiv.style.position = "relative";

parentDiv.style.width = '200px';
parentDiv.style.height = '200px';
parentDiv.style.backgroundColor = 'pink';
parentDiv.style.position = 'absolute';
parentDiv.style.top = '50px';
parentDiv.style.left = '50px';

childDiv.style.width = "100px";
childDiv.style.height = '100px';
childDiv.style.backgroundColor = 'lightblue';
childDiv.style.position = 'absolute';
childDiv.style.top = '50px';
childDiv.style.left = '50px';


childDiv.addEventListener('click',(e) => {
    console.log(`child clicked from ${e.target.id}`);
},false)  // bubbling phase

parentDiv.addEventListener('click',(e) => {
    console.log(`parent clicked from ${e.target.id}`);
})  // bubbling phase by default false

grandparentDiv.addEventListener('click',(e) => {
    console.log(`grandparent clicked from ${e.target.id}`);
})    // bubbling phase by default false




// Capturing phase


// childDiv.addEventListener('click',(e) => {
//     console.log(`child clicked from ${e.target.id}`);
// },true)  // bubbling phase

// parentDiv.addEventListener('click',(e) => {
//     console.log(`parent clicked from ${e.target.id}`);
// },true)  // bubbling phase by default false

// grandparentDiv.addEventListener('click',(e) => {
//     console.log(`grandparent clicked from ${e.target.id}`);
// },true)    // bubbling phase by default false
