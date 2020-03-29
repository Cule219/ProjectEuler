/**

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

 */

function bigIntMultiplier(string, int) {
  string = string + "";
  let result = "";
  let numbers = [];
  for (let i = 0; i < string.length; i++) {
    numbers.push(+string[i] * int);
  }
  numbers.reverse().forEach((num, i) => {
    let existingNo = result[i] ? Number(result.slice(0, -i)) + num : num;
    result = existingNo + result.slice(-i);
  });
  console.log(int, result);
  return result;
}

let factorial = Array.from({ length: 100 }, (_, i) => i + 1)
  .reduce((a, v) => (a = bigIntMultiplier(a, v)))
  .split("")
  .reduce((a, v) => Number(v) + a, 0);

console.log(factorial);
// 648
