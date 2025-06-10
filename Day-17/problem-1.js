// Given an array of numbers, filter out the even numbers, then square each remaining number, and 
// finally, calculate the sum of the squared numbers.


const numbers = [1,2,3,4,5,6];


//Step 1 : first after reading statement we have to filter out even numbers but we next have to perform square
//on remaining so we filter that which is not even

const filteredNums = numbers.filter(item => item % 2 !== 0);
// console.log(filteredNums);


//Step 2: Now that we have filtered remaining nums so as per statements we square the numbers using map
const squareRemaining = filteredNums.map(num => num * num);
// console.log(squareRemaining);

//Step 3: finally , we have to calculate sum of squared numbers so using reduce we get sum of numbers as final 
//result.
const sumOfSquares = squareRemaining.reduce((curr,acc) => {
    return curr + acc; 
},0);
console.log(sumOfSquares);


//Using chaining and combining methods:

const finalOutput = numbers
                    .filter(item => item % 2 !== 0)
                    .map(num => num * num)
                    .reduce((curr,acc) => acc + curr);

console.log("Using method chaining:",finalOutput)
