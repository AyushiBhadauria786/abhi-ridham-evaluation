// Performing a thorough recursive comparison of two objects including nested properties and values(Deep comparison between objects);


let obj1 = {
    a : 1,
    b : {
        c : 2
    }
};

let obj2 = {
    a : 1,
    b : {
        c : 2
    }
};


let obj3 = {
    a : {
        d: 3
    },
    e : 4
};


// Using Recursive Comparison


function DeepComparison(obj1,obj2){
    if(typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null){
        return obj1 === obj2;
    }

    const Keys1 = Object.keys(obj1);
    const Keys2 = Object.keys(obj2);


    if(Keys1.length !== Keys2.length ){
        return false;
    }

    for(const key of Keys1){
        if(!obj2.hasOwnProperty(key) || !DeepComparison(obj1[key],obj2[key])){
            return false
        }
    }
    return true;
}


console.log(DeepComparison(obj1,obj2));
console.log(DeepComparison(obj1,obj3));




// Using JSON stringify method

function DeepCompareJSON(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  console.log(DeepCompareJSON(obj1,obj2));
  console.log(DeepCompareJSON(obj1,obj3));



// Using Lodash

const _ = require('lodash');

function DeepCompareLodash(obj1, obj2) {
  return _.isEqual(obj1, obj2);
}

console.log(DeepCompareLodash(obj1,obj2))
console.log(DeepCompareLodash(obj1,obj3))