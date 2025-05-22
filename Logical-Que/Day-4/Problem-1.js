// Find the maximum difference between two numbers in an array


let arr1 = [12,92,23,14,53];
let arr2 =  [2, 3, 10, 2, 4, 8, 1];



// using for loop


function MaxDiff(arr) {
    let maxDiff = -1;    
    for (let i = 0; i < arr.length - 1; i++) {            // use for loop 
      for (let j = i + 1; j < arr.length; j++) {           // use for loop inside for loop and start from 1
        if(arr[j] - arr[i] > maxDiff){               // check condition if arr[j]-arr[i] is bigger then maxDiff.
            maxDiff = arr[j] - arr[i];
        }
      }
    }
    return maxDiff;
  }

  console.log(MaxDiff(arr1));
  console.log(MaxDiff(arr2));
 



  // Optimized Approach


  function difference(arr){
    if(arr.length < 2){                    // length is less than   2
        return -1
    }

    let maxDiff = -1;                  
    let minEle = arr[0];                    // minEle is arr[0];

    for(let i = 1; i < arr.length; i++){              // loop start from 1 
        minEle = Math.min(minEle,arr[i])                   
        maxDiff = Math.max(maxDiff, arr[i] - minEle);          // find maximum value using math.max    
       
    }
    return maxDiff;
  }

  console.log(difference(arr1));
  console.log(difference(arr2));