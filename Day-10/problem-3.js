// Write a Program to print Symmetric-Butterfly Pattern in JavaScript.


    function printPattern(num){
    let spaces = 2 * num - 1;
    let stars = 0

    for(let i = 1; i <= 2 * num - 1; i++){
        //for upper
        if( i <= num){
            spaces = spaces - 2;
            stars++;
        }
        //for lowwer
        else{
            spaces = spaces + 2;
            stars--;
        }
        //for stars
        for(let j = 1; j <= stars; j++) {
            process.stdout.write("*")
        }
        //for spaces
        for(let j = 1; j <= spaces; j++){
            process.stdout.write(" ")
            // process.stdout.write("s")
            
        }
        //for stars
        for(j = 1; j <= stars; j++) {
            if(j !== num){
                process.stdout.write("*")
            }
        }
        process.stdout.write("\n");
    }
}



printPattern(5);
printPattern(3);
