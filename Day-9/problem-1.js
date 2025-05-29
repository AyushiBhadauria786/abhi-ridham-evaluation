// Write a Program to find Ugly number,An ugly number is a positive integer which does not have 
// a prime factor other than 2, 3, and 5.


//Solution 1

//here only three possible factor,so creted one array of it and will loop threw it and check for if 
//number has these prime factors.

function isUgly(num){

    if(num === 0){
        return 0; 
    }
    if(num === 1){
        return 1
    }

    const primeFactors = [2,3,5];

    for(let i = 0; i < primeFactors.length; i++){
        while(num && num % primeFactors[i] === 0){
            num = Math.floor(num / primeFactors[i])
        }
    }

    return num === 1;
};

console.log(isUgly(6));




//Solution - 2

//here we use recursion for checking factor of number 

function checkUglyNum(num){
    if(num <= 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    if(num % 2 === 0){
        return checkUglyNum(num / 2);
    }else if(num % 3 === 0){
        return checkUglyNum(num / 3);
    }else if(num % 5 === 0){
        return checkUglyNum(num / 5);
    }

    return 0
}

console.log(checkUglyNum(6));