// Write a Program to count digits in a number.

//Solution 1

//We can exact the digits from number and by using counter we will increment the counter 
//till number becomes zero 

function countDigits(num){
    let counter = 0;
    while(num > 0){
        counter = counter + 1;
        num = (Math.floor(num / 10));
        console.log(num);
    }
    return counter;
}

console.log("Digits in a number:",countDigits(12232));


//Solution 2

//Convert number to string and then find length of that 

function digitCount(num){
    return String(num).length;
}

console.log("By converting String and using length:",digitCount(77800));

//Solution 3

//using log 10 we get num but we have to add + 1 to find exact digit in given number 

function countNum(num){
    let cnt = Math.floor(Math.log10(num) + 1);
    return cnt;
}

console.log(countNum(226172));

