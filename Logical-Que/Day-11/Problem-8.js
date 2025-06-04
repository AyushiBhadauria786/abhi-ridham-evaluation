// Write a JavaScript function that uses a chain of .then() calls to perform a series of asynchronous tasks.


// define function that return promise


function PerformTask(taskName,delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} completed`)
        },delay)
    });
}



// Chain of asynchronous tasks


PerformTask("Task 1",1000)
.then(result1 => {
    console.log(result1);
    return PerformTask("Task 2",2000)
})
.then(result2 => {
    console.log(result2);
    return PerformTask("Task 3",1500)
}) 
.then(result3 => {
    console.log(result3);
    console.log("All task completed")
})