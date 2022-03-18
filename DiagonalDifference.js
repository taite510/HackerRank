// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  let rightDiag = 0, leftDiag = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
      rightDiag += arr[i][i];
      leftDiag += arr[n - i - 1][i];
  }
  return Math.abs(rightDiag - leftDiag);
}

console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]))