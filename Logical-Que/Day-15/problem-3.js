// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.




function Access_Array(array,index){

    try {
        const element = array[index];         // Access the element at the specified index in the array

        if(element === undefined){                // Check if the element is undefined 
            
            throw new RangeError('Index out of bounds');
        }
       
        console.log('Accessed element :', element);       // Log the accessed element to the console
    } catch (error) 
    {
        
        if(error instanceof RangeError){
            console.error("RangeError :", error);        // Check if the error is a RangeError
        }
        else {
            console.log('Error :', error.message);  // If the error is not a RangeError, log the error message
        }
    }
}



const num = [1,2,3,4,5];


Access_Array(num,1);   // Valid index

Access_Array(num,5);  // Invalid index