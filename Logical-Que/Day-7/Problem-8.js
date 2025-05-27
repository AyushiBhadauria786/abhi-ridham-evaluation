// Chunk an array into smaller arrays of size n

// size is 2

let arr = [1,2,3,4,5,6,7,8]
let n = 2;

// Using for loop and slice


function ChunkArray(arr,n){
    const result = [];
    for(let i = 0; i < arr.length; i+=n){
        result.push(arr.slice(i,i+n));
    }
    return result;
}

console.log(ChunkArray(arr,2));


// Using Reduce


function chunkArrayReduce(arr, n) {
    return arr.reduce((acc, _, i) => {
        if (i % n === 0) acc.push(arr.slice(i, i + n));
        return acc;
    }, []);
}

console.log(chunkArrayReduce(arr,n))
