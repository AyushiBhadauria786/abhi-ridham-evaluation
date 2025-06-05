// Write a JavaScript function to count the number of days passed since the year began.


//Solution 1
function days_passed(dt){
    let milisecondInDay = 86400000;

    let current = new Date(dt.getTime());
    let previous = new Date(dt.getFullYear(),0,1)

    let passedDays = Math.ceil((current - previous + 1) / milisecondInDay);
    return passedDays;
}

console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2025, 5, 5)));


//Solution 2

function calculateDays(start,end){
    let startDate = new Date(start);
    let endDate = new Date(end)

    let timeDifference = endDate - startDate;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
}


let startDt  = '2025-04-01';
let endDt = '2025-04-16';

console.log(calculateDays(startDt,endDt));
console.log(calculateDays('2025-02-12','2025-06-05'));

