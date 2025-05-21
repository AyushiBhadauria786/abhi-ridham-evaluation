// Write a Program to print the frequency of elements in an array?

//Solution 1

//first we give array and number in function, then one counter to check occurence 
//then will loop threw it till n if the i and n is same then we increment counter and last return value.

function findFrequency(arr,n){
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == n){
            counter++;
        }
    }
    return counter;
}



//Solution - 2

//using filter method we check for value and if it found then we return length

const arr = [1,1,2,2,3,2,5,2];
console.log(findFrequency(arr,2));


const frequency = (arr,counter) => {
    return arr.filter(item => item === counter).length
}

console.log(frequency(arr,9));

