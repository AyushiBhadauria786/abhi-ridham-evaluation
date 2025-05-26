// Given a non-empty array of integers arr, every element appears twice except for one.
// Find that single one.

const arr = [2, 1, 2, 1, 4];

//Solution 1

//using native method using for loop and counter

function findSingle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === num) {
        count++;
      }
    }
    if (count == 1) {
      return num;
    }
  }
  return -1;
}

console.log(findSingle(arr));


//Solution 2

//using XOR method

function getSingleElement(arr){
    let XOR = 0;
    for(let i = 0; i < arr. length; i++){
        XOR = XOR ^ arr[i]
    }
    return XOR;
}

console.log(getSingleElement(arr));