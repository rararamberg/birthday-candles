function birthdayCakeCandles(candles) {
  // find the max value in candles array
  const max = Math.max(...candles)
  // filter out all numbers in candles array that are equal to max
  const tallCandles = candles.filter(num => num === max)
  // call on this length of array that only contains tallest candles
  return tallCandles.length
}

console.log(birthdayCakeCandles([3, 1, 2, 3]))