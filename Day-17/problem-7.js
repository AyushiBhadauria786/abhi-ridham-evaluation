// Implement a function that acts like setTimeout but returns a function to cancel the pending callback.

//Solution 1:

//here created cancel inside a function if we execute this function the timeout will be cancle if it is pending
//execute.

function settableTimeout(callback, delay){
    let timeoutId = null;

    const actualCallback = () => {
        timeoutId = null;
        callback();
    }

    timeoutId = setTimeout(actualCallback,delay)

    const cancel = () => {
        if(timeoutId !== null){
            clearTimeout(timeoutId);
            timeoutId = null
            console.log("Timeout cancelled.")
        }else {
            console.log("No pending timeout to cancle or already executed")
        }
    }
    return cancel;
}

//Examples:

console.log("--- Example 1 : Basic usage ---");
const cancelCallback1 = settableTimeout(() => {
    console.log("Callback 1 executed after 2 seconds.   ");
},2000);

setTimeout(() => {
    console.log("Waiting for Callback 1...");
},1000)



console.log("--- Example 2: Cancelling before execution ---");
const cancelCallback2 = settableTimeout(() => {
    console.log("Callback 2 executed - this will not print")
},3000)

setTimeout(() => {
    console.log("Attempting to cancel Callback 2...");
    cancelCallback2();
},1000)

setTimeout(() => {
    console.log("Waited 4 seconds, Callback 2 should not have run.");
}, 4000);



console.log("\n--- Example 3: Cancelling after execution(no effect) ---");
const cancelCallback3 = settableTimeout(() => {
    console.log("Callback 3 executed after 1 second.");
},1000);

setTimeout(() => {
    console.log("Attempting to cancel Callback 3 after it has executed..")
    cancelCallback3();
},2000);


setTimeout(() => {
    console.log("Finished all examples..");
},5000)


//Solution 2

//Same functionality as above but less code..

function setCancelableTimeout(callback, delay){
    const timeoutId = setTimeout(callback,delay)

    return function cancle(){
        clearTimeout(timeoutId);
    }
}


const cancleTimeout = setCancelableTimeout(() => {
    console.log("This message shold not appear");
},1000)


cancleTimeout();

const canclableTimeout = setCancelableTimeout(() => {
    console.log("This message will display");
},2000)