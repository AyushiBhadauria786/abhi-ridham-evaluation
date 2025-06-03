// Write a JavaScript function that creates a debounce function using Promises and setTimeout.


function createDebounceFunction(func, delay){
    let timeout;
    return function(...args){
        return new Promise((resolve) => {
            clearTimeout(timeout)

            timeout = setTimeout(() => {
                resolve(func(...args))
            },delay)
        })
    }
}


const debounceLog = createDebounceFunction((message) => {
    console.log(message);
    return "Message logged";
},3000);

debounceLog("Hello this is debounce example..").then(console.log);
// debounceLog("Hello, JavaScript!").then(console.log);  


function saveInput() {
    console.log('Saving Data');
}

let example = createDebounceFunction(() => saveInput(),5000);
example();