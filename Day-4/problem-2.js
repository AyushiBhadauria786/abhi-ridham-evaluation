//Write a Program to print all Divisors of a given number.


//Solution 1

//In this approch simple we take one empty arr then will loop on number
//and check if i is divisible by number if it is we will push it to arr and return arr.

function printDivisor(num){
    let arr = []
    for(let i=0; i< num; i++){
        if(num % i === 0){
            arr.push(i);
        }
    }
    return arr;
}

console.log(printDivisor(10));

//Solution 2

//this is better approch read in one article that first we have to do square root of number and 
//then check conditions for divisors and also that number is not equal.

function numDivisors(num){
    let resultArr = []
    for(let i=0; i < Math.sqrt(num); i++){
        if(num % i == 0){
            resultArr.push(i)
            if(i !== (num / i)){
                resultArr.push(num / i);
            }
        }
    }
    return resultArr.sort((a,b) => a - b);
}

console.log(numDivisors(36));