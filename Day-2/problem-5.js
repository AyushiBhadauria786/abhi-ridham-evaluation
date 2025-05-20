//Write a Program to check if a number is prime or not.

//Solution- 1

function isPrime(num){
    if(num <= 1)
        return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));


//Solution - 2

function checkPrime(num){
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            count++;

            if(num / i !== i){
                count++;
            }
        }
    }   

    if(count == 2){
        return true;
    }else{
        return false;
    }
}

let n = 7;
let prime = checkPrime(n);
console.log(prime);


