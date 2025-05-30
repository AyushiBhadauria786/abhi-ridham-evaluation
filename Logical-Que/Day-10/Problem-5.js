// Generate All Unique Character Permutations of a Given String


let str = "dog";


// Using for loop


function PermutationsOfString(str){
    let TempArr = [];
    let output = [];

    for(let i = 0; i < str.length; i++){
      TempArr = [str[i]];
      let index = 0;
      while(output[index]){
        TempArr.push("" + output[index] + str[i]);
        index++;
      }
      output = output.concat(TempArr)
    }
    return output;
}

console.log(PermutationsOfString(str))



// Using Slice and push


let PossibleCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}
console.log(PossibleCombinations(str));