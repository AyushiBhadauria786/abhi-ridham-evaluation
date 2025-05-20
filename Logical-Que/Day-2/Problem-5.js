// Capitalize First Letter of Each Word


// Using For Loop


let text = "hii abhi butani";


function CapitalizeFirstLetter(str) {
    let word = str.split(' ');
    for(let i = 0; i < word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return word.join(' ');
}

console.log(CapitalizeFirstLetter(text));



//  Using split(), map(), charAt(), toUpperCase(), and slice()


function Capital(str){
    return str.split(' ').map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(Capital(text));



