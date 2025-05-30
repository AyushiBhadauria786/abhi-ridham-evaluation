// Recursively Add Digits of a Number Until a Single Digit Remains


const n = 625;


// Using Recursion 



function AddDigitUntilSingleDigit(n){
    if(n < 10){
        return n;
    }

    const sum = String(n).split('').reduce((acc,digit)=> acc + parseInt(digit),0)
    return AddDigitUntilSingleDigit(sum)
};


console.log(AddDigitUntilSingleDigit(n));


// Using Recursive Approach with Modulo and Division

function recursiveSum(num) {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return recursiveSum(sum);
}

console.log(recursiveSum(n));