// Runs a mix of sync and async tasks together using Promise.all and collects their results.



function SyncTask1(){                           // SyncTask-1
    return "Synchronous result-1";
}

function SyncTask2(){                         // SyncTask-2
    return "Synchronous result-2"
}

function asyncTask1(){                          // AsyncTask-1
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("asynchronous result")
        },3000)
    })
}

function asyncTask2(){                         // AsyncTask-2
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("asynchronous result")
        },3000)
    })
}




// Combine the sync and async task using Promise.all


Promise.all([SyncTask1(),SyncTask2(),asyncTask1(),asyncTask2()])            // Combine sync and async
.then((result) => {                                                     
    console.log("Result", result)
})
.catch((error) => {
    console.error(error)
})