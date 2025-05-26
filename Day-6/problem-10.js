// Given two strings s1 and s2, check if these two strings are isomorphic to each other.

const s1 = "egg";
const s2 = "add"

function isIsomorphic(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0; i < str1.length; i++){
        for(let j = i + 1; j < str1.length; j++){
            if((str1[i] === str1[j] && str2[i] !== str2[j]) 
                || (str1[i] !== str1[j] && str2[i] === str2[j])){
                    return false
                }
        }
    }
    return true;
}

console.log(isIsomorphic(s1,s2));


//Solution 2

//using Map

function checkIsomorphic(s1,s2){
    if(s1.length !== s2.length){
        return false;
    }

    const map1 = new Map();
    const map2 = new Map();

    for(let i = 0; i < s1.length; i++){
        const char1 = s1[i];
        const char2 = s2[i];

        if(map1.has(char1)){
            if(map1.get(char1) !== char2){
                return false
            }
        }else {
            map1.set(char1,char2)
        }

        if(map2.has(char2)){
            if(map2.get(char2) !== char1){
                return false
            }
        }else {
            map2.set(char2, char1)
        }
    }

    return true;
}

console.log(checkIsomorphic(s1,s2));
