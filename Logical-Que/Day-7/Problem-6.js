// Find the number that appears once when all others appear twice.


const arr = [ 3, 5, 4, 2, 5, 3, 4];


// Using for loop

function NumAppearsOnce(arr){

    for(let i = 0; i<arr.length; i++){
        
        let count = 0;

        for( let j = 0; j<arr.length; j++){
            if(arr[i] ===arr[j]){
                count ++;
            }
        }

        if(count === 1){
            return arr[i]
        }
    }
    return -1
}

console.log(NumAppearsOnce(arr));




// Using XOR Operation


function NumAppearsOnceXOR(arr){
    let output = 0;

    for(let i = 0; i < arr.length; i++){
        output ^= arr[i];   
    }
    return output;
}


console.log(NumAppearsOnceXOR(arr));
