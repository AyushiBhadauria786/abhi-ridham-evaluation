// Write a JavaScript program that processes an array of asynchronous tasks sequentially using Promises.


const asyncTask = (TaskName,Delay) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            console.log(`${TaskName} Completed`)
            resolve(TaskName);
        },Delay)
    })
}


// Array of tasks

const tasks = [
    () => asyncTask('Task 1',1000),
    () => asyncTask('Task 2',2000),
    () => asyncTask('Task 3',1500)
];



const processesTaskSquentially = (tasks) =>{
    let promise = Promise.resolve();

    tasks.forEach(task => {
        promise = promise.then(() => task())
    });

    return promise;
}



processesTaskSquentially(tasks).then(() => {
    console.log("All tasks Completed sequentially")
});

