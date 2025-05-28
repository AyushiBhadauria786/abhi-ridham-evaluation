// Generate a running sum array from a list of numbers.


let arr = [1,3,5,7,9,11];


// Using for loop


function RunningSumArray(arr){
    let output = [];
    let current = 0;
    for(let i = 0; i<arr.length; i++){
    current += arr[i]
      output.push(current)
    }
    return output;
}



console.log(RunningSumArray(arr))



// Using map method


let array = [2,4,6,8,10,12];


function RunningSumArrayMap(arr){
    let current = 0;

    const output = arr.map((item)=>item+=current);
    return output;
}

console.log(RunningSumArray(array))





// Using for Each

let arr1 = [1,2,4,5,6,7,9];

function RunningSumArrayForEach(arr){
    let output = []
    let current = 0;

    arr1.forEach((item)=>{
        current+=item
        output.push(current)
    })
    return output
}


console.log(RunningSumArrayForEach(arr1));

