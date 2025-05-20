// Find the Fibonacci Number

// . Iterative Approach

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  
  console.log(fibonacci(10)); 



// Recursive Approach


function RecursiveFibonacci(n){
    if(n <= 1) {
        return n;
    }
    return RecursiveFibonacci(n-1) + RecursiveFibonacci(n-2);
}

console.log(RecursiveFibonacci(10));



// Using an Array


function ArrayFibonacci(n){
    const fib = [0,1];
    for(let i = 2; i <= n ;i++ ){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

console.log(ArrayFibonacci(10))