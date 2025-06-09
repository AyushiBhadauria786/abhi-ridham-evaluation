// Write a JavaScript program that implements a counter using localStorage to save the count across page refreshes.




// Get the counter value from localStorage or default to 0
let count = localStorage.getItem("counter")
    ? parseInt(localStorage.getItem("counter"))
    : 0;

// Display the initial value
document.getElementById("counter").textContent = count;

function updateDisplay() {
    document.getElementById("counter").textContent = count;
    localStorage.setItem("counter", count);                      // Save to localStorage
}

function increment() {
    count++;                               // increment function
    updateDisplay();
}

function decrement() {                    // decrement function
    count--;
    updateDisplay();
}

