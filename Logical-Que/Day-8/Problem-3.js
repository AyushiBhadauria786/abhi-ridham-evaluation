// Find the intersection of two arrays of objects by key


let arr1 = [
    { id:1, name : "abhi"},
    { id:2, name : "tilak"},
    { id:3, name : "jay"}
];

let arr2 = [
    { id:2, name : "tilak"},
    { id:3, name : "jay"},
    { id:4, name : "raj"}
];



// Using for loop 


function IntersectionOfArrayByKey(arr1,arr2,key){
    const result = [];

    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr2.length; j++){
            if(arr1[i][key] === arr2[j][key]){
                result.push(arr1[i]);
            }
        }
    }
    return result;
}

console.log(IntersectionOfArrayByKey(arr1,arr2,'id'));



// Using Filter and Find method

function IntersectionByKeyFind(arr1, arr2, key) {
    return arr1.filter(obj1 => arr2.find(obj2 => obj1[key] === obj2[key]));
};

console.log(IntersectionByKeyFind(arr1,arr2,'id'))


// Using Filter and some method

function IntersectionByKeySome(arr1,arr2,key){
    return arr1.filter((obj1) => arr2.some((obj2)=>obj1[key] === obj2[key]));
}

console.log(IntersectionByKeySome(arr1,arr2,'id'));