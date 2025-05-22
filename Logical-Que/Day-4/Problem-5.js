// Find the minimum value in an array


let arr = [82,45,64.72,36,49,51,67];


// Using for loop

function MinimumNumber(arr){
    let min = arr[0];                               // store arr starting value
    for(let i = 0; i<arr.length;i++){
        if(arr[i] < min){                        // compare all array  element with min if it condition true then store in min
            min = arr[i]
        }
    }
    return min;
}

console.log(MinimumNumber(arr));



// Using Math.min

const output = Math.min(...arr);
console.log(output);



// Using Reducer and math.min

const minimum = arr.reduce((acc,curr)=>Math.min(acc,curr))
console.log(minimum);




// Using sorting Array 

const sort = arr.sort((a,b)=>a-b);
console.log(sort[0]);