//  Find the Largest Number in an Array


let arr = [23,45,3,78,41,38,36,26];


// using for loop

let max = arr[0];
for(i = 1 ; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);


// using reducer 

let maximum = arr.reduce((max,curr)=>{
    if(curr > max){  
     return  curr
    }else{
        return max
    }
},arr[0])
console.log(maximum);

 
//math.max method

const maxi = Math.max(...arr);
console.log(maxi);
