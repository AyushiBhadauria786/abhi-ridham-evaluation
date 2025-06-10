// Write a JavaScript program that prevents the default behavior of a form submission and 
// logs the input values to the console.

//Solution 1
//One way using event listener and passing preventdefault so it will stop default behaviou of event on click
const form = document.querySelector('form');
let username = document.getElementById("username");
let email = document.getElementById("email");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form);

    for(let [key,value] of formData.entries()){
        console.log(`${key}: ${value}`);
    }
})

//Solution 2
//Using onclick method same as above but different method and prevents event for default behaviour.

function handleSubmit(event){
    event.preventDefault();

    const form = event.target;

    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
        console.log(`${input.name}:${input.value}`);
    });
}