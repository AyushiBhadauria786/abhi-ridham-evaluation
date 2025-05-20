// Check if a Number is Prime

function isPrimeNum(n){
    if(n <= 1){
        return false;
    }

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    } 
    return true;
}

console.log(isPrimeNum(11));



// Optimized Method using sqrt

function OptimizedPrimeNum(n){
    if(n <= 1) {
        return false;
    }

    for(let i = 2; i<=Math.sqrt(n);i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

console.log(OptimizedPrimeNum(11));




