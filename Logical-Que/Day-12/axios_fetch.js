// Basic Syntax

const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com/posts";



// Using axios


const data = {
    title : "Hometown",
    body : "my hometown is junagadh",
    userId : 1,
};


axios.post(url,data,{
    headers : {
        Accept :  'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },
})

.then((data => {
    console.log("post request is successful. Response:", data);
}))
.catch(error => {
    console.error("Error:", error)
})




// Using fetch



const opetions = {
    method : "POST",
    headers : {
        Accept :  'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },

    body : JSON.stringify({
        title : "Dog",
        body : "Your dog is beatutiful",
        userId : 1,
    }),
};



fetch(url,opetions)
.then((response) => response.json())
.then((data) => {
    console.log("post request is successful. Response:", data)
})
.catch((error) => {
    console.error("Error:", error)
})




// Handling Response and Errors




// GET using fetch


fetch(url)
.then((response) => {
    if(!response.ok){
        throw new Error(`HTTP Error ! Status ${response.status}`)
    }
    return response.json();
})
.then((data) => {
    console.log('Data is Received', data)
})
.catch((error) => {
    console.error("Error :", error)
})



// GET using axios


axios.get(url)
.then((response) => {
    console.log("Data Received", response.data)
})
.catch((error) => {
    if(error.response){
        console.error(`HTTP error ! Status ${error.response.status}` )
    }
    else if(error.request){
        console.error("Request Error : No Response Received")
    }
    else{
        console.error("Error :", error)
    }
})





// Intercepting HTTP Requests




axios.interceptors.request.use((config) => {
    console.log("Request was sent");
    return config;
  });
  
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(({data}) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });




// Response Timeout


const timeout = 2000;

const config = {
    timeout : timeout
};


axios.get(url,config)
.then((response) => {
    console.log("Data Is Received", response.data);
})
.catch((error) => {
    console.log("Error:", error)
})



