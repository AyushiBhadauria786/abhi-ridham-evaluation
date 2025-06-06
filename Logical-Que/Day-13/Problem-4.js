// Write a JavaScript function that resolves a nested Promise structure using async/await.


// Nested  Promise

function getNestedPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(                                     // Nested Promise
                new Promise((resolve) => {
                    setTimeout(() => resolve('Nested Promise Resolved'),1000)
                })
            )
        },1000)
    })
}

   
async function HandleNestedPromises() {                          //async function
    
    const FirstLevel = await getNestedPromise();
    const result = await FirstLevel                        // wait until FirstLevel completed
    console.log(result);
}


HandleNestedPromises();



// Deeply Nested promise



function DeeplyNestedPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(                                            // Nested Promises
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(                                // Nested Promises
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve("Deeply Nested Promise Resolved")
                                },1000)
                            })
                        )
                    },1000)
                })
            )
        },1000)
    })
}



async function HandleDeeplyNestedPromises() {            // async function
    
    const FirstLevel = await DeeplyNestedPromise();
    const SecondLevel = await FirstLevel;               // wait for FirstLevel
    const result = await SecondLevel;                   // wait for SecondLevel
    console.log(result);
}


HandleDeeplyNestedPromises();