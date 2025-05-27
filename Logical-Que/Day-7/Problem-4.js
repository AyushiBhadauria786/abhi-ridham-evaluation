// Rotate the array left by one position, moving the first element to the end.(left rotate the array by one place)


let arr = [1,2,3,4,5,6,7,8,9];


// Using For loop


function LeftShiftArray(arr){
    if(arr.length <= 1){
        return arr;
    }

    let temp = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length -1] = temp;
    return arr 
}
console.log(LeftShiftArray(arr));



// Using Shift() Method


let array = [11,12,13,14,15,16,17,18,19]


function ShiftArrayMethod(array){
    if(array.length <= 1){
        return array;
    }

    const output = array.shift();
    array.push(output);
    return array

}

console.log(ShiftArrayMethod(array))




// Using splice and concat method

let arr1 = [21,22,23,24,25,26,27,28,29];

function ShiftArraySplice(arr1){
    if(arr1 <= 1){
        return arr1
    }

    const output = arr1.splice(0,1);
    return arr1.concat(output);
}

console.log(ShiftArraySplice(arr1));