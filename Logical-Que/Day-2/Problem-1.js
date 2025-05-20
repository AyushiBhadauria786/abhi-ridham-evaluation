// Find Factorial of a Number

// using for loop

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));  



// using recursive method

function factorial(n) {
    if  (n === 0 || n === 1) {
        return 1;  
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));  

// arrow and ternary operator

const factorial1 = n1 => n1 === 0 ? 1 : n1 * factorial1(n1 - 1);
console.log(factorial1(5));  



// while loop 

function fact(n) {
    let res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }
    return res;
}
console.log(fact(5));