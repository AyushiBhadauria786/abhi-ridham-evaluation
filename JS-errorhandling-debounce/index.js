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



  //Debounce

  function debounce(func, delay) {
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args)
        }, delay)
    }  
  }

  const debounceSearch = debounce((query) => {
    console.log(`Searching for: ${query}`)
  },300);

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    debounceSearch(e.target.value);
  })


  //throttle

  function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        func(...args);
        lastCall = now;
      }
    };
  }
  
  const throttledScrollHandler = throttle(() => {
    console.log("Loading more content...");
  }, 1000);
  
  window.addEventListener("scroll", throttledScrollHandler);