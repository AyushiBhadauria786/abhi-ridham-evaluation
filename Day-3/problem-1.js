// Write a Program to find factorial of a number.

//Solution - 1

//=>My approch for this-
//first initialize fact value to 1 for multiple with each element.
//then iterate using for loop on each elememt till num.
//then multiply i value to fact value and store in fact
//logging for just check how loop runs. 
//returning fact value. 

function factorialOfNum(num){
    let fact = 1;                    
    for(let i=1; i <= num; i++){     
        fact = i * fact;                
        console.log(`${i} * ${fact}`,fact);
    }
    return fact;
}

console.log(factorialOfNum(6));


//Solution - 2

//same as for loop first will initilize value to 1 then check for n to greter than 1 and multiple 
//n value to factvalue and decrese the n till 0 when it is 0 loop will be false and final value return.

function facto(n){
    let factVal = 1;
    while(n > 1){
        factVal *= n;
        n--;
    }
    return factVal;
}

console.log("while loop",facto(5));





//Solution - 3

//In this I use recursive approch like first i check if value is 0 so I will return 1 but if not then
//I will multiply num with calling function again and subtracting num value by 1 

function factOfNum(num){
    if(num == 0){
        return 1;
    }
    return num * factOfNum(num - 1);
}

console.log("Recursive way",factOfNum(1));


    


