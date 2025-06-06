// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError'
// when accessing an array with an invalid index.

//Solution 1 

//using instaneof and by checking for range error

function accessArrElement(arr,index){
    try {
        const element = arr[index]

        if(element === undefined){
            throw new RangeError('Index out of bounds');
        }

        console.log('Accessed element:',element);
    } catch (error) {
        if(error instanceof RangeError){
            console.log('Error: Invalid index.Please select index within array range')
        }else{
            console.log('Error:',error.message);
        }
    }
}

const nums = [1,2,3,4,5];
accessArrElement(nums,1);


accessArrElement(nums,5);


//Solutio 2

//using custom error and checking in try block by condition


function usingCustomError(arr,index){
    try {
        if(index < 0 || index > arr.length){
            throw new Error('Array value no available.')
        }
        console.log(`Element at index ${index}:`,arr[index])
    } catch (error) {
        if(error){
            console.error("Custom error for array:",error.message)
        }else{
            console.error("Unexpected Error",error)
        }
    }
}


usingCustomError(nums,3);
usingCustomError(nums,6);