// Check if two strings are isomorphic, meaning their characters can be mapped one-to-one.(isomorphic string check);



// Using for loop

const str1 = 'add';
const str2 = 'egg';

function Isomorphic(str1,str2){

    if(str1.length !== str2.length){
        return false;
    }

    for(let i = 0; i< str1.length; i++){
        for(let j = i+1; j < str1.length; j++){
            if((str1[i] === str1[j] && str2[i] !== str2[j]) || (str1[i] !== str1[j]  && str2[i] === str2[j])){
                return false
            }
        }
    }
    return true;
}

console.log(Isomorphic(str1,str2));



// Using map


function IsomorphicMap(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }

    const map1 = new Map();
    const map2 = new Map();

    for(let i = 0; i < str1.length; i++){

        const char1 = str1[i];
        const char2 = str2[i];

        if (map1.has(char1)) {
            if (map1.get(char1) !== char2) {
                return false;
            }
        } else {
            map1.set(char1, char2);
        }

        if (map2.has(char2)) {
            if (map2.get(char2) !== char1) {
                return false;
            }
        } else {
            map2.set(char2, char1);
        }
        
    }
    return true;
}

console.log(IsomorphicMap(str1,str2));



