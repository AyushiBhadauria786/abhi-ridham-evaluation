// Some of axios and fetch examples:

// import axios from axios;


const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/posts';   

const data = {
    title: "Harry Potter and the Sorcerer's Stone",
    body: "A book based on fictional art on the word of Hogward School",
    bookNumber: "121E",
}

axios.post(url,data, {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },
}).then(({data}) => {
    console.log("Post request successful.Response:",data);
}).catch(error => {
    console.error('Error:',error);
})


//fetch
const options = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  body: JSON.stringify({
    title: "Hello World",
    body: "This is a test post.",
    userId: 1,
  }),
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log("POST request successful. Response:", data);
  });




  //example - 2

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Error message:', error.message);
  });


axios.get("https://jsonplaceholder.typicode.com/todos/3")
.then((response) => {
    console.log("Data received for 3:",response.data)
})
.catch((error) => {
    if(error.response){
        console.error(`HTTP error:${error.response.status}`);
    }else if (error.request){
        console.error("Request error: No response received");
    }else {
        console.error("Error:",error.message);
    }
});



//Interceptors

axios.interceptors.request.use((config) => {
    console.log("Request was sent");
    return config;
});

axios.get("https://jsonplaceholder.typicode.com/todos/5")
.then(({data}) => {
    console.log("Data received 5:",data);
})
.catch((error) => {
    console.error("Error:",error.message);
});




//Response time

const timeout = 5000;

const configs = {
    timeout: timeout
};

axios.get('https://jsonplaceholder.typicode.com/todos/10',configs)
.then(response => {
    console.log("Data received for 10",response.data);
})
.catch(error => {
    console.error('Error fetching data delayed:',error.message);
});