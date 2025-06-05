//Write a JavaScript program to create a clock. Note: The output will come every second.

function updateClock(){
    const current = new Date();
    let hours = current.getHours()
    const time = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0);
    const minutes = current.getMinutes().toString().padStart(2, 0);
    const seconds = current.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${time}`;

    document.getElementById("clock").textContent = timeString

}

updateClock();
setInterval(updateClock,1000)