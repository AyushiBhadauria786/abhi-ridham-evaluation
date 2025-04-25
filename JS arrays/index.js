// console.log("test");


//Array methods:

//1) Array length:

const fruites = ["Mango","Apple","Kiwi"]
console.log(fruites.length);


const numbers = [1,5,7,3]
console.log(numbers.length);


//2) Array toString() ;

 const stringValue = fruites.toString();
 console.log(stringValue);
 console.log(typeof(stringValue)); //string


//3) Array at():

console.log(fruites.at(2));  // returns  Kiwi
console.log(numbers.at(3))   // returns 3

//4) Array join():

console.log(fruites.join(" * "))
console.log(numbers.join(" + "))


//5)Array pop()

let fruit = fruites.pop();
console.log(fruit)
console.log(fruites);


//6)Arrat push()

console.log(fruites.push("Orange"))
console.log(fruites);



