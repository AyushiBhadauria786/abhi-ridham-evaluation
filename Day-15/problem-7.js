// Write a JavaScript program to sort an array without any inbuilt methods or traditional loops.

//using recusion and if else

const arr = [2, 4, 5, 1, 3];

function sortArr(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  function recursiveSort(arr, sorted = []) {
    if (arr.length === 0) {
      return sorted;
    }

    let min = arr[0];
    let minIndex = 0;

    function findMin(index = 0) {
      if (index >= arr.length) return;
      if (arr[index] < min) {
        min = arr[index];
        minIndex = index;
      }
      findMin(index + 1);
    }
    findMin();

    sorted.push(min);
    arr.splice(minIndex, 1);

    return recursiveSort(arr,sorted)
  }
  return recursiveSort(arr);
}

let sortedArray = sortArr(arr);
console.log(sortedArray);


console.log(sortArr([5, 2, 8, 1, 9, 4]));
