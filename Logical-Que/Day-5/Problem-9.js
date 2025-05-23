// Find the maximum number in an array


let arr = [12,34,65,23,87,98,34,78,90];


// Using for loop


function maximumNum(arr){
    let max = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(maximumNum(arr));



// Using Math.max

const output = Math.max(...arr);
console.log(output);



// Using Reducer and math.max

const minimum = arr.reduce((acc,curr)=>Math.max(acc,curr))
console.log(minimum);


// Using sorting Array 

const sort = arr.sort((a,b)=>b-a);
console.log(sort[0]);