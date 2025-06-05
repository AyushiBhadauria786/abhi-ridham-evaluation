// Write a JavaScript function to get the minimum date from an array of dates.


//Solution 1

function maxDate(dateArr){
    let max = dateArr[0]
    let maxDt = new Date(dateArr[0]);

    dateArr.forEach((dt, index) => {
        let currentDate = new Date(dt);

        if(currentDate > maxDt){
            max = dt;
            maxDt = new Date(dt)
        }
    });

    return max;
}

const dateValues = ['2015/02/01', '2015/02/02', '2015/01/03']
console.log(maxDate(dateValues));



//Solution 2

let dates = [
    new Date("2019/06/25"),
    new Date("2019/06/26"),
    new Date("2019/06/27"),
    new Date("2019/06/28"),
];

function checkMax(arr){
    const maxDate = arr.reduce((a,b) => (a > b ? a : b));
    return maxDate;
}   

console.log(checkMax(dates));



