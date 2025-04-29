// Object Destructuring

const person = {
    name : "abhi",
    age : 21,
    city : "junagadh"
};

let {name,age} = person;
console.log(name);



const person2 = {
    name : "abhi",
    age : 21,
    obj:{
        city : "junagadh",
    },
}

let {obj:{city},...rest} = person2;
console.log(city);



// it does not change orignal object 

const person3 = {
    firstName: "abhi",
    lastName: "butani",
    age: 22
  };
  

let {firstName, lastName, country = "india"} = person3;
console.log(country)


// property alias

let {firstName : Name} = person3
console.log(Name);






// Array Destructuring



const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let[fruits1,fruits2] = fruits
console.log(fruits1);
console.log(fruits2);


// skipping Array

let [fruits11,,,fruits12] = fruits;
console.log(fruits11)
console.log(fruits12)


// Array position Value 

const fruit = [ "Apples", "Mangos"];
let {[0]:fruit1 ,[1]:fruit2} = fruit;
console.log(fruit1);
console.log(fruit2);


// rest property

const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a,b, ...rested] = numbers
console.log(a,b)
console.log(rested)



// Swapping js variable

let fname = "abhi";
let lname = "butani";
[fname, lname] = [lname, fname];
console.log(fname);
console.log(lname);
