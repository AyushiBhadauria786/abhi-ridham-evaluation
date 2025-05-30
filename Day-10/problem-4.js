// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Return best time to buy and stock

//Input: prices = [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//Solution 1

const prices = [7,1,5,3,6,4];
const prices2 = [7,6,4,3,1];

function profitMax(price){
    let profit = 0;
    for(let i = price.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(price[i] - price[j] > profit){
                profit = price[i] - price[j];
            }
        }
    }
    return profit;
}

console.log(profitMax(prices));
console.log(profitMax(prices2));




//Solution 2
function maxProfit(prices){
    let leftIndex = 0
    let rightIndex = 1;
    let margin = 0;

    while(rightIndex < prices.length) {
        if(prices[leftIndex] < prices[rightIndex]){
            let profit = prices[rightIndex] - prices[leftIndex];
            margin = Math.max(margin,profit)
        }else{
            leftIndex = rightIndex
        }
        rightIndex++
    }
    return margin;
}

console.log(maxProfit(prices));
console.log(maxProfit(prices2));