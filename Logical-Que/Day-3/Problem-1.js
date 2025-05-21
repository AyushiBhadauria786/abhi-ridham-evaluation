// Check if Two Strings Are Anagrams



// using for loop

let str3 = ["l","i","s","t","e","n"];
let str4 = ["s","i","l","e","n","t"];

function areAnagram(str3, str4) {
    
    let n1 = str3.length;
    let n2 = str4.length;

    if (n1 != n2)
        return false;

    
    str3.sort();
    str4.sort();

    for (let i = 0; i < n1; i++)
        if (str3[i] != str4[i])            // Compare sorted strings         
            return false;

    return true; 
}

console.log(areAnagram(str3,str4));


  // using split, sort and join method



let str1 = "listen";
let str2 = "silent";

  function Anagrams(str1,str2){
    if( str1.split("").sort().join("") === str2.split("").sort().join("")){
    return true
    }
    return false;
  }

  console.log(Anagrams(str1,str2));