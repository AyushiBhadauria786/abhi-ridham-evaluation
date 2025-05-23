// Find second largest number

let arr = [12, 34, 65, 78, 34, 13, 94,99, 27, 30, 19, 53, 87];


// Using for loop


function SecondLargest(arr) {
    let largest = -1;
    let SecondLargest = -1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){                         
            largest = arr[i];                                   // find largest element
        } 
    }
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > SecondLargest && arr[i] !== largest){            // find second large element
                SecondLargest = arr[i];
            }
        }
        return SecondLargest
    }


    console.log(SecondLargest(arr));




// Using sort method 


function SecondLargestSort(arr){
    if(arr.length < 2 ){
        return 'Array must have at least two elements';
    }

    const sorted = [...arr].sort((a,b)=>b-a);
    return sorted[1];
}

console.log(SecondLargest(arr));



// Using Math.max 

function SecondLargestMathMax(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements";
    }
  const largest = Math.max(...arr);
  const filteredArray = arr.filter(num => num !== largest);

  return Math.max(...filteredArray);
}

console.log(SecondLargestMathMax(arr));