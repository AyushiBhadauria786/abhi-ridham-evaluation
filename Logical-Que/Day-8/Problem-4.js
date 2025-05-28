// Reorder array to move all zeroes to the end

let arr = [1,0,5,0,2,7,8,0,7,2];


// Using for loop


function ZeroesAtEnd(arr){
    let output = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            output.push(arr[i])
        }
        
    }
    for(let j = 0; j<arr.length; j++){
        if(arr[j] === 0){
            output.push(arr[j])
        }
    }
    
    return output;
}

console.log(ZeroesAtEnd(arr));



// Using filter method

function ZeroesAtEndFilter(arr){
    const FilterZeroEle = arr.filter((item)=>item !== 0);
    const FilterNon_ZeroEle = arr.filter((item)=>item === 0);
    return FilterZeroEle.concat(FilterNon_ZeroEle);
}

console.log(ZeroesAtEndFilter(arr));


