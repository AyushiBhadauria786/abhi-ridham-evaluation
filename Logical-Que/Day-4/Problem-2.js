// Convert a string to an array


let str = "abhi_butani";


// Using for loop

function ConvertToArray(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        array.push(str[i]);
    }
    return array;
}

console.log(ConvertToArray(str));


// Using split method

const split = str.split('');
console.log(split);


// Using Spread Operator


const Spread = [...str];
console.log(Spread);


// Using Array from method

const ArrayFrom = Array.from(str);
console.log(ArrayFrom)


// Using Object assign method

const ObjectAssign = Object.assign([],str);
console.log(ObjectAssign);