// Deep recursive merging of multiple nested JavaScript objects into one unified object(Deep merging of nested objects)



// Using recursive 


let obj1 = {
    a : 1,
    b : {
        c : 2
    }
};

let obj2 = {
    b : {
        d: 3
    },
    e : 4
};






function deepMerge(target, source) {
    for (let key in source) {
      if (source[key] instanceof Object && key in target) {
        target[key] = deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }
  

console.log(deepMerge(obj1,obj2))




// Using Lodash Method

const _ = require('lodash');

const merged = _.merge({},obj1,obj2);
console.log(merged);

