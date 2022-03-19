function staircase(n) {
  let step = '';
  for (let i = 0; i < n; i++) {
      step += ' ';
  }
  for (let i = n - 1; i >= 0; i--) {
      step = step.split('');
      step[i] = '#';
      step = step.join('');
      console.log(step);
  }
}

staircase(6);