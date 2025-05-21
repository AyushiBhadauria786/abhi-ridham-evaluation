//Capitalise the First Letter of Each Word in a Sentence in JavaScript.


//Solution-1

//In this first i will split str with spaces and then loop threw elemets
//then using buid in methods capitalize sentence letter 
//return with join so it is in string form not in array


let sentence = "my name is ridham kansara";
let sentence2 = "check for the value"


function capitalize(str){
    let arr = str.split(" ");

    for(let i=0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
   return arr.join(' ');

}

let result = capitalize(sentence);
console.log(result);

console.log(capitalize(sentence2));


//Solution 2

//same approch as above but using map function 

function capitalFirst(str){
    let splitValue =  str.toLowerCase().split(' ');
    let result = splitValue.map((value) => {
        return (value.charAt(0).toUpperCase() + value.slice(1));
    }).join(' ');
    return result;
}

console.log(capitalFirst(sentence));    

