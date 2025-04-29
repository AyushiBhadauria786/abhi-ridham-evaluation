// create a promises

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("Done"),2000);
// })

// console.log(promise);
// promise.then((result)=>console.log(result));



// const promise1 = new Promise((resolve,reject)=>{
//     const num = Math.random();
//     if(num>0.5){
//         resolve("value is  bigger then 0.5");
//     }else{
//         reject("value is samller then 0.5");
//     }
// })
// console.log(promise1);




//callback with promises



// const promise2 = new Promise((resolve,reject)=>{
//     const num = Math.random();
//     if(num>0.5){
//         resolve("value is  bigger then 0.5");
//     }else{
//         reject("value is samller then 0.5");
//     }
// })
// console.log(promise2);

// function handleResolve(value){
//     console.log(value);
// }

// function handleReject(reason){
//     console.error(reason);
// }

// promise2.then(handleResolve,handleReject);




// immediate resolve and reject using promises


// Promise.resolve("successful").then((result)=>console.log(result));
// Promise.reject("fail").then((result)=>console.log(result)); 



// promise all

// const p1 = Promise.resolve(`first promise resolve`);

// const p2 = new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,`second promise resolve`)
// );
// const p3 = new Promise((resolve,reject)=>
// setTimeout(resolve,3000,`third promise is resolve`)
// );

// Promise.all([p1,p2,p3]).then((result)=>console.log(result));



// const p4 = Promise.resolve(`first promise is resolve`);

// const p5 = new Promise((resolve,reject)=>
//     setTimeout(reject,2000,`second promise is reject`)
// );
// const p6 = new Promise((resolve,reject)=>
// setTimeout(resolve,3000,`third promise is resolve`)
// );

// Promise.all([p4,p5,p6]).then((result)=>console.log(result)).catch((error)=>console.error(error));





// all settled


// const p1 = Promise.resolve(`first promise resolve`);

// const p2 = new Promise((resolve,reject)=>
//     setTimeout(resolve,2000,`second promise resolve`)
// );
// const p3 = new Promise((resolve,reject)=>
// setTimeout(resolve,3000,`third promise is resolve`)
// );

// Promise.allSettled([p1,p2,p3]).then((result)=>console.log(result));




// const p4 = Promise.resolve(`first promise is resolve`);

// const p5 = new Promise((resolve,reject)=>
//     setTimeout(reject,2000,`second promise is reject`)
// );
// const p6 = new Promise((resolve,reject)=>
// setTimeout(resolve,3000,`third promise is resolve`)
// );

// Promise.allSettled([p4,p5,p6]).then((result)=>console.log(result));





// any



// const promise1 = new Promise((resolve) =>
//     setTimeout(resolve, 3000, `First Promise's Value`)
//   );
//   const promise2 = new Promise((resolve) =>
//     setTimeout(resolve, 2000, `Second Promise's Value`)
//   );
//   const promise3 = Promise.reject(`Third Promise's Value`);
  
//   Promise.any([promise1, promise2, promise3]).then((result)=>console.log(result));




//   const promise4 = new Promise((resolve) =>
//     setTimeout(resolve, 3000, `First Promise's Value`)
//   );
//   const promise5 = new Promise((resolve) =>
//     setTimeout(resolve, 2000, `Second Promise's Value`)
//   );
//   const promise6 = Promise.reject(`Third Promise's Value`);
  
//   Promise.any([promise4, promise5, promise6]).then((result)=>console.log(result));




// Race 


// const promise1 = new Promise((resolve) =>
//     setTimeout(resolve, 3000, `First Promise's Value`)
//   );
//   const promise2 = new Promise((resolve) =>
//     setTimeout(resolve, 2000, `Second Promise's Value`)
//   );
//   const promise3 = Promise.resolve(`Third Promise's Value`);
  
//   Promise.race([promise1, promise2, promise3]).then((result)=>console.log(result));

  



// const promise1 = Promise.reject(`Reason for rejection`);
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 3000, `First resolved Promise`)
// );
// const promise3 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, `Second resolved Promise`)
// );

// Promise.race([promise1, promise2, promise3]).then((result)=>console.log(result)).catch((error)=>console.log(error));
