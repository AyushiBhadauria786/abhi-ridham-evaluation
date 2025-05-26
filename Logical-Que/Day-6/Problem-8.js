// Transforming a JavaScript object into an array of key-value pairs for easier iteration and processing(Convert object to key-value pairs)


const obj = {
    name : "abhi",
    age : 21,
    city : "junagadh"
}



// Using for in loop

function ConvertObject(obj){
    const arr = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            arr.push([key,obj[key]])
        }
    }
    return arr;
}

console.log(ConvertObject(obj));




// Using Object entries method


const output = Object.entries(obj);
console.log(output);



// Using Object keys and map method


const output1 = Object.keys(obj).map(key=>[key, obj[key]])
console.log(output1);