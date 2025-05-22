// Find the Average of an Array


let arr = [12,23,34,28,2];

// Using for loop


function AverageOfArray(arr){
    let sum = 0;                                          // store the value
    for(let i = 0; i< arr.length; i++){
        sum += arr[i];                                  // sum add array of element
        Average = sum / arr.length                       // for average it divide by array length 
    }
    return Average;
}

console.log(AverageOfArray(arr))



// Using for Each

function AverageForEach(arr){
    let sum = 0;                                        // store the value
    arr.forEach((ele)=>{
        sum += ele;                                      // sum add array of element
        Average = sum / arr.length;                  // for average it divide by array length 
    })
    return Average;
}

console.log(AverageForEach(arr));


// Using reduce method

const sum = arr.reduce((acc,curr)=>acc + curr);        // sum of the all element
const AverageSum = sum / arr.length;                    // for average it divide by array length 
console.log(AverageSum);