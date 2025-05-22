// Write a Program to move all zeros to the end of the array


//Solution - 1
function moveZero(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[counter++] = arr[i];
    }
  }

  while (counter < arr.length) {
    arr[counter++] = 0;
  }

  return arr;
}

const zeroArray = [2, 0, 0, 4, 0, 5, 6];
console.log(moveZero(zeroArray));

//Solution 2:
function zeroToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], (arr[count] = arr[count]), arr[i]];
      count++;
    }
  }
  return arr;
}

console.log(zeroToEnd(zeroArray));
