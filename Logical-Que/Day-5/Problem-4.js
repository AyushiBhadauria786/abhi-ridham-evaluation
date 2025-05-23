// Find second smallest number


// Using for loop

let arr = [12, 34, 65, 78, 34, 13, 94,99, 27, 30, 19, 53, 87];

function SecondSmallest(arr){
    let smallest = Infinity;
    let SecondSmallest = Infinity;

    for(let i = 0; i< arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    for(let i = 0; i< arr.length; i++ ){
        if(arr[i] < SecondSmallest && arr[i] !== smallest ){
            SecondSmallest = arr[i];
        }
    }
    return SecondSmallest;

}

console.log(SecondSmallest(arr));



//  Using Sort Method 



function Sort(arr){
    if(arr.length < 2 ){
        return 'Array must have at least two elements';
    }

    const sorted = [...arr].sort((a,b)=>a-b);
    return sorted[1];
}

console.log(Sort(arr));





// Using Math.min

function SecondSmallestMathMax(arr) {
    if (arr.length < 2) {
      return "Array must have at least two elements";
    }
  const Smallest = Math.min(...arr);
  const filteredArray = arr.filter(num => num !== Smallest);

  return Math.min(...filteredArray);
}

console.log(SecondSmallestMathMax(arr));