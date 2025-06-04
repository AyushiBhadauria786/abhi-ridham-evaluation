// Write a JavaScript program that takes an array of Promises and logs both resolved and rejected results using Promise.allSettled().




const promise1 = Promise.reject("Promise 1 is rejected");
const promise2 = Promise.reject("Promise 2 is rejected");
const promise3 = Promise.reject("Promise 3 is rejected");
const promise4 = Promise.resolve("promise 4 is resolved");


Promise.allSettled([promise1,promise2,promise3,promise4])
.then((results) => {
    results.forEach((result) => {
        if(result.status === "fulfilled"){
            console.log("fulfilled :", result.value)
        }
        else if(result.status === "rejected"){
            console.log("rejected :", result.reason)
        }
    })
})



// Another example 

const p1 = Promise.resolve(`first promise resolve`);

const p2 = new Promise((resolve,reject)=>
    setTimeout(resolve,2000,`second promise resolve`)
);
const p3 = new Promise((resolve,reject)=>
setTimeout(resolve,3000,`third promise is resolve`)
);

Promise.allSettled([p1,p2,p3]).then((result)=>console.log(result));




const p4 = Promise.resolve(`first promise is resolve`);

const p5 = new Promise((resolve,reject)=>
    setTimeout(reject,2000,`second promise is reject`)
);
const p6 = new Promise((resolve,reject)=>
setTimeout(resolve,3000,`third promise is resolve`)
);

Promise.allSettled([p4,p5,p6]).then((result)=>console.log(result));