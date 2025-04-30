//Error handling 
try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("No name in data");
    }
    console.log(user.name);
    console.log(user.age);
}catch(e){
    console.log("Not works:" + e.message);
}



function processTask() {
    try {
      console.log("Processing...");
      throw new Error("Something went wrong!");
    } catch (error) {
      console.error("Caught error:", error.message);
    } finally {
      console.log("Task completed finaly");
    }
  }
  
  processTask();


  function checkAge(age) {
    if (age < 18) {
      throw new Error("You must be 18 or older.");
    }
    return "Access granted";
  }
  
  try {
    console.log(checkAge(16));
  } catch (error) {
    console.log("Error:", error.message);
  }


  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  
  fetchData();