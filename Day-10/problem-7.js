// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

//Solution 1
function addDigit(num){
    let sum = 0;
    while(num > 0 || sum > 9){
        if(num === 0){
            num = sum;
            sum = 0;
        }
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(addDigit(38));
console.log(addDigit(0));



//Solution 2

function singleDigit(num){
    if(num === 0){
        return 0;
    }
    if(num % 9 === 0){
        return 9;
    }
    return num % 9;
}

console.log(singleDigit(38));
console.log(singleDigit(8));