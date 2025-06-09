// Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable




function Access_Variable(){

    try {
        // Attempt  log that value of an undefinedVariable to the console
        console.log(undefinedVariable);

    } catch (error) {
        
        if(error instanceof ReferenceError){
            // if error is ReferenceError log the error message on the console
            console.log("ReferenceError", error.message)
        }
        else
        {
            console.log('Error:', error.message)
            // If the error is not a ReferenceError, log the error message to the console
        }
    }
}

Access_Variable();



// another example


function Example(){
    let x = 10

    try{
        console.log(x+y);        // use undefined variable y
    }
    catch(error)
    {
        if(error instanceof ReferenceError){
            console.error("ReferenceError :", error.message);
        }
        else
        {
            console.error("Error:" , error.message)
        }
    }
}


Example();