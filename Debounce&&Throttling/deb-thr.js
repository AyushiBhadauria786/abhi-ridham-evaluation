
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

async function fetchData(query) {
    console.log(`Searching for: ${query}`);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );

        console.log(filteredUsers);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Completed");
    }
}

const debounceSearch = debounce(fetchData, 500);


const Search = document.getElementById("Search");
Search.addEventListener("input", (event) => {
    debounceSearch(event.target.value);
});



  function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= delay) {
        lastCall = now;
        fn.apply(this, args);
      }
    };
  }
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const clickbtn = throttle(fetchData, 3000);
  document.getElementById("btn").addEventListener("click", clickbtn);





