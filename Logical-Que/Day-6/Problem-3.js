// Transforming a deeply nested JavaScript object into a flat single-level object with concatenated keys (Flatten a nested object)



// Using Recursive Approach


const obj = {
    a : 3,
    b : 4,
    c : {
        d:5,
        e:6
    }
}


function flattenObject(obj, parentKey = '', res = {}) {
    for (let key in obj) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObject(obj[key], newKey, res);
      } else {
        res[newKey] = obj[key];
      }
    }
    return res;
  }
  
  console.log(flattenObject(obj));




