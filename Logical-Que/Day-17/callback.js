// Simple callback 


function greet(name,callback){
    console.log(`Hello ${name}`)
    callback();
}

function Bye(){
    console.log("bye bye...")
}


greet('Abhii',Bye);





// Callbacks for Asynchronous Execution


console.log("Start");

setTimeout(() => {       // asynchronous function that takes a callback to execute after 2 seconds.
    console.log("Hii Abhii");
},2000)

console.log("end");




// Callbacks in Functions Handling Operations


function calculator(a,b,callback){
    return callback(a,b);
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}


console.log(calculator(19,6,add));
console.log(calculator(19,6,sub));




// callback in event listeners


// document.getElementById('myButton').addEventListener('click',() => {         
//     console.log("Button clicked! ");
// })


// anonymous function is a callback that runs when the button is clicked.





// callback in api calls



fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {                                           // callback
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => console.log(data))                             // callback
      .catch((error) => console.error(`Error: ${error}`))            // callback
      .finally(() => console.log("Fetch complete!"));                // callback