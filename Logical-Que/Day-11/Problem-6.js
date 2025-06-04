// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.



function asyncOpration1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Asynchronous Operation 1')
            resolve();
        }, 5000);
    });
}

function asyncOpration2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Asynchronous Operation 2'); 
            resolve();
        }, 2000);
    });
}

function asyncOpration3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Asynchronous Operation 3')
            resolve();
        },1500);
    });
}


async function PerformOperation() {
    try {

        await asyncOpration1();
        await asyncOpration2();
        await asyncOpration3();
        console.log("All operation completed")


    } catch (error) {
        console.log('Error', error.message)
    }
}

PerformOperation();



