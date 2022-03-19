// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
  let max = 0;
  let counter = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
      counter = 1;
    } else if (candles[i] === max) {
      counter++;
    }
  }
  return counter;
}

console.log(birthdayCakeCandles([1,3,2,6,2,3,6,6]))