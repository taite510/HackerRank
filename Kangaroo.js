// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

function kangaroo(x1, v1, x2, v2) {
  let n = (x2 - x1) / (v1 - v2);
  if (n % 1 === 0 && n >= 1) {
    return 'YES';
  }
  return 'NO';
}

console.log(kangaroo(2564, 5393, 5121, 2836))