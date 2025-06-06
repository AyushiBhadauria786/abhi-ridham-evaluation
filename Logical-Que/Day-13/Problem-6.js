// Write a JavaScript function that creates a debounce function using Promises and setTimeout.



function CreateDebounceFunction(fn,delay){                 // Debounce function

    let timeout;
    return function(...arg){
        return new Promise((resolve) => {            // function using promise
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                resolve(fn(...arg));

            },delay);
        })
    };
}


const debounce = CreateDebounceFunction((message) => {          // use debounce Function
    console.log(message);
    return 'Message is logged'
},2000)



debounce("hii abhii")
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error(error);
})