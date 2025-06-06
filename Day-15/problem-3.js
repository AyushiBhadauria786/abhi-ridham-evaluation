// Write a JavaScript program Create a delay function without using setTimeout directly

//So after reading some of articles about how we can perform for this find out that this is not good way to
// write because it block JavaScripts main thread, but for knowing purpose I find solution using promises,date
// and loop


//Solution 1
function delay(ms){
    const start = Date.now();
    let now = start;
    while (now - start < ms){
        now = Date.now();
    }
}


console.log("Before delay");
delay(2000);
console.log("After delay");


//Solution 2 
//we can use setInterval with Date and promise to make delay then using async await we can create delay in function

function makeDelay(ms){
    return new Promise(resolve => {
        const start = Date.now();
        const interval = setInterval(() => {
            if(Date.now() - start >= ms){
                clearInterval(interval);
                resolve();
            }
        },1);
    });
}

async function testDelay() {
    console.log("First before");
    await makeDelay(2000);
    console.log("Second after");
    
}

testDelay();
