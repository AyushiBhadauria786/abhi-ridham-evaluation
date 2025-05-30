// Compare Version Numbers of Two Strings Segment by Segment


let V1 = "1.0.31"
let V2 = "1.0.27"


// Using for loop



function CompareVersion(v1,v2){
    const v1part = v1.split(".").map(Number);
    const v2part = v2.split(".").map(Number);

    const Maxlength = Math.max(v1part.length,v2part.length);

    for(let i = 0; i < Maxlength; i++){
        const num1 = v1part[i] || 0;
        const num2 = v2part[i] || 0;

        if(num1 > num2){
            return `version ${v1} is bigger`
        }
        if(num1 < num2){
            return `version ${v2} is bigger`
        }
    }
    return -1;
}


console.log(CompareVersion(V1,V2))

