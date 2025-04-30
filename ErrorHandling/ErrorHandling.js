
// try, catch and finally 


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
// fetchdata("https://jsonplaceholder.typicode.com/users")




// try {
//     console.log("try block: The code is running...");
// } catch (error) {
//     console.log("Error Caught: " + error);
// } finally {
//     console.log("finally block: Executed in all cases.");
// }



// different errors

// range error

// let num = 1;
// try {
//   num.toPrecision(500);
// }
// catch(err) {
//     console.log(err)
// }


// reference error


// let x = 5;
// try {
//   x = y + 1;
// }
// catch(err) {
//     console.log(err)
// }



// syntax error


// try {
//     eval("alert('Hello)");
//   }
//   catch(err) {
//     console.log(err)
//   }



//  type error



// let num = 1;
// try {
//   num.toUpperCase();   
// }
// catch(err) {
//     console.log(err)
// }



// URI error

// try {
//     decodeURI("%%%");  
//   }
//   catch(err) {
//     console.log(err)
//   }



// throw

// let num = 1;
// try {
//   num.toUpperCase();   
// }

// catch(err) {
//     throw new Error("your code have type mistake")
// }

