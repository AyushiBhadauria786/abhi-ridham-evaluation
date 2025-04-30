console.log("hello");

// sessionStorage.setItem("Ridham","Kansara")
// console.log(sessionStorage)

const name = document.getElementById("name")
const age = document.getElementById("age")

const saveLocalBtn = document.getElementById("btnLocal")
const saveSessionBtn = document.getElementById("btnSession")

const Display = document.getElementById("displayText")


//for Local
saveLocalBtn.addEventListener("click",() => {
    const userName = document.getElementById("name").value
    const useAge = document.getElementById("age").value

    name.textContent = userName
    age.textContent = useAge
    localStorage.setItem("name",userName);
    localStorage.setItem("age",useAge)
})
console.log(localStorage)

// function displayUserName(){
//     const nameFromLocalStorage = localStorage.getItem("name")
//     const ageFromLocalStorage = localStorage.getItem("age");

//     if(nameFromLocalStorage && ageFromLocalStorage) {
//         Display.textContent = `${nameFromLocalStorage} and ${ageFromLocalStorage}` ;
//         console.log(nameFromLocalStorage)
//     }else{
//         Display.textContent = "No data in local storage"
//     }
// }

// displayUserName()

//for Session
saveSessionBtn.addEventListener("click",() => {
    const userName = document.getElementById("name").value
    const useAge = document.getElementById("age").value

    name.textContent = userName
    age.textContent = useAge
    sessionStorage.setItem("name",userName);
    sessionStorage.setItem("age",useAge)
})
console.log(sessionStorage)








