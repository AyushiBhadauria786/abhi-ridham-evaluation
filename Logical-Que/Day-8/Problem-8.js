// Sort an array using the selection sort technique.


// Using for loop



let arr = [8,4,1,6,9,3,7,2,5];

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }

console.log(selectionSort(arr));