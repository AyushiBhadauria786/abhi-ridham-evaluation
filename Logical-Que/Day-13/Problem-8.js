// Write a JavaScript function that takes multiple Promises and resolves with the first successful result using Promise.any().




const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Error in Promise1"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 1500, "Success from promise2"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "Success from promise3"));



Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log("First Successful result : ", result);
    })
    .catch((error) => {
        console.log("Error : ", error)
    })



const promise4 = new Promise((resolve) =>
    setTimeout(resolve, 3000, `First Promise's Value`)
);
const promise5 = new Promise((resolve) =>
    setTimeout(resolve, 2000, `Second Promise's Value`)                     // it return first resolved promise
);
const promise6 = Promise.reject(`Third Promise's Value`);


Promise.any([promise4, promise5, promise6]).then((result) => console.log(result));




const promise7 = new Promise((resolve, reject) =>
    setTimeout(reject, 3000, `First rejection reason`)
);
const promise8 = new Promise((resolve, reject) =>
    setTimeout(reject, 2000, `Second rejection reason`)         // if all promise is reject then it return error
);
const promise9 = Promise.reject(`Third rejection reason`);

Promise.any([promise7, promise8, promise9])
    .then((result) => {
        console.log("Result : ", result)
    })
    .catch((error) => {
        console.log(error)
    })

