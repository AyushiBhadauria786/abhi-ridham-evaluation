// Given a sentence, reverse each word in the sentence, and then reverse the order of words in the sentence.

const sentense = "Hello this is a sentence";


//Step 1: First we convert string to array using split so that we could perform actions on that
const splitSentense = sentense.split(' ');
console.log(splitSentense);

//Step 2: After split we have to reverse each word so we have to iterate over array world so using map first 
//we split each word then apply reverse method and then join them again.
const reverseSentense = splitSentense.map(word => word.split("").reverse().join(""));
console.log(reverseSentense);


//Step 3: After all these at last we have reverse order of words in sentense so we again apply reverse and join
//to change order of sentense and get final output as string;
const reverseOrder = reverseSentense.reverse().join(" ");
console.log(reverseOrder);




//Using chaining
const exampleSentense = "I want to reverse this sentence using chaining";

const usingChaining = exampleSentense.split(' ')
                        .map(words => words.split("").reverse().join(""))
                        .reverse().join(" ");

console.log(usingChaining);

