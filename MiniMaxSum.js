// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  let max = [0, 0];
  let min = [Infinity, 0];
  for (let i = 0; i < 5; i++) {
    if (arr[i] < min[0]) {
      min[0] = arr[i];
      min[1] = i;
    }
    if (arr[i] > max[0]) {
      max[0] = arr[i];
      max[1] = i;
    }
  }
  let minSum = 0;
  let maxSum = 0;
  for (let i = 0; i < 5; i++) {
    if (i !== max[1]) {
      minSum += arr[i];
    }
    if (i !== min[1]) {
      maxSum += arr[i];
    }
  }
  console.log(minSum + ' ' + maxSum);
}

miniMaxSum([1,3,5,7,9])