// Write a JavaScript program that uses async/await to perform three asynchronous tasks in sequence.


async function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 Completed"),1000)
    });
}

async function task2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 2 Completed"),2000);
    })
}

async function task3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 3 Completed"),1500);
    })
}


async function performTaskInSequence() {
    const result1 = await task1();
    console.log("Result from task1:",result1);

    const result2 = await task2();
    console.log("Result from task2:",result2);

    const result3 = await task3();
    console.log("Result from task3:",result3);


    console.log("All Tasks Are Done Now!");
}

performTaskInSequence();
