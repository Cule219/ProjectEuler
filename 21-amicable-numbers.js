/**
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

let pairs = {};

function d(x) {
  let nums = [];
  for (let i = 1; i <= x / 2; i++) {
    if (x % i === 0) nums.push(i);
  }
  return nums.reduce((a, v) => a + v, 0);
}

sum = 0;
for (let i = 1; i < 10000; i++) {
  let x = d(i);
  pairs[i] = x;
  if (x < i && d(x) === i) {
    console.log(x, d(x));
    sum += x + i;
  }
}
console.log(sum);
// 31626
