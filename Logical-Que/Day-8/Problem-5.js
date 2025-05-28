// Convert an array of objects to a Map using a key

let arr = [
    { id:1, name : "abhi"},
    { id:2, name : "tilak"},
    { id:3, name : "jay"}
];



// Using for loop 

function ArrayObjectMap(arr,key){
    const map = new Map();
    
    for(let i = 0; i<arr.length; i++){
        map.set(arr[i][key],arr[i]);
    }
    return map;
}

console.log(ArrayObjectMap(arr,'id'));



// Using for Each 

function ArrayObjectMapForEach(arr,key){
    const map = new Map();
    arr.forEach((item)=>{
        map.set(item[key],item)
    })
    return map
}

console.log(ArrayObjectMapForEach(arr,'id'));