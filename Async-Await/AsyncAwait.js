// async and await


// // With chaining
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((result) => console.log(result));




// // Without chaining


// async function fetchdata(url) {
// const response = await fetch(url);
// const result = await response.json();
// console.log(result);
// }

// fetchdata("https://jsonplaceholder.typicode.com/users");




// try and catch and finally




// async function fetchdata(url) {
//     try {
//         const response = await fetch(url)
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }finally{
//         console.log("Completed")
//     }
    
// }




// async function fetchData() {
//     try {
//       let response = await fetch('https://jsonplaceholder.typicode.com/users');
//       let data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

// fetchData();
  



// we can't use await outside of async function it give error



// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const json = await response.json();
// console.log(json)



// IIFE function in aysnc await


(async function () {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  })();


  



// const timepromise = (message) =>
// new Promise((resolve)=>setTimeout(resolve,3000,message));

// async function asyncfun() {
//     const response = await timepromise("promise is finished");
//     console.log(response);
// }
// asyncfun();


