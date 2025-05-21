// Get Random Element from Array



// Using math.floor and math.random

let arr = [1,2,3,4,5,6,7,8,9];


function rendomValue(arr){
    const index = Math.floor(Math.random() * arr.length);        // condition of random value
    return arr[index];
}


console.log(rendomValue(arr));


// Using ES6 Features


const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
console.log(getRandomItem(arr));