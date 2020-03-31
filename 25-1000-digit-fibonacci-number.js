/**
The Fibonacci sequence is defined by the recurrence relation:

    Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

Hence the first 12 terms will be:

    F1 = 1
    F2 = 1
    F3 = 2
    F4 = 3
    F5 = 5
    F6 = 8
    F7 = 13
    F8 = 21
    F9 = 34
    F10 = 55
    F11 = 89
    F12 = 144

The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
 */

function bigIntAddition(string1, string2) {
  string1 = [...string1].reverse();
  string2 = [...string2].reverse();
  let result = new Array(string2.length).fill(0);
  for (let i = 0; i < string2.length; i++) {
    let number =
      +(string1[i] ? +string1[i] + Number(string2[i]) : +string2[i]) +
      result[i];
    number > 9
      ? ((result[i] = number % 10), (result[i + 1] = 1))
      : (result[i] = number);
  }
  return result.reverse().join("");
}

let first = "89";
let sec = "144";
let i = 12;
while (true) {
  let num = bigIntAddition(first, sec);
  first = sec;
  sec = num;
  i++;
  // console.log(i, num);
  if (num.length === 1000) {
    break;
  }
}
console.log(i, sec);
