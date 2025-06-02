// Write a JavaScript function that resolves a nested Promise structure using async/await.


function getMultiNestedPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(
                        new Promise((resolve) => {
                            setTimeout(() => resolve("Deeply nested Promise Resolved!"),500);
                        })
                    )
                },1000)
            })
           ) 
        }, 1000);
    })
}


async function handleNestedPromise() {
    const firstLevel = await getMultiNestedPromise();
    const secondLevel = await firstLevel;
    const result = await secondLevel;
    console.log(result);
}

handleNestedPromise();



