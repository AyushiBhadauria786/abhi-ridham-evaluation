// Generate All Possible Combinations of a Given Length K from an Array

let arr = [1,2,3,4,5]


// Using for loop 

function Combine (arr, k)  {
    const res = [];
    const backtrack = (start, path) => {
      if (path.length === k) {
        res.push([...path]);
        return;
      }

      for (let i = start; i < arr.length; i++) {
        path.push(arr[i]);
        backtrack(i + 1, path);
        path.pop();
      }

    };
    backtrack(0, []);
   
    return res;

  };




console.log(Combine(arr,2));