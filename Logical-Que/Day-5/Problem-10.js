// Calculate sum of digits


let digits = "456";


// Using for loop 

function SumOfDigits(digits){
    let sum = 0;
    for(let i = 0; i< digits.length; i++){
        sum+=parseInt(digits[i]);
    }
    return sum;
}
console.log(SumOfDigits(digits))



// Using for Each

function sumOfDigit(num) {
    let sum = 0;
    num.toString().split("").forEach(digit => {
        sum += parseInt(digit);
    });
    return sum;
}

console.log(sumOfDigit(digits));


// Using reduce Method

function sumDigitsReduce(num) {
    const numString = num.toString();
    const digitsArray = numString.split('');
    const sum = digitsArray.reduce((acc, digit) => {
      return acc + parseInt(digit);
    }, 0);
    return sum;
  }

  console.log(sumDigitsReduce(digits));

