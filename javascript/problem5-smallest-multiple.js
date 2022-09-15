// https://projecteuler.net/problem=5

function smallestMultiple() {
  let range = [];
  for (let i = 1; i <= 20; i++) {
    range.push(i);
  }
  for (let i = 1; ; i++) {
    if (range.every((x) => i % x === 0)) {
      return i;
    }
  }
}
