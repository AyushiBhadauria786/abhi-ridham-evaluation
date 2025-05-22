//How to get a key in a JavaScript object by its value ?

const obj = {
    name: "Ridham",
    age: 22,
    city: "ABD"
}

//using hasOwnProerty

function keyByValue(obj,value){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] === value){
                return key;
            }
        }
    }
}

console.log(keyByValue(obj,22));


//Solution - 2

//using find method

function getKeyByValue(object,value){
    let temp = Object.keys(object);
    return temp.find(key => object[key] === value);
}

console.log(getKeyByValue(obj,"Ridham"));


