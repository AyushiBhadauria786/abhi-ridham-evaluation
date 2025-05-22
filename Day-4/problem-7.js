// How to create an object from the given key-value pairs using JavaScript

//Solution - 1
const keys = ["name","age","city"];
const values = ["Ridham",22,"ABD"];


function createObj(key,val){
    const obj = {};

    for (let i = 0; i < key.length; i++) {
        obj[key[i]] = val[i];
    }
    return obj;
}

console.log(createObj(keys,values));


//Solution 2

//using object.assign

let empty ={}
let key1 = 0;
let value1 = "Subject"
let key2 = 1;
let value2 = "Syllabus"


Object.assign(empty, {[key1]: value1});
Object.assign(empty, {[key2]: value2});

console.log(empty);


//Solution - 3

//using map function

const keys2 = [0,1,2];
const data = ["Apple","Mango","Kiwi"];

const fruitObj = keys2.map((key,index) => [key,data[index]]);

const result = Object.fromEntries(fruitObj);

console.log(result);
