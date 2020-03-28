/**

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

 */

function bigIntMultiplier(string, int) {
  //6227020800 14
  console.log(string, int);
  string = string + "";
  let result = "";
  let numbers = [];
  for (let i = 0; i < string.length; i++) {
    numbers.push(+string[i] * int);
  }
  numbers.reverse().forEach((num, i) => {
    let existingNo = result[i]
      ? Number(result.slice(-i - (num + "").length, -i)) + num
      : num;
    result = existingNo + result.slice(-i);
  });
  console.log(int, result);
  return result;
}

let factorial = Array.from({ length: 14 }, (_, i) => i + 1).reduce(
  (a, v) => (a = bigIntMultiplier(a, v))
);
//.split("");
//.reduce((a, v) => Number(v) + a, 0)
console.log(factorial.length);
// 545
/**
 * 13 '6227020800'
6227020800 14
14 '87178281200'
 */
