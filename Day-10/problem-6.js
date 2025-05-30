// Write a Program to print Floyd’s Triangle Number Pattern in JavaScript

//Solution 1

function trianglePattern(n){
    let num = 0;
    let str = ''
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            str += ++num;
            if(j === i){
                str += "\n"
                break;
            }else {
                str += " ";
            }
        }
    }
    return str;
}

console.log(trianglePattern(5));


//Solution 2

function patternPrint(rows,currentRow = 1, num = 1){
    if(currentRow > rows){
        return;
    }

    let row = "";
    for(let i = 1; i <= currentRow; i++){
        row += num + " ";
        num++;
    }
    console.log(row);

    patternPrint(rows,currentRow + 1,num);
}

console.log(patternPrint(5));