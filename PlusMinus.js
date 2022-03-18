// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  let ratios = [0,0,0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          ratios[0]++;
      } else if (arr[i] < 0) {
          ratios[1]++;
      } else {
          ratios[2]++;
      }
  }
  for (let i = 0; i < 3; i++) {
      ratios[i] /= arr.length;
      ratios[i] += '';
      while (ratios[i].length < 8) {
          if (ratios[i].length === 1) {
              ratios[i] += '.';
          }
          ratios[i] += '0';
      }
      console.log(ratios[i].slice(0,8));
  }
}

plusMinus([1,1,0,-1,-1])