// Check if number is even or odd


let num = 210;


// Using if else

function isEvenOdd(num){
    if(num % 2 === 0){
        return "number is even";
    }
    else{
        return "number is odd";
    }
}

console.log(isEvenOdd(num));


//  Using Ternary Operator

const EvenOdd = (num % 2 === 0) ? "number is even" : "number is odd";
console.log(EvenOdd);




// Using bitwise Operator

const bitwise = ((num & 1) === 0) ? "number is even" : "number is odd";
console.log(bitwise);