// Create async code with nested try-catch blocks to handle errors at multiple levels.




async function nestedTryCatch() {
    try {
      console.log("Outer try");
      try {
        console.log("Inner try");       // Simulate an inner error
        

        throw new Error("Inner error");
      } catch (innerErr) {
        console.error("Caught inner error:", innerErr.message);
      }
  
    
      throw new Error("Outer error");     // Simulate an outer error
    } catch (outerErr) {
      console.error("Caught outer error:", outerErr.message);
    }
  }
  


nestedTryCatch();




// Another Example 



function picnicPlanner() {
    try {
      console.log("1. Let's start planning the picnic!");
  
      // Try to pack the main course
      try {
        console.log("2. Trying to pack the sandwiches.");
        
        throw new Error("No bread for sandwiches!");
      } catch (sandwichErr) {
        console.error("3. Inner problem:", sandwichErr.message, "— Packing chips instead.");
        
      }
      console.log("4. Packing drinks and snacks.");
      console.log("5. All set for the picnic!");
  
    } catch (overallErr) {
      console.error("6. Overall picnic problem:", overallErr.message, "— Picnic canceled!");
    }
  }
  
  picnicPlanner();