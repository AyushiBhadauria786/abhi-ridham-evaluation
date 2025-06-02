// Write a JavaScript program that processes an array of asynchronous tasks sequentially using Promises.

//Solution 1

const asyncTask = (taskName, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${taskName} completed`);
            resolve(taskName);
        }, time);
    })
}

const tasks = [
    () => asyncTask("Task 1",1000),
    () => asyncTask("Task 2",2000),
    () => asyncTask("Task 3",1500),
];


const processTasksSequentially = (tasks) => {
    let promise = Promise.resolve();

    tasks.forEach((task) => {
        promise = promise.then(() => task());
    });

    return promise;
};

processTasksSequentially(tasks)
    .then(() => console.log("All task completed"));



//Solution 2


const tasks2 = [
    () => asyncTask("Task 11",5000),
    () => asyncTask("Task 12",4000),
    () => asyncTask("Task 13",5000),
]

const sequentiallyProcessTasks = async (tasks) => {
    for(const task of tasks){
        await task();
    }
    console.log("Completd All tasks");
}

sequentiallyProcessTasks(tasks2)