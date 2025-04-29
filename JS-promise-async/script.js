// console.log("test")

// setTimeout(() => {
//     console.log('Hello ')
// },2000)

// console.log('A');

// setTimeout(() => {
//   console.log('B'); // Macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log('C'); // Microtask
// });

// console.log('D');


console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 1000);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');



//Promises

const promise = new Promise((resolve,reject) => {
  setTimeout(() => resolve("done"),1000)
})

promise.then(item => console.log(item));


const promise1  = new Promise((resolve,reject) => {
    let num = Math.random();
    if(num >= 0.5){
        resolve("fullfilled promise")
    }else {
        reject("reject promise")
    };
})

promise1
.then(result => console.log(result))
.catch(err => console.log(err));


//Promise methods

const p1 =  Promise.resolve("First p1");
const p2 = new Promise((resolve,reject) => {
    setTimeout(resolve("second p2"),3000)
});
const p3 = new Promise((resolve,reject) => {
    setTimeout(resolve("third p3"),2000)
});

Promise.all([p1,p2,p3])
.then((value) => console.log("all",value))


Promise.race([p1,p2,p3])
.then((item) => console.log("race",item));

Promise.any([p1,p2,p3])
.then((item) => console.log("any",item));

Promise.allSettled([p1,p2,p3])
.then((item) => console.log("allsettle",item));



