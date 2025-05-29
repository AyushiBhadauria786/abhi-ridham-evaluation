// Zip Arrays into Pairs of Corresponding Elements


let arr1 = [1,2,3];
let arr2 = ["abhi","tilak","jay"];



// Using for loop



function ZipArray(arr1,arr2){
    let output = [];

    for(let i = 0; i<Math.min(arr1.length,arr2.length); i++){
        output.push([arr1[i],arr2[i]]);
    }
    return output;
}

console.log(ZipArray(arr1,arr2));



// Using Map method


function ZipArrayMap(arr1,arr2){
    const Zip = arr1.map((item,index)=>item,arr2[index]);
    return Zip;
}


console.log(ZipArray(arr1,arr2));
