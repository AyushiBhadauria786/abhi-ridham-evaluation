// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.



function Parse_Json(JsonString){

    try {

        const ParseData = JSON.parse(JsonString);   
         // parse the jsonString and store the ParseData   
        console.log('Parsed data :', ParseData);
        //log that data in console          
        
        
    } 
    catch (error) {
        
        if(error instanceof SyntaxError){
            // if error is syntaxError log the error message on the console
            console.log(`SyntaxError : `, error.message)
        }
        else
        {
            console.log('Error:', error.message)
        }

    }
}



Parse_Json('{"name" : "Abhi Butani", "age" : 22}');
Parse_Json('{"name" : "Raj", "age" : 23,}');

