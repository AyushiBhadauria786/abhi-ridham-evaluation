// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".\\


const strs = ["flower","flow","flight"];

//Solution 1

function logestCommonPrefix(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            // console.log(arr[i + 2][j])
            if(arr[i][j] === arr[i+1][j] && arr[i+1][j] === arr[i+2][j]){
                return arr[i][j]
            }else {
                return ""
            }
        }
    }
}

console.log(logestCommonPrefix(strs));


//Solution 2

function findPrefix(arr){
    let first = arr[0];
    let prefix = "";

    while(first.length > 0){
        let flag = true;
        for(let i = 1; i < arr.length; i++){
            if(arr[i].indexOf(first) !== 0){
                flag = false;
                break;
            }
        }
        if(flag){
            prefix = first;
            break
        }
        first = first.substring(0,first.length - 1);
    }
    return prefix;
}

console.log(findPrefix(strs))