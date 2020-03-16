/**
    215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
    What is the sum of the digits of the number 21000?
 */

function bigIntMultiplier(string, int) {
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
  return result;
}

let num = 2;
for (let i = 1; i < 1000; i++) {
  num = bigIntMultiplier(num, 2);
}

console.log(
  num,
  [...(num + "")].reduce((a, v) => +v + a, 0)
);
