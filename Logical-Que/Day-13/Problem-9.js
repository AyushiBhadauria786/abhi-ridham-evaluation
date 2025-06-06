// Write a JavaScript program that uses async/await to perform three asynchronous tasks in sequence.




const asyncTask = (taskName,time) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} Completed`);

        },time)
    });
}


const ExecuteTask = async () => {

    const result1 = await asyncTask("Task-1",1000);
    console.log(result1);

    const result2 = await asyncTask("Task-2",2000);
    console.log(result2);

    const result3 = await asyncTask("Task-3",3000);
    console.log(result3);


    console.log("All task completed sequentially");
}


ExecuteTask();