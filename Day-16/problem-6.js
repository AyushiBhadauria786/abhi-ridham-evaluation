// Post form data to an API using fetch and handle response properly.

//Solution 1
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
.then(response => response.json())
.then(json => console.log(json));



//Solution 2
const formE1 = document.querySelector(".form")

formE1.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formE1);
    const data = new URLSearchParams(formData);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: data
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
})


