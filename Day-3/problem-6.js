// Write a Program to print Fibonacci sequence up to n terms?

//Solution-1

//In this approch I follow the pseudo code from website and first check for if it is 1 so return 0
//If the element is 2 so return 1 then using for loop iterate from 2 to n and push elements in series


function fibonacci(n){
    if(n === 1){
        return [0];
    }
    if(n === 2){
        return [1];
    }
    const series = [0,1];
    for(let i = 2; i < n; i++){
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

console.log(fibonacci(8));


//Solution-2

//same as above but using while loop 

function fiboSeqence(n){
    let series = [0,1];
    let i = 2;
    while(i < n){
        series[i] = series[i -1] + series[i -2];
        i++;
    }
    return series;
}

console.log(fiboSeqence(1));


//Solution 3

function fiboUsingSum(n){
    let num1 = 0
    let num2 = 1
    console.log(num1)
    console.log(num2)
    for(let i = 2; i < n; i++){
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum
        console.log(sum);
    }
}

fiboUsingSum(8);