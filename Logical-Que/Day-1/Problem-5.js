// Remove Duplicates from an Array



let arr2 = [11,23,45,78,32,23,11,66,78];


// filter method

const unique = arr2.filter((val, index) => arr2.indexOf(val) === index)
console.log(unique);



// set method

const remove = new Set(arr2)
console.log(remove);


// set with spread

const remove1 = [...new Set(arr2)]
console.log(remove1);


// reduce and foreach method 

let uniq = arr2.reduce(function (acc, curr) {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    
    return acc;
}, []);

console.log(uniq)