//Write a JavaScript function that returns the number of minutes in hours and minutes.

function convertInHours(n){
    let num = n;
    let hours = (num / 60);
    let roundHours = Math.floor(hours);

    let minutes = (hours - roundHours) * 60;
    let roundMinutes = Math.round(minutes)

    return num + " minutes = " + roundHours + " hour(s) and " + roundMinutes + " minute(s).";
}

console.log(convertInHours(200));
console.log(convertInHours(180));



//Solution 2

function toHoursAndMinutes(totalMinutes){
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `hours and minutes = ${hours}h ${minutes > 0 ? `${minutes}m` : ''}`;
}

console.log(toHoursAndMinutes(100));
console.log(toHoursAndMinutes(50));
console.log(toHoursAndMinutes(300));