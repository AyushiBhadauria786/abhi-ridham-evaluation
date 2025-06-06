// Write a JavaScript function that creates a debounce function using Promises and setTimeout.



function CreateDebounceFunction(fn,delay){

    let timeout;
    return function(...arg){
        return new Promise((resolve) => {
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                resolve(fn(...arg));

            },delay);
        })
    };
}


const debounce = CreateDebounceFunction((message) => {
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