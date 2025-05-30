// Write an algorithm to determine if a number n is happy.
// Those numbers for which this process ends in 1 are happy.

//Solution 1

function isHappy(num){
    let sum = 0;
    while(num > 0){
        let value = num % 10;
        num = Math.floor(num / 10);
        sum += value * value
    }
    if(sum === 1){
        return true;
    }else if(sum > 1 && sum <= 4){
        return false;
    }
    return isHappy(sum);
}

console.log(isHappy(24));
console.log(isHappy(23));