// Find all pairs in an array whose sum equals a given target.


let arr =[1,2,3,4,5,6]; 
let sum = 7


// Using for loop (brute force)


function SumOfPairs(arr,sum){
    const pair = [];

    for(let i = 0; i<arr.length; i++){
        for(let j = i + 1; j<arr.length;j++){
            if(arr[i] + arr[j] === sum){
                pair.push([arr[i],arr[j]]);
            }
        }
    }
    return pair;
}

console.log(SumOfPairs(arr,sum));



// Using Two pointer 


function SumOfPairsTwoPointer(arr,sum){
    arr.sort((a,b)=>a-b);
    const pairs = [];

    let left = 0;
    let right = arr.length - 1;
    
    while(left < right){
       const total = arr[left] + arr[right];
       if(total === sum){
        pairs.push([arr[left],arr[right]])
        left++;
        right--;
       }
       else if(total < sum){
        left++;
       }
       else{
        right--;
       }
    }
    return pairs;
}


console.log(SumOfPairsTwoPointer(arr,sum));
