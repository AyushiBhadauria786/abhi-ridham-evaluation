// Find the largest element in a nested array


let arr = [1,2,3,[4,5,7],[10]];


// Using for loop;

function LargestElement(arr) {
    let largest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const subArrayLargest = LargestElement(arr[i]);
        largest = Math.max(largest, subArrayLargest);
      } else {
        largest = Math.max(largest, arr[i]);
      }
    }
    return largest;
  }
  console.log(LargestElement(arr));
  


// Using Math.max and Flat Method

function LargestElement(arr) {
    const flattenedArray = arr.flat(Infinity);
    return Math.max(...flattenedArray);
  }
  
console.log(LargestElement(arr)) 