// Write a JavaScript Program to swap two variables without using any other variable.

//Solution 1:
//here I have applied simple maths rules and swapped value by doing addition of values and then subtraction.
//so here the value will swap without any third variable 

function swapValue(a,b){
    console.log("a value before swap:",a);
    console.log("b value before swap:",b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log();

    console.log("a value after swap:",a);
    console.log("b value after swap:",b);
}

swapValue(10,20);

console.log("Second solution")

//Solution 2

//So after trying with + and - we can also use * and / for these task the result we get will be same 

function valueSwap(a,b){
    console.log("a value before swap:",a);
    console.log("b value before swap:",b);

    a = a * b;
    b = a / b;
    a = a / b;

    console.log();

    console.log("a value after swap:",a);
    console.log("b value after swap:",b);
}

valueSwap(10,5);


//Solution 3

//this approch is very minimal and only one line code we can use * and  / and using = we can swap value

let x = 100;
let y = 555;

x = (x * y) / (y = x);

console.log()
console.log("value of x:",x);
console.log("value of y:",y);