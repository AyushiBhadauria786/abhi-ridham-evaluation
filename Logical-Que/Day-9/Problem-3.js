// Unzip an Array of Pairs into Separate Individual Arrays


let arr = [ [ 1, 'abhi' ], [ 2, 'tilak' ], [ 3, 'jay' ] ];


// Using for of loop


function UnzipArray(arr){
    let FirstArray = [];
    let SecondArray = [];

    for(const [First,Second] of arr){
        FirstArray.push(First);
        SecondArray.push(Second);
    }
    return [FirstArray,SecondArray]
}


const [FirstArray,SecondArray] = UnzipArray(arr);
console.log(FirstArray);
console.log(SecondArray);




// Using Map method



function UnzipArrayMap(arr){
    const FirstArrayMap = arr.map((First)=>First[0]);
    const SecondArrayMap = arr.map(([,Second])=> Second);

    return [FirstArrayMap,SecondArrayMap]
}


const [FirstArrayMap,SecondArrayMap] = UnzipArrayMap(arr);
console.log(FirstArrayMap);
console.log(SecondArrayMap);
