// function storage() {

//         const Btn = document.getElementById("btn");
        
//         Btn.addEventListener("click",function myfun() {
//             const score = [23,79,34];
//             const scorejson = JSON.stringify(score)
//             localStorage.setItem("scores",scorejson)
//         })
//     }
//     storage();



// const userNameText = document.querySelector(".userName")
// const userAgeText = document.querySelector(".userAge")

// const saveNameButton = document.querySelector(".saveNameBtn")
// const saveAgeButton = document.querySelector(".saveAgeBtn")


// saveNameButton.addEventListener("click", () => {
//     const userName = document.querySelector(".name").value
//     userNameText.textContent = userName
//     localStorage.setItem("name", userName)
//   })

//   function displayUserName () {
//     const nameFromLocalStorage = localStorage.getItem("name")
  
//     if (nameFromLocalStorage) {
//       userNameText.textContent = nameFromLocalStorage
//     } else {
//       userNameText.textContent = "No name data in local storage"
//     }
//   }
  
//   displayUserName();



//   saveAgeButton.addEventListener("click", () => {
//     const userAge = document.querySelector(".age").value
//     userAgeText.textContent = userAge
//     sessionStorage.setItem("age", userAge)
//   })


//   function displayUserAge () {
//     const ageFromsessionStorage = sessionStorage.getItem("name")
  
//     if (ageFromsessionStorage) {
//       userAgeText.textContent = ageFromsessionStorage
//     } else {
//       userAgeText.textContent = "No name data in session storage"
//     }
//   }
  
//   displayUserAge();



//  sessionStorage.setItem("color","blue");
// console.log(sessionStorage);  





// sessionStorage.setItem("carColor", "Pink");
// sessionStorage.setItem("pcColor", "Yellow");
// sessionStorage.setItem("laptopColor", "White");
// sessionStorage.key(1);                            // it also run in browser and it return keys  same as local storage works



// sessionStorage.getItem("color");        // get item from session storage

// sessionStorage.removeItem("pcColor");     // remove item from session storage


// sessionStorage.clear();       // clear the storage
// localStorage.clear();



// cookies

// document.cookie = "username=John Doe";   // for create cookies

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";    // you can add date also to expire

// document.cookie = "username=John Doe; expires=Thu, 01 Jan 1970 00:00:00 UTC";   // you can delete also 