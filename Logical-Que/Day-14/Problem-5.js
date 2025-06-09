// Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.




// mannual EvalError



function triggerEvalError() {
    try {

        throw new EvalError("This is a manually thrown EvalError");

    }
    catch (error) {
        if (error instanceof EvalError) {

            console.error("Caught an EvalError:", error.message);
        }
        else {

            console.error("Caught a different error:", error.message);
        }
    }
}

triggerEvalError();



// another example 


function evaluate_Expression(exp) {
    
    try {
   
      const result = eval(exp);
      // Log the result to the console
      console.log('Result:', result);
    } catch (error) {

      if (error instanceof EvalError) {
        // If the error is an EvalError, log the error message to the console
        console.log('EvalError:', error.message);
      } else {
        console.log('Error:', error.message);
      }
    }
  }
  
  
  evaluate_Expression('30 + 30'); // Valid expression
  evaluate_Expression('3 +'); // Invalid expression
  

// EvalError exists for legacy compatibility, but modern engines no longer use it automatically.
// You'll always get SyntaxError, TypeError, or ReferenceError instead of EvalError.