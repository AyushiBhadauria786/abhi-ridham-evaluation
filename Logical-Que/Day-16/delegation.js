// delegation


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





grandparentDiv.addEventListener('click' , (event) => {
    // console.log(event);
    // console.log('grandparent clicked');

    if(event.target.id === 'child'){
        console.log('child clicked');
    }
    else if(event.target.id === 'parent'){
        console.log("parent clicked");
    }
    else if(event.target.id === 'grandparent'){
        console.log('grandparent clicked')
    }
})