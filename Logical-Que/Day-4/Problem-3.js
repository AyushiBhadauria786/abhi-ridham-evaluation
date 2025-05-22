// Convert an Array of Strings to Uppercase



let arr = ["abhi","bhavesh","het","nikita"];

// Using for loop

function ArrayOfString(arr){
    const UppercaseValue = [];                                 // store upper case value
    for(i = 0; i<arr.length; i++){
        UppercaseValue.push(arr[i].toUpperCase());              // push the value 
    }
    return UppercaseValue;
}

console.log(ArrayOfString(arr));



// Using map method


function ArrayMap(arr){
    const Uppercase = arr.map((item)=>item.toUpperCase());
    return Uppercase;
}

console.log(ArrayMap(arr));



// Using forEach method

function ArrayForEach(arr){
    const Uppercase = [];                       // same store the value 
    arr.forEach(item => {
        Uppercase.push( item.toUpperCase())                 // push the value
        
    })
    return Uppercase;
}

console.log(ArrayForEach(arr));