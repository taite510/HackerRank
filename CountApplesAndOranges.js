// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  function countFruit(s, t, tree, fruit) {
    let counter = 0;
    for (let i = 0; i < fruit.length; i++) {
      let loc = tree + fruit[i];
      if (s <= loc && loc <= t) {
        counter++;
      }
    }
    console.log(counter);
  }
  countFruit(s, t, a, apples);
  countFruit(s, t, b, oranges);
}

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])