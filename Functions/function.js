// normal function 

function multiply(num1, num2) {
    const result = num1 * num2
    console.log(result);
};
multiply(12,3);



// arrow function 

const multiply1 = (num1, num2) => {
    console.log(num1 * num2)
}
multiply1(12,5);



// IIFE function

const getting = "Hello world";
(function () {
  console.log(getting);
})();



(function addNumbers() {
    console.log(100 + 20);
})();



const result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();
 
console.log(result);




(function() {
    var localVar = 'This is a local variable';
    console.log(localVar);
})();



// callback function


function greeting(name,callback){
    console.log(`hello ${name}`);
    callback();
}

function doing(){
    console.log("what are you doing");
}

greeting("abhi",doing)




// console.log("Start");

// setTimeout(function () {
//     console.log("Inside setTimeout");
// }, 2000);

// console.log("End");




// higher order function


function add() {
    console.log("hii i am add function");
  }
  function higherorder(func){
    console.log("i am higher order function");
    func();
  }
  higherorder(add);   



  function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5)); 
  console.log(triple(5)); 

  // using map

const arr1 = [1,2,3,5,4,5];
const Output = arr1.map((num)=>num*2);
console.log(arr1)
console.log(Output)

// using filter

const arr = [1,2,3,4,5,21,53,3,34];
const out = arr.filter((num)=>num>18);
console.log(arr);
console.log(out);

// using reduce

const array = [12,54,3,4,234,6,98,92,73];
const newarr = array.reduce((cur,max)=>{
  if (cur>max) 
    max = cur;
    return max
})
console.log(newarr);



// first class function


function sayHello() {
    // returning the function
    return function() {
       console.log("Hello!");
    }
 }


const newFun = sayHello();
newFun();


// 1. Assigning a function to a variable
const myFunction = function() {
    return "Hello!";
  };
  console.log(myFunction());-
  
  // 2. Passing a function as an argument
  function greet(func, name) {
    return func() + ", " + name + "!";
  }
  const sayHello = function() {
    return "Hello";
  };
  console.log(greet(sayHello, "World"));
  
  
  // 3. Returning a function from another function
  function multiplier(factor) {
    return function(x) {
      return x * factor;
    };
  }
  const doubles = multiplier(2);
  console.log(doubles(5)); 