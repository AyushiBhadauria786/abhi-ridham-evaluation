// Write a JavaScript function that creates a cancellable Promise by using a custom wrapper.


function CreatesCancelablePromise(executor){

    let cancel;           

    const promise = new Promise((resolve,reject) => {
        cancel = () => reject(new Error("Promise Cancelled"));       // Define cancel function
        executor(resolve,reject); 
    });

    promise.cancel = cancel;       // Attach cancel function to the promise
    return promise;
}



const cancellable = CreatesCancelablePromise((resolve) => {
    setTimeout(() => {
        resolve("Promise is completed")             // Simulates an async task
    },5000)
})


cancellable.then((data) => console.log(data)).catch((error) => console.error(error));   // Handle rejection


setTimeout(() => {
    cancellable.cancel();     // cancel the promise after 2 seconds
},2000)