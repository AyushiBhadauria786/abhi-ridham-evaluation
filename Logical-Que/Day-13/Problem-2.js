// Write a JavaScript program that displays a "loading" message while waiting for an async operation to complete.


function asyncOpration(){                                             
    return new Promise((resolve,reject) => {
        setTimeout(() => {                                         //setTimeout for delay
            if(resolve){
                fetch("https://jsonplaceholder.typicode.com/todos")                // if resolve then fetch data
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
                .catch((error) => {                                // if any error occure
                    console.error(error)
                })
            
            }

            else{
                reject("Promise is not Resolved")            // if promise rejected
            }

        },4000)
    })
}



async function Loading() {                              
    console.log("...loading");                // async loading function and show loading
    const result = await asyncOpration();       // call asyncOpration operation and wait for completed
    console.log(result);
}


Loading();