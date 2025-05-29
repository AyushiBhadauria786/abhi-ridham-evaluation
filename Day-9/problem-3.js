// Given a positive integer num, return true if num is a perfect square or false otherwise.
// A perfect square is an integer that is the square of an integer. In other words, 
// it is the product of some integer with itself.Without using built-in library function, such as sqrt.

//Solution 1
//using binary search 

function isPerfectSquare(num){
    let left = 1;
    let right = num

    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if(mid >= num / mid){
            right = mid
        }else {
            left =  mid + 1
        }
    }   
    return left * left === num;
};


console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));

//Solution 2

//using odd number trick


function chcekPerfectSquare(num){
    if(num < 2){
        return num
    }

    let copy = num
    let cnt = 0
    let oddNum = 1

    while(copy > 0){
        copy = copy - oddNum;
        cnt++;
        oddNum += 2;
    }
    if(cnt * cnt === num){
        return true
    }else {
        return false
    }
}


console.log(chcekPerfectSquare(16))
console.log(chcekPerfectSquare(14))
