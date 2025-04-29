// console.log("Start");
// setTimeout(() => {
//  console.log("Inside Timeout");
// }, 0);
// Promise.resolve().then(() => {
//  console.log("Inside Promise");
// });
// console.log("End");




// console.log('A'); // Synchronous

// setTimeout(() => {
//   console.log('B'); // Macrotask
// }, 0);

// console.log('C'); // Synchronous



// console.log('A');

// setTimeout(() => {
//   console.log('B'); // Macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log('C'); // Microtask
// });

// console.log('D');




// Promise.resolve().then(() => {
//     console.log('A');
//     Promise.resolve().then(() => console.log('B'));
//   });
  
//   console.log('C');




// setTimeout(() => console.log('A'), 0); // Macrotask
// setImmediate(() => console.log('B'));  // Macrotask in Node.js




// document.body.addEventListener('click', () => {
//     console.log('Click Event'); // Macrotask
//   });
  
//   Promise.resolve().then(() => console.log('Promise Resolved')); // Microtask
//   console.log('End');



// setTimeout(() => console.log('A'), 0);
// Promise.resolve().then(() => console.log('B'));
// setTimeout(() => console.log('C'), 0);
// Promise.resolve().then(() => console.log('D'));




// console.log('A');

// setTimeout(() => {
//   console.log('B');
//   Promise.resolve().then(() => {
//     console.log('C');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('D');
//   setTimeout(() => {
//     console.log('E');
//   }, 0);
// });

// console.log('F');





// console.log('1');

// setTimeout(() => {
//   console.log('2');
//   Promise.resolve().then(() => {
//     console.log('3');
//   }).then(() => {
//     console.log('4');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('5');
// }).then(() => {
//   console.log('6');
// });

// console.log('7');




// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise 2');
// });

// console.log('End');



// setTimeout(() => {
//     console.log('Timer 1');
//     Promise.resolve().then(() => {
//       console.log('Microtask 1');
//       Promise.resolve().then(() => {
//         console.log('Microtask 2');
//       });
//     });
//   }, 0);
  
//   Promise.resolve().then(() => {
//     console.log('Microtask 3');
//   });
  
//   console.log('Main Task');





// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
//   Promise.resolve().then(() => {
//     console.log('Promise 1');
//   }).then(() => {
//     console.log('Promise 2');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 3');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise 4');
// });

// console.log('End');