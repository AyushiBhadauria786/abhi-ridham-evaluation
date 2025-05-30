// Identify the Majority Element That Appears More Than Half in the Array

let arr = [1, 1, 2, 1, 3, 5, 1];


// Using for loop 


function MajorityElement(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        let count = 0;

        for(let j = 0; j < n; j++){
            if(arr[j] === arr[i]){
                count++;
            }
        }

        if(count > n/2){
            return arr[i]
        }
    }
    return -1
}

console.log(MajorityElement(arr));




// Using Sorting


function MajorityElementSorting(arr){
    arr.sort((a,b)=>a-b);

    const MajoritykIndex = Math.floor(arr.length / 2);
    return arr[MajoritykIndex];
}


console.log(MajorityElementSorting(arr));