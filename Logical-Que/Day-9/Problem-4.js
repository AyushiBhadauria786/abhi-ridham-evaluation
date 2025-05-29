// Extract All Nested Property Paths from a Deeply Nested Object

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
        },
    },
    f: [4, 5],
};


// Using for loop 



  function GetPaths(obj,CurrentPath = "",Paths = []){
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            const NewPath = CurrentPath ? `${CurrentPath}.${key}` : key;
            Paths.push(NewPath);
            if(typeof obj[key] === 'object' && obj[key] !== null){
                GetPaths(obj[key],NewPath,Paths);
            }
        }
    }
    return Paths;
  }
  console.log(GetPaths(obj))
  
 


// Using Object keys and reduce method

function GetPathsReduce(obj, CurrentPath = '', paths = []) {
    return Object.keys(obj).reduce((acc, key) => {
      const NewPath = CurrentPath ? `${CurrentPath}.${key}` : key;
      acc.push(NewPath);
  
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        GetPathsReduce(obj[key], NewPath, acc);
      }
      return acc;
    }, paths);
  }

  console.log(GetPathsReduce(obj));