// Write a function that generates a random alphanumeric string of a given length.

//Solution 1:

//here we first declare all alpha numeric values then loop till length given and store random value
// in result array  

function generateRandomStr(len){
    const mychar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = "";
    for(let i = 0; i < len; i++){
        const randomValue = Math.floor(Math.random() * mychar.length)
        result += mychar.charAt(randomValue)
    }
    return result;
}

console.log(generateRandomStr(10));

//Solution 2

//this is direct method this converts random number to base 36 and and slices point value

function randomStr() {
    return (Math.random().toString(36).slice(2));
}

console.log(randomStr());
