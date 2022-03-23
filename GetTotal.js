// Submissions	Leaderboard	Discussions	Editorial
// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

function getTotalX(a, b) {
  let arr = [];
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    let check = true;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        check = false;
        break;
      }
    }
    if (check) {
      for (let j = 0; j < b.length; j++) {
        if (b[j] % i !== 0) {
          check = false;
          break;
        }
      }
      if (check) {
        arr.push(i);
      }
    }
  }
  return arr.length;
}

console.log(getTotalX([2,4],[16,32,96]))