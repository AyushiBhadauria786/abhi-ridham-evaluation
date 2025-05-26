// Combining multiple objects from an array into one single object by merging their properties(Convert Array of Objects to Single Object);


let arr = [
    { name: "abhi" },
    { age: 21 },
    { city: "junagadh" }
]

// Using for loop


function ArrayOfObject(arr) {
    let result = {};


    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        const keys = Object.keys(obj);
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            result[key] = obj[key];
        }
    }
    return result;
}

console.log(ArrayOfObject(arr));





// Using Object Assign Method 


const output = Object.assign({}, ...arr);
console.log(output);



// Using reduce method


const Output = arr.reduce((acc, curr) => ({ ...acc, ...curr }), {});
console.log(Output);