// Write a JavaScript function that creates a Promise that resolves after a given number of milliseconds

function delayPromise(delay,url){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Done Promise Resolved in ${delay} milliSeconds.`,url)
            resolve("message");
        },delay)
    })
}


async function makeAPICall(url) {
    await fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

async function executeFunction() {
    console.log("Before Delay");
    await delayPromise(3000).then(res => console.log(res))
    await delayPromise(3000,makeAPICall('https://jsonplaceholder.typicode.com/posts/1'))
    console.log("After Delay")
}

executeFunction();
