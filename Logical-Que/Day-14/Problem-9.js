// Write a JavaScript program that prevents the default behavior of a form submission and logs the input values to the console.




// Select the form element
const form = document.querySelector('form');



// Add an event listener for the 'submit' event
form.addEventListener('submit', (event) => {

 // Prevent the default form submission behavior
  event.preventDefault();


  // Get input values and log them

  const formData = new FormData(form); 
  // Create a FormData object

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);                           // Log key-value pairs
  }

});
