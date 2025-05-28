// Given an integer numRows, return the first numRows of Pascal's triangle.

//Solution 1

function makeTriangle(numRows){
    if(numRows === 0){
        return [];
    }
    if(numRows === 1){
        return [[1]];
    }
    let result = [];

    for(let row = 1; row <= numRows; row++){
        let arr = [];
        for(let col = 0; col < row; col++){
            if(col === 0 || col === row - 1){
                arr.push(1);
            }else {
                arr.push((result[row - 2][col - 1] + result[row - 2][col]));
            }
        }
        result.push(arr)
    }
    return result;
}

console.log(makeTriangle(5));



//Solution 2

function pascalTriangle(numRows){
    if(numRows === 1){
        return [[1]];
    }
    if(numRows === 0){
        return [];
    }
    let prev = pascalTriangle(numRows - 1);
    let last = prev[prev.length - 1];
    let next = [1];
    for(let i = 0; i < last.length - 1; i++){
        next.push(last[i] + last[i + 1])
    }
    next.push(1)
    prev.push(next);
    return prev;
}

console.log(pascalTriangle(6));
