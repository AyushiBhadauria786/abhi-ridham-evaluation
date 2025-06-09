// Write a JavaScript program that implements a counter using localStorage to save the count
// across page refreshes.

const displayCount = document.getElementById('display-count');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');


plusBtn.addEventListener("click",plus);
minusBtn.addEventListener("click",minus);
let localStorageKey = "myCounter"

let counterValue = parseInt(localStorage.getItem(localStorageKey)) || 0;
displayCount.textContent = counterValue;

function plus(){
    counterValue++;
    displayCount.textContent = counterValue;
    localStorage.setItem(localStorageKey,counterValue);
}

function minus(){
    if(counterValue > 0){
        counterValue--
        displayCount.textContent = counterValue;
        localStorage.setItem(localStorageKey,counterValue);
    }
}