/**
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/
// 28123

let abundantNos = [];

for (let i = 12; i < 28124; i++) {
  let sum = 0;
  for (let ii = 1; ii <= i / 2; ii++) if (i % ii === 0) sum += ii;
  if (sum > i) abundantNos.push(i);
}
let notsummable = [];

for (let i = 1; i < 28124; i++) {
  let not = true;
  for (let ii = 0; ii < abundantNos.length; ii++) {
    if (abundantNos.includes(i - abundantNos[ii])) {
      not = false;
      break;
    } else if (i < abundantNos[ii]) {
      break;
    }
  }
  if (not) notsummable.push(i);
}

console.log(
  //   notsummable,
  notsummable.reduce((a, b) => a + b)
);
