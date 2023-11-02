const maxProfit = (prices) => {
  let output = 0;
  let currentPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < prices[i - 1]) {
      output += prices[i - 1] - currentPrice;
      currentPrice = price;
    }
  }

  if (prices[prices.length - 1] >= prices[prices.length - 2])
    output += prices[prices.length - 1] - currentPrice;

  return output;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([1, 2, 3, 9, 4, 5]));
console.log(maxProfit([6, 1, 3, 2, 4, 7]));

// const maxProfit = (prices) => {
//   let profit = 0;
//   let currentPrice = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     const price = prices[i];
//     if (price < prices[i - 1] && price < prices[i + 1]) {
//       profit += prices[i + 1] - price;
//     }
//   }
//   if (prices[prices.length - 1] >= prices[prices.length - 2])
//     profit += prices[prices.length - 1] - currentPrice;
//   return profit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2, 3, 4, 5]));

// console.log(maxProfit([1, 2, 3, 9, 4, 5]));
// console.log(maxProfit([6, 1, 3, 2, 4, 7]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
