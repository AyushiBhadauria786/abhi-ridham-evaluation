//Implement a function that flattens a nested array into a single-dimensional array.


//Solution 1
function flatArray(arr){
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            tempArr.push(...flatArray(arr[i]))
        }else {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

const multiArr = [1,2,[3,4],5,[6,7,[0,0]],8];

console.log(flatArray(multiArr));



//Solution - 2:

//same as above but using while and counter

const flatten = (innerEle) => {
    const flat = [];
    const flatAnArr = (arr) => {
        let cnt = 0;
        while(cnt < arr.length){
            const val = arr[cnt]
            if(Array.isArray(val)){
                flatAnArr(val);
            }else {
                flat.push(val)
            }
            cnt = cnt + 1;
        }
    }
    flatAnArr(innerEle);
    return flat;
}

console.log(flatten(multiArr));

//Solution 3:

//using build in method

let arr1 = [1,2,[3,4,[5,6]],[7,8],9]
console.log(arr1.flat(Infinity));